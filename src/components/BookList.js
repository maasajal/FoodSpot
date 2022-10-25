import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./BookList.css";

const BookList = (props) => {
  const reversed = [...props.books].reverse();
  return (
    <main>
      <Row xs={1} md={2} lg={3} xxl={4} className="book">
        {reversed.map((book) => (
          <Col>
            <Card>
              <Card.Img variant="top" src={props.avatar} alt={props.name} />
              <Card.Body>
                <Card.Title>Book Name: {book.title} </Card.Title>
                <Card.Subtitle>Author: {book.author} </Card.Subtitle> <br />
                <Card.Text>Published year: {book.year} </Card.Text>
                <Card.Text>Isbn no: {book.isbn} </Card.Text>
                <Card.Text>Price: € {book.price} </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </main>
  );
};
export default BookList;
