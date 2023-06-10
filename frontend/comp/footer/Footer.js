import React from 'react'
import '../../style/footer.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (

        <footer className="site-footer" style={{ bottom: "0" }}>
            <Container>
                <Row>
                    <div className="col-sm-12 col-md-6">
                        <h6>About</h6>
                        <p className="text-justify">Your ultimate destination for online assessment
                            Prepare candidates to perform extraordinarily with an easy to use highly interactive platform and
                            simplify the assessment cycle.
                        </p>
                    </div>

                    <div className="col-xs-6 col-md-3">
                        <h6>Address</h6>
                        <ul className="footer-links">
                            <li> Exam Portal Pvt Ltd, </li>
                            <li> Pune,Maharashtra -  411001</li>
                        </ul>
                    </div>
                    <div className="col-xs-6 col-md-3">
                        <h6>Quick Links</h6>
                        <ul className="footer-links">
                            <li> <Link to="/aboutus">About Us</Link></li>
                            <li> <Link to="/contactus"> Contact Us </Link> </li>
                            <li> <Link to="/privacypolicy"> Privacy Policy </Link> </li>
                        </ul>
                    </div>
                </Row>
            </Container>
            <Container>
                <Row>
                    <div className="col-md-8 col-sm-6 col-xs-12">
                        <p className="copyright-text">Copyright &copy; 2022 All Rights Reserved by Exam Portal
                        </p>
                    </div>
                </Row>
            </Container>
        </footer>

    )
}
