import React, { useState } from 'react'
import { Container, Row, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast } from 'react-toastify';
import { URL } from '../../util/config'
import axios from 'axios';
import { useHistory } from 'react-router-dom';


export default function Forgetpassword() {

    const [email, setEmail] = useState('')
    const [dob, setDob] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    const forgetPassword = () => {
        if (email.length == 0) {
            toast.warning('Please Enter Email')
        } else if (dob.length == 0) {
            toast.warning('Please Enter DOB')
        } else if (password.length < 8) {
            toast.warning('Please Enter NewPassword && Password min lenth is 8')
        } else {

            const body = {
                email,
                dob,
                password
            }

            const url = `${URL}/papersetter/forgot-password`

            axios.post(url, body).then((response) => {
                if (response.status == 200) {
                    toast.success('Password changed successfully')
                }
                history.push('/login')
            }).catch((error) => {
                if (error) { toast.error('Password change failed') }
            })
        }
    }

    return (

        <Container className='mt-5'>
            <h4 style={{ textAlign: "center" }}>Forget Password</h4>
            <Row>
                <div className="col"></div>
                <div className="col">
                    <div className="form">
                        <div className="mb-3">
                            <label htmlFor="" className="label-control">Email Address *</label>
                            <input className="form-control" onChange={(e) => {
                                setEmail(e.target.value)
                            }} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="label-control">Date of Birth *</label>
                            <input placeholder="Select date" type="date" className="form-control" onChange={(e) => {
                                setDob(e.target.value)
                            }} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="label-control">
                                New Password *
                            </label>
                            <input className="form-control" onChange={(e) => {
                                setPassword(e.target.value)
                            }} />
                        </div>
                        <div className="mb-3">
                            <div>
                                All fields with * are necessary
                            </div>
                            <Button className="btn btn-primary" onClick={forgetPassword}>Change Password</Button>
                        </div>
                    </div>
                </div>
                <div className="col"></div>
            </Row>
        </Container>

    )
}
