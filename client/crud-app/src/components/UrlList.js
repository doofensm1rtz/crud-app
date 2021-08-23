import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";

const UrlList = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col xs={{ span: 6, offset: 3 }}>
          <ListGroup as="ul">
            <ListGroup.Item as="li" active>
              Competitor Name: Bootstrap
            </ListGroup.Item>
            <ListGroup.Item as="li">
              https://react-bootstrap.netlify.app/components/list-group/
            </ListGroup.Item>
            <ListGroup.Item as="li">
              https://react-bootstrap.netlify.app/components/breadcrumb/
            </ListGroup.Item>
            <ListGroup.Item as="li">
              https://react-bootstrap.netlify.app/components/accordion/
            </ListGroup.Item>
          </ListGroup>

          <ListGroup as="ul" className="mt-4">
            <ListGroup.Item as="li" active>
              Competitor Name: Bootstrap
            </ListGroup.Item>
            <ListGroup.Item as="li">
              https://react-bootstrap.netlify.app/components/list-group/
            </ListGroup.Item>
            <ListGroup.Item as="li">
              https://react-bootstrap.netlify.app/components/breadcrumb/
            </ListGroup.Item>
            <ListGroup.Item as="li">
              https://react-bootstrap.netlify.app/components/accordion/
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default UrlList;
