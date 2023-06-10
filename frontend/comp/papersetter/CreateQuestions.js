import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import useAuth from '../../util/useAuth'
import { toast } from 'react-toastify'
import { URL } from '../../util/config'
import axios from 'axios'
import { useHistory } from 'react-router'

export default function CreateQuestions() {

    useAuth()

    let total_questions = sessionStorage.getItem('totalQuestions')
    const paper_id = sessionStorage.getItem('paperId')
    const paper_subject = sessionStorage.getItem('paperSubject')
    let remainingQuestions = total_questions
    const [val, setVal] = useState(remainingQuestions)

    const [points, setPoints] = useState('')
    const [question, setQuestion] = useState('')
    const [questionType, setQuestionType] = useState('MCQ')
    const [options, setOptions] = useState([])
    const [isCorrect, setIsCorrect] = useState([])
    const history = useHistory()
    const merge = () => {
        var finaloptions = new Array();
        options.forEach((e, index) => {
            let finlChoice = { choice: e.choice, isCorrect: isCorrect[index].isCorrect };
            finaloptions.push(finlChoice);
            console.log(e, isCorrect[index]);
        });
        console.log(finaloptions);
        return finaloptions;
    }

    if (val == 0) {
        toast.info('All questions are done')
        history.push('/dashboard')
    }
    const onCreate = () => {
        setVal(val => val - 1)
        let choices = merge()
        const body = {
            paperId: paper_id,
            points,
            question,
            questionType,
            choices
        }
        console.log(body)
        const jwt = JSON.parse(sessionStorage.getItem('jwt'))
        const url = `${URL}/question/create`
        axios.post(url, body, {
            headers: {
                'Authorization': `Bearer ${jwt}`
            }
        }).then((response) => {
            console.log(response.status)
            let val2 = val
            val2 = val2 - 1
            toast.info(`${val2} questions remaining`)

        })
        document.getElementById('form-1').reset()

    }

    return (
        <Container>
            <h1>Insert Questions</h1>
            <span><strong>PaperSubject</strong>: {paper_subject}</span>
            <span style={{ marginLeft: "60px" }}><strong>Total Questions</strong> : {val}</span>
            <br></br>
            <br></br>
            <Form id='form-1'>
                <div>
                    <Form.Select aria-label="Default select example">
                        <option>Open this select menu</option>
                        <option value="0">MCQ</option>
                    </Form.Select>
                </div>
                <div className='form-group'>
                    <label>Enter Question</label>
                    <input type='text' className='form-control' id='question' required onChange={(e) => {
                        setQuestion(e.target.value)
                    }} />
                </div>
                <div className='form-group'>
                    <label>Enter Points for Question</label>
                    <input type='number' className='form-control' id='points' required onChange={(e) => {
                        setPoints(e.target.value)
                    }} />
                </div>
                <div className='form-group'>
                    <label>Choices</label>
                    <div className='form-check'>
                        <label className='form-check-label'>
                            <input className='form-control' type='text' placeholder='Enter choice 1' id='choice1' name='choice' required onChange={(e) => {
                                setOptions([...options, { ...options[options.length], choice: e.target.value }])
                            }} />
                        </label>

                        <label className='form-check-label'>
                            <Form.Select aria-label="Default select example" onChange={(e) => {
                                setIsCorrect([...isCorrect, { ...isCorrect[isCorrect.length], isCorrect: e.target.value }])
                            }}>
                                <option>Open this select menu</option>
                                <option value="false">False</option>
                                <option value="true">True</option>
                            </Form.Select>
                        </label>
                    </div>
                    <div className='form-check'>
                        <label className='form-check-label'>
                            <input className='form-control' type='text' placeholder='Enter choice 2' id='choice2' name='choice' required onChange={(e) => {
                                setOptions([...options, { ...options[options.length], choice: e.target.value }])
                            }} />
                        </label>

                        <label className='form-check-label'>
                            <Form.Select aria-label="Default select example" onChange={(e) => {
                                setIsCorrect([...isCorrect, { ...isCorrect[isCorrect.length], isCorrect: e.target.value }])
                            }}>
                                <option>Open this select menu</option>
                                <option value="false">False</option>
                                <option value="true">True</option>
                            </Form.Select>
                        </label>
                    </div>
                    <div className='form-check'>
                        <label className='form-check-label'>
                            <input className='form-control' type='text' placeholder='Enter choice 3' id='choice3' name='choice' required onChange={(e) => {
                                setOptions([...options, { ...options[options.length], choice: e.target.value }])
                            }} />
                        </label>

                        <label className='form-check-label'>
                            <Form.Select aria-label="Default select example" onChange={(e) => {
                                setIsCorrect([...isCorrect, { ...isCorrect[isCorrect.length], isCorrect: e.target.value }])
                            }}>
                                <option>Open this select menu</option>
                                <option value="false">False</option>
                                <option value="true">True</option>
                            </Form.Select>
                        </label>
                    </div>
                    <div className='form-check'>
                        <label className='form-check-label'>
                            <input className='form-control' type='text' placeholder='Enter choice 4' id='choice4' name='choice' required onChange={(e) => {
                                setOptions([...options, { ...options[options.length], choice: e.target.value }])
                            }} />
                        </label>

                        <label className='form-check-label'>
                            <Form.Select aria-label="Default select example" onChange={(e) => {
                                setIsCorrect([...isCorrect, { ...isCorrect[isCorrect.length], isCorrect: e.target.value }])
                            }}>
                                <option>Open this select menu</option>
                                <option value="false">False</option>
                                <option value="true">True</option>
                            </Form.Select>
                        </label>
                    </div>
                </div>
                <Button className='btn btn-primary' onClick={onCreate}>Insert Question</Button>
            </Form>
        </Container>
    )
}
