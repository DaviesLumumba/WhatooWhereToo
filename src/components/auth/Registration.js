/* eslint-disable react/prop-types,react/jsx-filename-extension */
/* eslint-disable no-console */
/* eslint-disable no-alert */
import React, { useState } from 'react';
import {
  Form, FormGroup, FormControl, FormLabel, Button,
} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './Auth.css';
import { message } from 'antd';
// import Lottie from 'react-lottie';
import flowerAnimation from '../../assets/animation/flower.json';
import chatAnimation from '../../assets/animation/girl.json';
import AuthLayout from '../layout/auth/AuthLayout';
import { registerUser } from '../../getData';

function Registration() {
  const [toSignInPage, setToSignInPage] = React.useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullname, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const history = useHistory();

  const validateUsername = () => {
    if (username.length < 3 || username.length > 35) {
      return false;
    }
    return !/[^a-zA-Z0-9]/.test(username);
  };

  if (toSignInPage) {
    history.push('/login');
  }

  const validatePassword = () => {
    const decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,35}$/;
    if (password.match(decimal)) {
      return true;
    }
    return false;
  };

  const handleSubmit = (event) => {
    if (!validateUsername() || !validatePassword()) {
        alert('You have input errors in your username or password, please try again.');
    } else {
        setUsername('');
        setPassword('');
        setEmail('');
        alert('Registration Successful! Press OK to proceed.');
        history.push('/login');
      }
      event.preventDefault();
  };

  const handleChangeUsername = (event) => {
    event.preventDefault();
    setUsername(event.target.value);
  };

  const handleChangePassword = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const handleChangeEmail = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const handleChangeFullName = (event) => {
    event.preventDefault();
    setFullName(event.target.value);
  };

  const register = async (e) => {
    e.preventDefault();
    try {
      const res = await registerUser(username, password, email, fullname);
      console.log(res);
      message.success(res.data.message);
      history.push('/login');
    } catch (err) {
      if(err.response.data.error){
        console.log(err.response.data.error);
        message.error(err.response.data.error);
      }
    }
  };

  return (
    <AuthLayout>
      <div className="reg-form-box">
        <div className="registration-sign-in-box">
          <button type="button" className="reg-sign-in-button" onClick={() => setToSignInPage((toSignInPagebool) => !toSignInPagebool)}>
            Sign In
          </button>
          <h4 className="reg-sign-in-alert">
            Already have an account?
          </h4>
        </div>
        {/*<Lottie*/}
        {/*  options={{*/}
        {/*    loop: true,*/}
        {/*    autoplay: true,*/}
        {/*    animationData: chatAnimation,*/}
        {/*    rendererSettings: {*/}
        {/*      preserveAspectRatio: 'xMidYMid slice',*/}
        {/*    },*/}
        {/*  }}*/}
        {/*  width="36%"*/}
        {/*  height="fit-content"*/}
        {/*/>*/}
        <div className="reg-form-container">
          <h1 className="reg-header">
            Welcome! Create your new Chat App account.
          </h1>
          <Form onSubmit={handleSubmit} className="reg-form">
            <div>
              <div className="reg-form-one">
                <FormGroup controlId="formBasicUsername" bsPrefix="form-group reg-username-group">
                  <FormLabel bsPrefix="username-label">Username</FormLabel>
                  <FormControl
                    bsPrefix="form-control reg-username-input"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={handleChangeUsername}
                  />
                </FormGroup>
                <FormGroup controlId="formBasicFullName" bsPrefix="form-group reg-fullname-group">
                  <FormLabel bsPrefix="fullname-label">Full Name</FormLabel>
                  <FormControl
                    bsPrefix="form-control reg-fullname-input"
                    type="text"
                    placeholder="Full Name"
                    value={fullname}
                    onChange={handleChangeFullName}
                  />
                </FormGroup>
              </div>
              <div className="reg-form-two">
                <FormGroup controlId="formBasicEmail" bsPrefix="form-group reg-email-group">
                  <FormLabel bsPrefix="email-label"> Email address</FormLabel>
                  <FormControl
                    bsPrefix="form-control reg-email-input"
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={handleChangeEmail}
                  />
                </FormGroup>
                <FormGroup controlId="formBasicPassword" bsPrefix="form-group reg-password-group">
                  <FormLabel bsPrefix="password-label">Password</FormLabel>
                  <FormControl
                    bsPrefix="form-control reg-password-input"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handleChangePassword}
                  />
                </FormGroup>
              </div>
            </div>
            <br />
            <Button type="submit" bsPrefix="reg-submit-button" onClick={(e) => register(e)}>
              Register
            </Button>
          </Form>
        </div>
        <div className="info-tabs">
          <div className="info-tab">©</div>
          <div className="info-tab">All rights reserved 2020</div>
          <div className="info-tab">Privacy policy</div>
          <div className="info-tab">Data Policy</div>
          <div className="info-tab">English (US)</div>
          <div className="info-tab">About</div>
        </div>
      </div>
      <div className="reg-instructions-container">
        <div className="instructions-box">
          <div className="step-one-box">
            <div className="number-one-box">
              <div className="number-one-15 gilroy-bold--normal-white-18px">1</div>
            </div>
            <div className="step-one-16 sf-pro-display-regular-normal-white-18px">
              Your username must be all lowercase and an alphanumerical
              string between 8-35 characters long.
            </div>
          </div>
          <br />
          <div className="step-two-box">
            <div className="number-two-box ">
              <div className="number-two-19 gilroy-bold--normal-white-18px">2</div>
            </div>
            <div className="step-two-110 sf-pro-display-regular-normal-white-18px">
              Your password must be 8-35 characters
              long, contain both upper and lower case
              characters, and include at least one
              number.
            </div>
          </div>
          <br />
          <div className="step-three-box">
            <div className="number-three-box">
              <div className="number-two-19 gilroy-bold--normal-white-18px">3</div>
            </div>
            <div className="step-three-114 sf-pro-display-regular-normal-white-18px">
              Please input a valid email address that
              you currently have access to.
            </div>
          </div>
        </div>
        <div className="flower-container">
          {/*<Lottie*/}
          {/*  options={{*/}
          {/*    loop: true,*/}
          {/*    autoplay: true,*/}
          {/*    animationData: flowerAnimation,*/}
          {/*    rendererSettings: {*/}
          {/*      preserveAspectRatio: 'xMidYMid slice',*/}
          {/*    },*/}
          {/*  }}*/}
          {/*  height="fit-content"*/}
          {/*  width="40%"*/}
          {/*/>*/}
        </div>
      </div>
    </AuthLayout>
  );
}

export default Registration;
