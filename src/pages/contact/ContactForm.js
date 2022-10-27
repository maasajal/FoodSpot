import { useRef } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import "./Contact.css";

const ContactForm = (props) => {
  const nameRef = useRef("");
  const phoneRef = useRef("");
  const emailRef = useRef("");
  const msgRef = useRef("");

  const submitHandler = (e) => {
    e.preventDefault();

    const contact = {
      name: nameRef.current.value,
      phone: phoneRef.current.value,
      email: emailRef.current.value,
      msg: msgRef.current.value,
    };

    props.onContact(contact);

    nameRef.current.value = "";
    phoneRef.current.value = "";
    emailRef.current.value = "";
    msgRef.current.value = "";
  };

  return (
    <>
      <div className="contactForm d-flex justify-content-center">
        <Form onSubmit={submitHandler}>
          <Row>
            <Col sm={12} lg={12}>
              <Form.Group className="mb-3" controlId="formGridName">
                <Form.Control
                  type="text"
                  ref={nameRef}
                  placeholder="Name"
                  required
                />
              </Form.Group>
            </Col>
            <Col sm={12} lg={12}>
              <Form.Group className="mb-3" controlId="formGridPhone">
                <Form.Control
                  type="text"
                  ref={phoneRef}
                  placeholder="Phone"
                  required
                />
              </Form.Group>
            </Col>
            <Col sm={12} lg={12}>
              <Form.Group className="mb-3" controlId="formGridEmail">
                <Form.Control
                  type="email"
                  ref={emailRef}
                  placeholder="Email"
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3" controlId="formGridMessage">
            <Form.Control
              as="textarea"
              ref={msgRef}
              rows={8}
              placeholder="Message..."
              required
            />
          </Form.Group>
          <Button type="submit" className="send-btn">
            Send
          </Button>
        </Form>
      </div>
    </>
  );
};

export default ContactForm;
