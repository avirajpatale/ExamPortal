import React, { useState } from 'react'
import { Form, Container, Row, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { URL } from '../../util/config'
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

export default function Paperlogin() {

  const [paperId, setPaperId] = useState('')
  const [paperPassword, setPaperPassword] = useState('')
  const history = useHistory()

  const takeExam = () => {
    if (paperId.length == 0) {
      toast.warning('Pleas enter PaperId')
    } else if (paperPassword.length == 0) {
      toast.warning('Please enter PaperCode')
    } else {

      const url = `${URL}/paper/login`

      const body = {
        paperId,
        paperPassword
      }

      console.log(body)

      axios.post(url, body).then((response) => {

        if (response.data.paperPassword == paperPassword) {

          toast.success('Correct PaperDetails')

          sessionStorage.setItem('paperId', JSON.stringify(response.data))
          console.log(sessionStorage.getItem('paperId'))

          history.push('/studentdetails')
        }
      }).catch(error => {
        if (error) { toast.error('Paper login failed') }
      })
    }
  }


  return (
    <Container style={{ minHeight: "58vh", marginTop: "150px" }}>
      <h4 style={{ textAlign: "center" }}>Paper Details</h4>
      <Form>
        <Row>
          <div className="col"></div>
          <div className="col">
            <div className="mb-3">
              <label className="form-label">Paper ID</label>
              <input type="number" className="form-control" onChange={(e) => {
                setPaperId(e.target.value)
              }} />
            </div>
            <div className="mb-3">
              <label className="form-label">Paper Code</label>
              <input type="password" className="form-control" onChange={(e) => {
                setPaperPassword(e.target.value)
              }} />
            </div>
            <div className="mb-3">
              <Button className="btn btn-primary" onClick={takeExam}>Take Exam</Button>
            </div>
          </div>
          <div className="col"></div>
        </Row>
      </Form>
    </Container>
  )
}
