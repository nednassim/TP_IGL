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
import Rating from '../components/Rating';
import Loader from '../components/Loader';
import Meta from '../components/Meta';
import products from '../products';

const EstatePage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const submitHandler = () => {
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
                </ListGroup.Item>
                <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
                <ListGroup.Item>
                  Description: {product.description}
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md={6}>
              <h2 className="text-center">Messages</h2>
              {product.reviews.length === 0 && <Message>No Reviews</Message>}
              <ListGroup variant="flush">
                {product.reviews.map((review) => (
                  <ListGroup.Item key={review._id}>
                    <strong>{review.name}</strong>
                    <p>{review.createdAt}</p>
                    <p>{review.comment}</p>
                  </ListGroup.Item>
                ))}
                <ListGroup.Item>
                  <h2 className="text-center">Send a Message</h2>
                  {/* {successProductReview && (
                    <Message variant="success">
                      Review submitted successfully
                    </Message>
                  )}
                  {loadingProductReview && <Loader />}
                  {errorProductReview && (
                    <Message variant="danger">{errorProductReview}</Message>
                  )} */}

                  <Form onSubmit={submitHandler}>
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
                      Please <Link to="/login">sign in</Link> to write a review{' '}
                    </Message> */}
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
