import axios from 'axios'
import React from 'react'
import { toast } from 'react-toastify'
import { URL } from '../../util/config'
import { Button } from 'react-bootstrap'

export default function Download(id) {

    const jwt = JSON.parse(sessionStorage.getItem('jwt'))
    const paperId = id['id']
    const url = `${URL}/paper/download-result/${paperId}`

    const downloadResults = () => {
        axios.get(url, {
            headers: {
                "Authorization": `Bearer ${jwt}`
            }
        }).then((response) => {
            if (response.status != 200) {
                toast.error('Error while downloading result')
            }
        }).catch((error) => {
            if (error) { console.log('Error in downloading results') }
        })
    }

    return (
        <div className="card">
            {/* <h5 className="card-header">Download</h5> */}
            <div className="card-body">
                <p className="card-text">Download results.</p>
                <Button className="btn btn-outline-dark" onClick={downloadResults}>Download</Button>
            </div>
        </div>
    )
}
