import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import useAuth from '../../util/useAuth'

export default function Dashboard() {

    useAuth()

    return (
        <Container className='mt-5'>
            <h1> Dashboard </h1>
            <p>This is the Dashboard where you can create paper and add questions, publish the paper, and view results of available papers.</p>
            <ul className="list-group">
                <li className="list-group-item">
                    <Link to="/createpaper"> Create Paper</Link>
                    <ul>
                        <li>Create a new Paper</li>
                    </ul>
                </li>
                <li className="list-group-item">
                    <Link to="/publish"> Publish Paper</Link>
                    <ul>
                        <li>Review or download created paper</li>
                    </ul>
                </li>
                <li className="list-group-item">
                    <Link to="/result">View Result</Link>
                    <ul>
                        <li>View scores of students who attempted the paper</li>
                    </ul>
                </li>
            </ul>
            <hr style={{ marginBottom: "130px" }} />
        </Container>
    )
}
