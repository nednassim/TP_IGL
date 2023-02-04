import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import Message from '../components/Message';
import Loader from '../components/Loader.jsx';
import Paginate from '../components/Paginate';
import ProductCarousel from '../components/ProductCarousel';
import Meta from '../components/Meta';
import products from '../products';

const HomePage = ({ match }) => {
  // const keyword = match.params.keyword;

  // const pageNumber = match.params.pageNumber || 1;

  // useEffect(() => {
  //   dispatch(listProducts(keyword, pageNumber));
  // }, [dispatch, keyword, pageNumber]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, [loading]);

  return (
    <>
      <Meta />
      <ProductCarousel products={products} />
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          {/* <Paginate pages={pages} page={page} keyword={''} /> */}
        </>
      )}
    </>
  );
};

export default HomePage;
