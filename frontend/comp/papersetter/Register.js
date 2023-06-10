import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { URL } from '../../util/config'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Register() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState('');
    const [password, setPassword] = useState('');


    const register = () => {
        if (name.length == 0) {
            toast.warning('Please Enter Name')
        } else if (email.length == 0) {
            toast.warning('Please Enter Email')
        } else if (dob.length == 0) {
            toast.warning('Please Enter DOB')
        } else if (password.length < 8) {
            toast.warning('Password min length is 8')
        } else {
            const body = {
                name,
                email,
                dob,
                password
            }

            console.log(body)

            const url = `${URL}/papersetter/signup`

            axios.post(url, body).then((response) => {

                const result = response.data.email

                console.log(result)

                if (result == email) {
                    toast.success('User Registered')
                } else {
                    toast.error('User Registeration Failed')
                }
            })
        }
    }


    return (

        <Container className='mt-5'>
            <h4 style={{ textAlign: "center" }}>Register</h4>
            <div className="row">
                <div className="col"></div>
                <div className="col">

                    <div className="form">

                        <div className="mb-3">
                            <label htmlFor="" className="label-control">Name *</label>
                            <input className="form-control" onChange={(e) => {
                                setName(e.target.value)
                            }} />
                        </div>

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
                                Password *
                            </label>
                            <input className="form-control" onChange={(e) => {
                                setPassword(e.target.value)
                            }} />
                        </div>

                        <div className="mb-3">
                            <div>
                                All fields with * are necessary
                            </div>
                            <button className="btn btn-primary" onClick={register}>Register</button>
                        </div>
                    </div>
                </div>
                <div className="col"></div>
            </div>
        </Container>

    )
}
