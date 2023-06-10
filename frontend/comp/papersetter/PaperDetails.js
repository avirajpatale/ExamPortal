import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import useAuth from '../../util/useAuth'
import { URL } from '../../util/config'
import { toast } from 'react-toastify'
import { useHistory } from 'react-router'
import axios from 'axios'

export default function PaperDetails() {

    useAuth()

    const [paperName, setPaperName] = useState('')
    const [paperSubject, setPaperSubject] = useState('')
    const [difficultyLevel, setDifficultyLevel] = useState('EASY')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [paperPassword, setPaperPassword] = useState('')
    const [duration, setDuration] = useState('')
    const [totalMarks, setTotalMarks] = useState('')
    const [totalQuestions, setTotalQuestions] = useState('')
    const history = useHistory()
    const paperSetterId = JSON.parse(sessionStorage.getItem('paperSetterId'))
    const onCreate = () => {
        if (paperName.length == 0) {
            toast.warning('Please Enter Paper Name')
        } else if (paperSubject.length == 0) {
            toast.warning('Please Enter Paper Subject')
        } else if (difficultyLevel.length == 0) {
            toast.warning('Please Enter Difficulty Level')
        } else if (startDate.length == 0) {
            toast.warning('Please Enter Start Date')
        } else if (endDate.length == 0) {
            toast.warning('Please Enter End Date')
        } else if (paperPassword.length == 0) {
            toast.warning('Please Enter PaperPassword')
        } else if (duration.length == 0) {
            toast.warning('Please Enter Duration')
        } else if (totalMarks.length == 0) {
            toast.warning('Please Enter Total Marks')
        } else if (totalQuestions.length == 0) {
            toast.warning('Please Enter Total Questions')
        } else {
            const body = {
                paperName,
                paperSubject,
                difficultyLevel,
                startDate,
                endDate,
                paperPassword,
                duration,
                totalMarks,
                totalQuestions,
                paperSetterId
            }

            const jwt = JSON.parse(sessionStorage.getItem('jwt'))
            const url = `${URL}/paper/create`
            axios.post(url, body, {
                headers:
                {
                    "Authorization": `Bearer ${jwt}`
                }
            }).then(resp => {
                if (resp.status == 201) {
                    toast.success('paper created')
                    const paperId = resp.data['paperId']
                    const paperSubject = resp.data['paperSubject']
                    const totalQuestions = resp.data['totalQuestions']
                    toast.success(`paper with paperId:${paperId} is created`)
                    console.log(resp.data)

                    sessionStorage.setItem('paperId', paperId)
                    sessionStorage.setItem('paperSubject', paperSubject)
                    sessionStorage.setItem('totalQuestions', totalQuestions)
                    const url_2 = `${URL}/paper/review/${paperId}`
                    axios.get(url_2, {
                        headers: {
                            "Authorization": `Bearer ${jwt}`
                        }
                    }).catch(error => {
                        if (error) { console.log('Error in review') }
                    })
                    history.push('/question')
                }
            }).catch(error => {
                if (error) { console.log('Error in create paper') }
            })
        }
    }

    return (
        <Container>
            <h2 style={{ textAlign: "center" }}>Paper Details</h2>
            <div class="row">
                <div className="col">
                    <div className="form">
                        <div className="mb-3">
                            <label htmlFor="" className="label-control">Paper Name</label>
                            <input className="form-control" onChange={(e) => {
                                setPaperName(e.target.value)
                            }} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="label-control">Paper Subject</label>
                            <input type="text" className="form-control" onChange={(e) => {
                                setPaperSubject(e.target.value)
                            }} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="label-control">Difficulty Level</label>
                            <select class="form-select" aria-label="Default select example" onChange={(e) => {
                                setDifficultyLevel(e.target.value)
                            }}>
                                <option value="EASY">Easy</option>
                                <option value="MEDIUM">Medium</option>
                                <option value="HARD">Hard</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="label-control">Start Date</label>
                            <input type="datetime-local" className="form-control" onChange={(e) => {
                                setStartDate(e.target.value)
                            }} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="label-control">End Date</label>
                            <input type="datetime-local" className="form-control" onChange={(e) => {
                                setEndDate(e.target.value)
                            }} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="label-control">Paper Password</label>
                            <input type="password" className="form-control" onChange={(e) => {
                                setPaperPassword(e.target.value)
                            }} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="label-control">Duration</label>
                            <input type="time" className="form-control" onChange={(e) => {
                                setDuration(e.target.value)
                            }} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="label-control">Total Marks</label>
                            <input type="number" className="form-control" onChange={(e) => {
                                setTotalMarks(e.target.value)
                            }} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="label-control">Total Number of Questions</label>
                            <input type="number" className="form-control" onChange={(e) => {
                                setTotalQuestions(e.target.value)
                            }} />
                        </div>
                        <div className="mb-3">
                            <Button class="btn btn-primary" onClick={onCreate}>Create</Button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}
