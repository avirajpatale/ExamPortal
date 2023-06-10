import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { toast } from 'react-toastify'
import { URL } from '../../util/config'
import useAuth from '../../util/useAuth'
import Download from './Download'
import Table from './Table'

export default function Publish() {

    useAuth()
    const jwt = JSON.parse(sessionStorage.getItem('jwt'))
    const paperSetterId = JSON.parse(sessionStorage.getItem('paperSetterId'))
    const url = `${URL}/paper/details/${paperSetterId}`
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(url, {
            headers: {
                "Authorization": `Bearer ${jwt}`
            }
        }).then((response) => {
            setData(response.data)
        }).catch(error => {
            if (error) {
                toast.error('Error while fetching table data :(')
            }
        })
    }, [])

    const column = [
        {heading: 'PaperId', value: 'paperId'},
        { heading: 'PaperName', value: 'paperName' },
        { heading: 'Subject', value: 'paperSubject' },
        { heading: 'Questions', value: 'totalQuestions' },
        { heading: 'Marks', value: 'totalMarks' },
        { heading: 'Difficulty', value: 'difficultyLevel' }
    ]

    return (
        <Container>
            <h3 style={{textAlign:"center"}}>Paper Table</h3>
            <hr></hr>
            <Table data={data} column={column} />
            <Download />
        </Container>
    )
}
