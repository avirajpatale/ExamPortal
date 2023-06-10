import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Table from './Table'
import Download from './Download'
import useAuth from '../../util/useAuth'
import { URL } from '../../util/config'
import axios from 'axios'
import { Button } from 'react-bootstrap'

export default function Result() {

    useAuth()
    const [paperId, setPaperId] = useState(0)
    const [res, setRes] = useState([])
    const url = `${URL}/paper/fetch-results/${paperId}`
    const jwt = JSON.parse(sessionStorage.getItem('jwt'))

    const fetchRes = () => {
        axios.get(url, {
            headers: {
                "Authorization": `Bearer ${jwt}`
            }
        }).then((response) => {
            setRes(response.data)
        }).catch(error => {
            if (error) { console.log('Error while fetching data') }
        })
    }

    const column = [
        { heading: 'Student Id', value: 'studentId' },
        { heading: 'Student Name', value: 'studentName' },
        { heading: 'Student PRN', value: 'prn' },
        { heading: 'Obtained Marks', value: 'marksObtained' },
        { heading: 'Submission Date&Time', value: 'submittedOn' }
    ]

    return (
        <Container>
            <div className="card">
                <h5 className="card-header">Fetch Results</h5>
                <div className="card-body">
                    <p className="card-text">Enter paper id to fetch results for paper.</p>
                    <input type='number' id='paperId' onChange={(e) => {
                        setPaperId(e.target.value)
                    }} />&nbsp;&nbsp;
                    <Button className="btn btn-outline-dark" onClick={fetchRes}>Fetch</Button>
                </div>
            </div>
            <hr></hr>
            <h3 style={{ textAlign: "center" }}>Result Table</h3>
            <hr></hr>
            <Table data={res} column={column} />
            <Download id={paperId} />
        </Container>
    )
}
