import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { URL } from '../../util/config'
import { paperId, studentId } from '../../util/SessionStorage'
import useTimeout from '../../util/useTimeout'
import axios from 'axios'
import { Button, Form } from 'react-bootstrap'
import { toast } from 'react-toastify';


export default function PaperCom() {
    const history = useHistory()
    const [questionPaperConfig, setQuestionPaperConfig] = useState([])
    const url = `${URL}/paper/fetch/${paperId}`
    useEffect(() => {
        axios.get(url).then(({ data }) => setQuestionPaperConfig(data));
    }, [])

    sessionStorage.setItem('time', questionPaperConfig['duration'])
    const getQuestionsContent = () => {

        if (questionPaperConfig && !questionPaperConfig.questions) {
            return null;
        }
        return questionPaperConfig.questions.map((x, index) => {
            const updateChoice = (id, isCorrect) => {
                setQuestionPaperConfig((prevState) => {
                    const updatedQuestions = [...prevState.questions];
                    updatedQuestions.forEach((q) => {
                        if (q.questionId === x.questionId) {
                            q.selectedChoice = id
                            q.isCorrect = isCorrect
                        }
                    });

                    return {
                        ...prevState,
                        questions: updatedQuestions
                    }
                })

            }
            return (<>
                <hr></hr>
                <h4>{index + 1}&#41;&nbsp;&nbsp;{x['question']}</h4>
                <hr></hr>
                <h4>{x['choices'].map((y, index) => {
                    return (<div className='form-check'  >
                        <input className='form-check-input' type='radio' name={x['questionId']} value={y['correct']} id={y['choiceId']} onChange={e => updateChoice(y.choiceId, y.correct)} />
                        <label className='form-check-label'>{y['choice']}</label>
                    </div>)
                })}</h4>
            </>)
        })
    }

    const saveForm = (e) => {
        e.preventDefault()
        console.log('xoxo')
        console.log(questionPaperConfig)
        let queArray = questionPaperConfig['questions']
        console.log(queArray)
        let ansArray = queArray.map(x => (x['isCorrect']))
        console.log(ansArray)
        let result = ansArray.filter(val => val === true).length * (questionPaperConfig['totalMarks'] / questionPaperConfig['totalQuestions'])
        console.log(result)
        let date = new Date()
        let isoDate = date.toISOString()
        const body = {
            'marksObtained': result,
            'studentId': studentId,
            'submittedOn': isoDate
        }

        const resUrl = `${URL}/student/result`

        axios.post(resUrl, body).then(resp => {
            if (resp.status === 200) {
                toast.success('Paper submitted successfully')
                history.push('/home')
            }
        }).catch(err => {
            if (err) {
                toast.error('Paper submission failed!!!')
            }
        })
    }

    useTimeout(() => {
        saveForm()
    }, 600000)

    return (
        <div>
            <Form >
                <div>{getQuestionsContent()}</div>
                <Button type='submit' onClick={saveForm} className='btn btn-primary'>Submit Exam</Button>
            </Form>
        </div>
    )
}
