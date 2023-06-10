import React from 'react'
import '../style/home.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Home() {
  return (

    <Container className='home_container mt-5 bg-image d-flex justify-content-center align-items-center'>
      <div>
        <h2 className="h1 h1-reponsive white-text font-up font-bold mb-3 wow fadeInDown" data-wow-delay="0.3s">
          <strong>EXAM PORTAL</strong></h2>
        <Link className='btn btn-primary' role='button' to='/paperlogin'>Take Exam</Link>
      </div>
    </Container>

  )
}
