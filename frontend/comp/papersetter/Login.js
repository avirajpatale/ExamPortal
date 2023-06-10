import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { URL } from '../../util/config'
import axios from 'axios'
import { toast } from 'react-toastify'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'


export default function Login() {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const histroy = useHistory();

    const login = () => {
        if (userName.length == 0) {
            toast.warning('Please Enter Email')
        } else if (password.length == 0 || password.length < 8) {
            toast.warning('Please Enter Password & Min lenth is 8')
        } else {
            const body = {
                userName,
                password
            }
            const url = `${URL}/papersetter/login`
            axios.post(url, body).then((response) => {
                const result = response.data
                if (response.status == 200) {
                    toast.success('Login successfull')
                    sessionStorage.setItem('jwt', JSON.stringify(response.data.jwt));
                    console.log(sessionStorage.getItem('jwt'))

                    const jwt = JSON.parse(sessionStorage.getItem('jwt'))
                    const id_url = `${URL}/papersetter/id`
                    axios.get(id_url, {
                        headers: {
                            "Authorization": `Bearer ${jwt}`
                        }
                    }).then(response => {
                        const paperSetterId = response.data
                        sessionStorage.setItem('paperSetterId', paperSetterId)
                    }).catch((error) => {
                        if (error) { console.log('Error in papersetter/id call') }
                    })
                    histroy.push('/dashboard')
                }
                console.log(result)
            }).catch(error => {
                if (error) { toast.error('Login failed') }
            })
        }
    }

    return (

        <Container className='mt-5' style={{ minHeight: "52vh" }}>
            <h4 style={{ textAlign: "center" }}>Login Details</h4>
            <Form>
                <div className="row">
                    <div className="col"></div>
                    <div className="col">
                        <div className="mb-3">
                            <label className="form-label">Email Address</label>
                            <input type="text" className="form-control" onChange={(e) => {
                                setUserName(e.target.value)
                            }} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" onChange={(e) => {
                                setPassword(e.target.value)
                            }} />
                        </div>
                        <div className="mb-3">
                            <div>
                                Forget your password? <Link to="/forgetpassword">click Here</Link>
                            </div>
                            <Button onClick={login} className="btn btn-success">Login</Button>
                        </div>
                    </div>
                    <div className="col"></div>
                </div>
            </Form>
        </Container>

    )
}
