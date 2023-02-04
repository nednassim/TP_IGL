import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //   useEffect(() => {
  //     if (userInfo) {
  //       history.push(redirect);
  //     }
  //   }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Login');
  };

  return (
    <FormContainer>
      <h1 className="text-center">Sign In</h1>
      <div class="row">
        <div class="col-md-12">
          <a class="btn btn-md btn-block btn-outline-primary" href="#">
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
