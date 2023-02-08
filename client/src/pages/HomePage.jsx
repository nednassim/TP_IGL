import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import Loader from '../components/Loader.jsx';
import Paginate from '../components/Paginate';
import ProductCarousel from '../components/ProductCarousel';
import Meta from '../components/Meta';
import products from '../products';
import axios from 'axios';

const HomePage = ({ match }) => {
  // const keyword = match.params.keyword;

  // const pageNumber = match.params.pageNumber || 1;

  // useEffect(() => {
  //   dispatch(listProducts(keyword, pageNumber));
  // }, [dispatch, keyword, pageNumber]);
  const [loading, setLoading] = useState(true);
  const [estates, setEstates] = useState([]);
  useEffect(() => {
    const data = axios
      .get('http://localhost:8080/estates')
      .then((res) => {
        console.log(res);
        if (res) {
          setEstates(res.data);
          setLoading(false);
        }
      })
      .catch((err) => console.log(err.message));
  }, []);

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
            <Col sm={12} md={8}>
              <Row>
                {estates.map((product) => (
                  <Col key={product.id} sm={12} md={6} lg={4}>
                    <Product product={product} />
                  </Col>
                ))}
              </Row>
            </Col>
            <Col sm={12} md={4}>
              <div>
                <h2>Filter By</h2>
                <p>Type</p>
                <select className="custom-select">
                  <option selected>Select</option>
                  <option value="1">Vente</option>
                  <option value="2">Echange</option>
                  <option value="3">Location</option>
                  <option value="4">Location pour vacances</option>
                </select>
                <p>Wilaya</p>
                <select className="custom-select">
                  <option selected>Select</option>
                  <option value="1">Medea</option>
                  <option value="2">Alger</option>
                  <option value="3">Blida</option>
                  <option value="4">Bouira</option>
                </select>
                <p>Commune</p>
                <select className="custom-select">
                  <option selected>Select</option>
                  <option value="1">Medea</option>
                  <option value="2">Berouaghia</option>
                  <option value="3">Tizi El Mahdi</option>
                  <option value="4">Location pour vacances</option>
                </select>
              </div>
            </Col>
          </Row>
          {/* <Paginate pages={pages} page={page} keyword={""} /> */}
        </>
      )}
    </>
  );
};

export default HomePage;
