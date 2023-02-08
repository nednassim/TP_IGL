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
import Rating from '../components/Rating';
import Loader from '../components/Loader';
import Meta from '../components/Meta';
import products from '../products';

const EstatePage = () => {
  const position = [51.505, -0.09];
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    const target = product;
    target.comments.push({
      _id: 18,
      owner: 'Bouzidi Nibras',
      createdAt: '13/02/2023',
      comment: comment,
    });
    setProduct(target);
    setComment('');
    console.log('Comment Submitted');
  };

  useEffect(() => {
    const target = products.filter((product) => product._id === id)[0];
    setProduct(target);
    setRating(0);
    setComment('');
    setLoading(false);
  }, [loading]);

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Meta title={product.name} />
          <Row className="justify-content-center">
            <Col md={6}>
              <Carousel pause="hover" className="bg-dark">
                {products.map((product) => (
                  <Carousel.Item key={product._id}>
                    <img src={product.image} alt={product.name} />
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
            <Col md={3}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>{product.name}</h3>
                  <span className="badge badge-info">{product.category}</span>
                  <p>{product.wilaya}</p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p>Surface: {product.surface} m²</p>
                </ListGroup.Item>
                <ListGroup.Item>Price: {product.price} DA</ListGroup.Item>
                <ListGroup.Item>
                  Description: {product.description}
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
          <Row style={{ marginTop: 40 }}>
            <Col md={8}>
              <h2 style={{ marginLeft: 16 }}>Messages</h2>
              {product.comments.length === 0 && <Message>No Comments</Message>}
              <ListGroup variant="flush">
                {product.comments.map((comment) => (
                  <ListGroup.Item key={comment._id}>
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
