import React, { useEffect } from "react";
import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { SET_URLS } from "../actions";

const UrlList = () => {
  const urlsData = useSelector((state) => state.urls);
  const dispatch = useDispatch();

  const handleUrlDelete = (competitorName) => {
    const url = "http://localhost:8080/api/urls/" + competitorName;
    axios
      .delete(url)
      .then((res) => {
        console.log(res.data);
        getUrlsData();
      })
      .catch((err) => console.log(err));
  };

  const getUrlsData = () => {
    const url = "http://localhost:8080/api/urls";

    axios
      .get(url)
      .then((res) => {
        dispatch(SET_URLS(res.data));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getUrlsData();
  }, []);

  return (
    <Container className="mt-4">
      <Row>
        <Col xs={{ span: 6, offset: 3 }}>
          {urlsData.map((data, index) => (
            <ListGroup as="ul" key={index} className="mt-4">
              <ListGroup.Item as="li">
                Competitor Name: {data.name}
                <Button
                  style={{ float: "right" }}
                  variant="danger"
                  onClick={() => {
                    handleUrlDelete(data.name);
                  }}
                >
                  Delete
                </Button>
              </ListGroup.Item>
              {data.url.map((url, index) => (
                <ListGroup.Item as="li" key={index}>
                  {url}
                </ListGroup.Item>
              ))}
            </ListGroup>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default UrlList;
