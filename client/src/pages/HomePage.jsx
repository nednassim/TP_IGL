import React, { useEffect, useState } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import Product from '../components/Product';
import Loader from '../components/Loader.jsx';
import Paginate from '../components/Paginate';
import ProductCarousel from '../components/ProductCarousel';
import Meta from '../components/Meta';
import products from '../products';
import axios from 'axios';
import { wilayas } from '../constants/wilayas';
import SearchBox from '../components/SearchBox';

const HomePage = ({ match }) => {
  // const keyword = match.params.keyword;

  // const pageNumber = match.params.pageNumber || 1;

  // useEffect(() => {
  //   dispatch(listProducts(keyword, pageNumber));
  // }, [dispatch, keyword, pageNumber]);
  const [loading, setLoading] = useState(true);
  const [estates, setEstates] = useState([]);
  const [selectedEstates, setSelectedEstates] = useState([]);

  const handleFilterCategory = (e) => {
    if (e.target.value === '') {
      setSelectedEstates(estates);
    } else {
      const filteredList = estates.filter(
        (estate) => estate.category === e.target.value,
      );
      setSelectedEstates(filteredList);
    }
  };

  const handleFilterWilaya = (e) => {
    if (e.target.value === '') {
      setSelectedEstates(estates);
    } else {
      const filteredList = estates.filter(
        (estate) => estate.wilaya === e.target.value,
      );
      setSelectedEstates(filteredList);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const results = estates.filter((estate) =>
      estate.name.includes(e.target.value),
    );
    setSelectedEstates(results);
  };

  useEffect(() => {
    const data = axios
      .get('http://localhost:8080/estates')
      .then((res) => {
        console.log(res);
        if (res) {
          setEstates(res.data);
          setSelectedEstates(res.data);
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
                {selectedEstates.map((product) => (
                  <Col key={product.id} sm={12} md={6} lg={4}>
                    <Product product={product} />
                  </Col>
                ))}
              </Row>
            </Col>
            <Col sm={12} md={4}>
              <div>
                <h2>Search</h2>
                <Form>
                  <Form.Control
                    type="text"
                    name="search"
                    onChange={(e) => handleSearch(e)}
                    placeholder="Search Estates..."
                  ></Form.Control>
                </Form>
                <h2>Filter By</h2>
                <p>Type</p>
                <select
                  className="custom-select"
                  onChange={(e) => handleFilterCategory(e)}
                >
                  <option value="">Select</option>
                  <option value="Vente">Vente</option>
                  <option value="Echange">Echange</option>
                  <option value="Location">Location</option>
                  <option value="Location pour vacances">
                    Location pour vacances
                  </option>
                </select>
                <p style={{ marginTop: 16 }}>Wilaya</p>
                <select
                  className="custom-select"
                  onChange={(e) => handleFilterWilaya(e)}
                >
                  <option value="">Select</option>
                  {wilayas.map((wilaya, index) => (
                    <option value={wilaya.value}>{wilaya.name}</option>
                  ))}
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
