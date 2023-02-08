import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import { wilayas } from '../constants/wilayas';

const AddProductPage = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState('');
  const [wilaya, setWilaya] = useState('');
  const [category, setCategory] = useState('');
  const [surface, setSurface] = useState(0);
  const [description, setDescription] = useState('');
  const [uploading, setUploading] = useState(false);

  useEffect(() => {}, []);

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('image', file);
    setUploading(true);

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };

      const { data } = await axios.post('/api/upload', formData, config);

      setImage(data);
      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Submitted');
  };

  return (
    <>
      <Link to="/" className="btn btn-light my-3">
        Go Back
      </Link>
      <FormContainer>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="price">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="image">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter image url"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            ></Form.Control>
            <Form.File
              id="image-file"
              label="Choose File"
              custom
              onChange={uploadFileHandler}
            ></Form.File>
            {uploading && <Loader />}
          </Form.Group>

          <Form.Group controlId="surface">
            <Form.Label>Surface</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter surface"
              value={surface}
              onChange={(e) => setSurface(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="wilaya">
            <Form.Label>Wilaya</Form.Label>
            <select
              className="custom-select"
              value={wilaya}
              onChange={(e) => setWilaya(e.target.value)}
            >
              <option value="">Choose a Wilaya</option>
              {wilayas.map((wilaya, index) => (
                <option value={wilaya.value}>{wilaya.name}</option>
              ))}
            </select>
          </Form.Group>
          <Form.Group controlId="category">
            <Form.Label>Category</Form.Label>
            <select
              className="custom-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Choose a Category</option>
              <option value="Vente">Vente</option>
              <option value="Echange">Echange</option>
              <option value="Location">Location</option>
              <option value="Location pour vacances">
                Location pour vacances
              </option>
            </select>
          </Form.Group>

          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button type="submit" variant="primary">
            Create
          </Button>
        </Form>
      </FormContainer>
    </>
  );
};

export default AddProductPage;
