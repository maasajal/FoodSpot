import React from 'react';
import {
    Col,
    Row,
    Form } from 'react-bootstrap'
import './Contact.css'

export default function ContactForm() {
    
    return(
        <div>
            <div className='contactForm d-flex justify-content-center'>
                <Form >
                    <Row>
                        <Col sm={12} lg={12}>
                            <Form.Group className="mb-3" controlId="formGridName">
                                <Form.Control type="text" placeholder="Name" required   />
                            </Form.Group>
                        </Col>
                        <Col sm={12} lg={12}>
                            <Form.Group className="mb-3" controlId="formGridPhone">
                                <Form.Control type="text" placeholder="Phone"  required />
                            </Form.Group>
                        </Col>
                        <Col sm={12} lg={12}>
                            <Form.Group className="mb-3" controlId="formGridEmail">
                                <Form.Control type="email" placeholder="Email" required  />
                            </Form.Group>
                        </Col>

                    </Row>
                    <Form.Group className="mb-3" controlId="formGridMessage">
                        <Form.Control as="textarea" rows={8} placeholder="Message..."required />
                    </Form.Group>
                    <div className='' >
                        <button className='send-btn' >Send</button>  
                    </div>
                </Form>
            </div>
        </div>
    )
}