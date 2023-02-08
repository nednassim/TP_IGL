import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
  Carousel,
} from 'react-bootstrap';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import Loader from '../components/Loader';
import axios from 'axios';
import products from '../products';
import Message from '../components/Message';

const EstatePage = () => {
  const { id } = useParams();
  const [estate, setEstate] = useState({});
  const [loading, setLoading] = useState(true);
  const [comment, setComment] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    const target = estate;
    target.comments.push({
      id: Math.floor(Math.random() * 100) + 1,
      owner: 'sohaib zouambia',
      createdAt: '08/02/2023',
      comment: comment,
    });
    axios.put(`http://localhost:8080/estates/${id}`, target, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    setEstate(target);
    setComment('');
    console.log('Comment Submitted');
  };

  useEffect(() => {
    const data = axios
      .get(`http://localhost:8080/estates/${id}`)
      .then((res) => {
        if (res) {
          setEstate(res.data);
          setLoading(false);
        }
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Row className="justify-content-center">
            <Col md={6}>
              <Carousel pause="hover" className="bg-dark">
                {products.map((product) => (
                  <Carousel.Item key={product.id}>
                    <img src={product.image} alt={product.name} />
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
            <Col md={3}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>{estate.name}</h3>
                  <span className="badge badge-info">{estate.category}</span>
                  <p>{estate.wilaya}</p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p>Surface: {estate.surface} m²</p>
                </ListGroup.Item>
                <ListGroup.Item>Price: {estate.price} DA</ListGroup.Item>
                <ListGroup.Item>
                  Description: {estate.description}
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
          <Row style={{ marginTop: 40 }}>
            <Col md={8}>
              <h2 style={{ marginLeft: 16 }}>Messages</h2>
              {estate.comments.length === 0 && <Message>No Comments</Message>}
              <ListGroup variant="flush">
                {estate.comments.map((comment) => (
                  <ListGroup.Item key={comment.id}>
                    <strong className="font-weight-bold">
                      {comment.owner}
                    </strong>
                    <p className="font-weight-bold">{comment.createdAt}</p>
                    <p>{comment.comment}</p>
                  </ListGroup.Item>
                ))}
                <ListGroup.Item>
                  <h2 style={{ marginTop: 40 }}>Leave a Comment</h2>
                  {/* {successProductReview && (
                    <Message variant="success">
                      Review submitted successfully
                    </Message>
                  )}
                  {loadingProductReview && <Loader />}
                  {errorProductReview && (
                    <Message variant="danger">{errorProductReview}</Message>
                  )} */}

                  {localStorage.getItem('userInfo') ? (
                    <Form onSubmit={(e) => submitHandler(e)}>
                      <Form.Group controlId="comment">
                        <Form.Label>Comment</Form.Label>
                        <Form.Control
                          as="textarea"
                          row="3"
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                      <Button type="submit" variant="primary">
                        Submit
                      </Button>
                    </Form>
                  ) : (
                    <Message>You need to login to be able to comment</Message>
                  )}

                  {/* <Message>
                      Please <Link to="/login">sign in</Link> to write a review{" "}
                    </Message> */}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>Contact Info</h3>
                  <p>Zouambia Sohaib</p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p>js_zouambia@esi.dz</p>
                </ListGroup.Item>
                <ListGroup.Item>0777087766</ListGroup.Item>
                <ListGroup.Item>
                  Rue Ain El Kebir Porte N°15 Médéa
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default EstatePage;
