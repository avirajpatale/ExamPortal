import React from 'react'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Contactus() {
    return (
        <Container className='mt-5'>
            <h2>Contact Us</h2>
            <hr />
            <div className='flex-column justify-content-center ' style={{ marginTop: "5rem" }}>
                <div className="card text-center" style={{ width: "50rem", margin: "0 auto" }}>
                    <h5 className="card-header">Call Us</h5>
                    <div className="card-body">
                        <h5 className="card-title">Mobile Number</h5>
                        <p className="card-text">1010101010</p>
                    </div>
                </div>
                <div className="card text-center" style={{ width: "50rem", margin: "0 auto" }}>
                    <h5 className="card-header">Mail Us</h5>
                    <div className="card-body">
                        <h5 className="card-title">Email Id</h5>
                        <p className="card-text">query@exam.com</p>
                    </div>
                </div>
                <div className="card text-center" style={{ width: "50rem", margin: "0 auto" }}>
                    <h5 className="card-header">Address</h5>
                    <div className="card-body">
                        <h5 className="card-title">Address</h5>
                        <p className="card-text">Exam Portal Pvt Ltd,<br />&nbsp;Pune, Maharashtra - 411001<br /></p>
                    </div>
                </div>
            </div>
        </Container>
    )
}
