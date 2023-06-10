import React from 'react'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Aboutus() {
    return (

        <Container className='mt-5'>
            <div>
                <h1>About us</h1> <hr></hr> <br></br>
            </div>
            <Container className='border border-dark'>
                <p>
                    PAREEKSHA is an Online Examination system, brought to you by Exam Portal Pvt. Ltd. It was designed
                    with a mission to strive for excellence, with an expertise in driving assessments in the educational
                    domain. We prioritize quality customer experience with a goal to conduct test online assuring
                    minimal human-intervention.</p>
                <p>
                    We provide the management of examination and assessment, using an advanced hassle-free transactional
                    interface. The streamlined process flow help with the easy creation of tests, circulation of
                    products, calculation of scores, etc. It provides development of an improved communication link
                    in-between the assessor and the assessee. Multiple tests can be clubbed together to form a product
                    that can be purchased by the candidate and would contribute to the revenue generation. Secured flow
                    of information, synchronized android and iOS interface will take
                    you to the next level of examination. The panel is self- operational
                    that is extremely easy to use and learn.</p>
                <p>
                    Now, perform exams meeting your requirements to restrict and liberate the movement, depute
                    timelines, transparency of the text, shuffle and randomize, define guidelines, use tags assuring
                    smoother search, allocate penalty on incorrect attempts, and more wherever and whenever you want to.
                </p>
            </Container>
        </Container>

    )
}
