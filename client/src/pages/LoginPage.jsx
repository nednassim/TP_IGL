import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const LoginPage = () => {
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
            const email = res.data.email;
            axios
              .get('http://localhost:8080/users')
              .then((res) => {
                const result = res.data.filter((user) => user.email === email);
                console.log(result);
                if (result.length > 0) {
                  console.log('User Logged In Successfully');
                } else {
                  console.log('You need to log in');
                }
              })
              .catch((err) => console.log(err));
          })
          .catch((err) => console.log(err));
      }
    },
    onError: (error) => console.log('Login Failed:', error),
  });

  // useEffect(() => {
  //   if (user) {
  //     axios
  //       .get(
  //         `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
  //         {
  //           headers: {
  //             Authorization: `Bearer ${user.access_token}`,
  //             Accept: 'application/json',
  //           },
  //         },
  //       )
  //       .then((res) => {
  //         setProfile(res.data);
  //       })
  //       .catch((err) => console.log(err));
  //   }
  // }, [user]);
  return (
    <FormContainer>
      <h1 className="text-center">Sign In</h1>
      <div className="row">
        <div className="col-md-12">
          <a
            className="btn btn-md btn-block btn-outline-primary"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              login();
            }}
          >
            <img src="https://img.icons8.com/color/16/000000/google-logo.png" />{' '}
            Sign In Using Google
          </a>
        </div>
      </div>

      <Row className="py-3 text-center">
        <Col>
          New Customer? <Link to="/register">Register</Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default LoginPage;
