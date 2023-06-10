import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Button, Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { URL } from '../../util/config';
import axios from 'axios';

export default function StudentDetails() {

    const [prn, setPrn] = useState('')
    const [studentName, setStudentName] = useState('')
    const history = useHistory()

    const beginTest = () => {
        if (prn.length < 6 || prn.length > 6) {
            toast.warning('Please enter PRN number & exact length of PRN is 6')
        } else if (studentName.length == 0) {
            toast.warning('Please enter Name')
        } else {
            const ls = JSON.parse(sessionStorage.getItem('paperId'))
            console.log(ls)
            const tmp = ls['paperId']

            const body = {
                prn,
                studentName,
                paperId: tmp
            }

            console.log(body)

            const url = `${URL}/student/login`

            axios.post(url, body).then((response) => {
                sessionStorage.setItem('student', JSON.stringify(response.data))
                history.push('/instructions')
            }).catch((error) => {
                if (error) { toast.error('Sorry Internal Error :(') }
            })
        }
    }

    return (
        <Container className='mt-5' style={{ minHeight: "52vh", marginTop: "60px" }}>
            <h2 style={{ textAlign: "center" }}>StudentDetails</h2>
            <Row>
                <div className="col"></div>
                <div className="col">
                    <Form>
                        <div className="mb-3">
                            <label htmlFor="" className="label-control">Student Name</label>
                            <input className="form-control" onChange={(e) => {
                                setStudentName(e.target.value)
                            }} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="label-control">PRN</label>
                            <input type="number" className="form-control" onChange={(e) => {
                                setPrn(e.target.value)
                            }} />
                        </div>
                        <div className="mb-3">
                            <Button className="btn btn-primary" onClick={beginTest}>Begin Test</Button>
                        </div>
                    </Form>
                </div>
                <div className="col"></div>
            </Row>
        </Container>
    )
}
