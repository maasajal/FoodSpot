import { useState, useEffect } from "react";
import { Col, Row, Form } from "react-bootstrap";
import "./Contact.css";
import ContactForm from "./ContactForm";

const firebaseApi =
  "https://food-spot-tre-default-rtdb.europe-west1.firebasedatabase.app/contact.json";

const Contact = () => {
  const [contact, setContact] = useState([]);
  const contactHandler = async (contact) => {
    console.log(contact);
    const response = await fetch(firebaseApi, {
      method: "POST",
      body: JSON.stringify(contact),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };

  const fetchContact = async () => {
    const response = await fetch(firebaseApi);
    const data = await response.json();

    const fetchedContact = [];

    for (const key in data) {
      fetchedContact.push({
        id: key,
        name: data[key].name,
        phone: data[key].phone,
        email: data[key].email,
        msg: data[key].msg,
      });
    }
    setContact(fetchedContact);
  };

  useEffect(() => {
    fetchContact();
  }, [fetchContact]);

  return (
    <main className="contact">
      <section className="contact-title page-title">
        <h1>Contact Us</h1>
        <p>
          If you want to discuss about food recipes, fill up the form and send
          us!
        </p>
      </section>
      <br />
      <br />
      <section>
        <ContactForm onContact={contactHandler} />
      </section>
    </main>
  );
};

export default Contact;
