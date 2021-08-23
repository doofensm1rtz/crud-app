import React, { useState } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const UrlForm = () => {
  const [name, setName] = useState("");
  const [urlOne, setUrlOne] = useState("");
  const [urlTwo, setUrlTwo] = useState("");
  const [urlThree, setUrlThree] = useState("");

  const handleUrlsSave = () => {
    const url = "http://localhost:8080/api/urls";
    const data = {
      name,
      url: [urlOne, urlTwo, urlThree],
    };

    axios
      .post(url, data)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  const handleUrlsUpdate = () => {
    const url = "http://localhost:8080/api/urls/" + name;
    const data = {
      name,
      url: [urlOne, urlTwo, urlThree],
    };

    axios
      .put(url, data)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col xs={{ span: 6, offset: 3 }}>
          <Form>
            <Form.Group className="mb-3" controlId="urlForm.competitorName">
              <Form.Label>Competitor Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ex. Facebook"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="urlForm.url1">
              <Form.Label>URL 1</Form.Label>
              <Form.Control
                type="text"
                placeholder="https://www.facebook.com/"
                value={urlOne}
                onChange={(e) => setUrlOne(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="urlForm.url2">
              <Form.Label>URL 2</Form.Label>
              <Form.Control
                type="text"
                value={urlTwo}
                onChange={(e) => setUrlTwo(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="urlForm.url3">
              <Form.Label>URL 3</Form.Label>
              <Form.Control
                type="text"
                value={urlThree}
                onChange={(e) => setUrlThree(e.target.value)}
              />
            </Form.Group>
            <Button variant="success" onClick={handleUrlsSave}>
              Save
            </Button>
            <Button
              variant="primary"
              className="mx-4"
              onClick={handleUrlsUpdate}
            >
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
