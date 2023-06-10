import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card } from 'react-bootstrap'
import { paperSubject, noOfQuestions } from '../../util/SessionStorage'
import { Link } from 'react-router-dom';

export default function Instructions() {
    console.log(paperSubject)
    const paper = JSON.parse(sessionStorage.getItem('paperId'))
    const duration = paper['duration']
    return (
        <Container className='mt-5'>
            <Card>
                <div className="card-body">
                    <h3 className="card-title">Instructions</h3>
                    <h5 className="card-subtitle mb-2 text-muted">Please read before starting paper</h5>
                    <div className="card-text">
                        <ul>
                            <li> Welcome to Exam for {paperSubject} .</li>
                            <li> Paper has {noOfQuestions} questions.</li>
                            <li> Total time for exam is {duration} .</li>
                            <li> No Negative marking .</li>
                        </ul>
                    </div>
                    <div > <Link className="btn btn-success" role='button' to='/paper' >Begin Test</Link> </div>
                </div>
            </Card>
            <hr style={{ marginBottom: "210px" }} />
        </Container>
    )
}
