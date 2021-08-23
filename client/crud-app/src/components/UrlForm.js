import React from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const UrlForm = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col xs={{ span: 6, offset: 3 }}>
          <Form>
            <Form.Group className="mb-3" controlId="urlForm.competitorName">
              <Form.Label>Competitor Name</Form.Label>
              <Form.Control type="text" placeholder="Ex. Facebook" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="urlForm.url1">
              <Form.Label>URL 1</Form.Label>
              <Form.Control
                type="text"
                placeholder="https://www.facebook.com/"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="urlForm.url2">
              <Form.Label>URL 2</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="urlForm.url3">
              <Form.Label>URL 3</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Button variant="success">Save</Button>
            <Button variant="primary" className="mx-4">
              Update
            </Button>
            <Link to="/urlslist">
              <Button variant="danger">View URLs</Button>
            </Link>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default UrlForm;
