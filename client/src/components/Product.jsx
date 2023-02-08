import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Badge } from 'react-bootstrap';
import Rating from './Rating';

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <span className="badge badge-info">{product.category}</span>
          <br />
          <span>3 messages</span>
        </Card.Text>

        <Card.Text as="h3">{product.price} DA</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
