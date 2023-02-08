import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [telephone, setTelephone] = useState('');
  const [addresse, setAddresse] = useState('');

  //   useEffect(() => {
  //     if (userInfo) {
  //       history.push(redirect);
  //     }
  //   }, [history, userInfo, redirect]);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      console.log(codeResponse);
      if (codeResponse) {
        axios
          .get(
            `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${codeResponse.access_token}`,
            {
              headers: {
                Authorization: `Bearer ${codeResponse.access_token}`,
                Accept: 'application/json',
              },
            },
          )
          .then((res) => {
            console.log(res);
            axios
              .post(
                'http://localhost:8080/users',
                {
                  name: res.data.name,
                  short_name: res.data.given_name,
                  email: res.data.email,
                  telephone: telephone,
                  addresse: addresse,
                },
                {
                  headers: {
                    'Content-Type': 'application/json',
                  },
                },
              )
              .then((res) => {
                localStorage.setItem('userInfo', JSON.stringify(res.data));
                console.log('User Signed Up Successfully');
                navigate('/');
              })
              .catch((err) => console.log(err));
          })
          .catch((err) => console.log(err));
      }
    },
    onError: (error) => console.log('Login Failed:', error),
  });

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Register');
  };

  return (
    <FormContainer>
      <h1 className="text-center">Sign Up</h1>
      <div className="row">
        <div className="col-md-12">
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label>Numéro de Téléphone</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter phone number"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="price">
              <Form.Label>Addresse</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter address"
                value={addresse}
                onChange={(e) => setAddresse(e.target.value)}
              ></Form.Control>
            </Form.Group>
          </Form>
          <a
            className="btn btn-md btn-block btn-outline-primary"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              login();
            }}
          >
            <img src="https://img.icons8.com/color/16/000000/google-logo.png" />{' '}
            Sign Up Using Google
          </a>
        </div>
      </div>

      <Row className="py-3 text-center">
        <Col>
          Have an Account? <Link to="/login">Login</Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default RegisterPage;
