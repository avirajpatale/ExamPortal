import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { URL } from '../../util/config'
import useAuth from '../../util/useAuth'
import { Button } from 'react-bootstrap'

export default function Download() {

    useAuth()
    const [paperId, setPaperId] = useState(0)
    const url = `${URL}/paper/download/${paperId}`
    const jwt = JSON.parse(sessionStorage.getItem('jwt'))
    const downloadPaper = () => {
        axios.get(url, {
            headers: {
                "Authorization": `Bearer ${jwt}`
            }
        }).then(response => {
            if (response.status != 200) {
                toast.error('Error while downloading paper')
            }
        }).catch(error => {
            if (error) {
                console.log('Error in download paper')
            }
        })

    }
    return (
        <div className="card">
            <h5 className="card-header">Download</h5>
            <div className="card-body">
                {/* <h5 className="card-title">Special title treatment</h5> */}
                <p className="card-text">Enter paper id to download paper.</p>
                <input type='number' id='paperId' onChange={(e) => {
                    setPaperId(e.target.value)
                }} />&nbsp;&nbsp;
                <Button className="btn btn-outline-dark" onClick={downloadPaper}>Download</Button>
            </div>
        </div>
    )
}
