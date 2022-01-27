/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  FormControl, FormLabel, FormGroup, Form, Button,
} from 'react-bootstrap';
import 'antd/dist/antd.css';
import { message } from 'antd';
// import { useAppContext } from '../../libs/contextLib';
import './SignIn.css';
// import Lottie from 'react-lottie';
import AuthLayout from '../layout/auth/AuthLayout';
import chatAnimation from '../../assets/animation/conversation.json';
import plantAnimation from '../../assets/animation/plant.json';
import {
  loginUser,
  getUserAttempts,
  addUserAttempts,
  resetUserAttempts,
  getUserLockedOutTime,
  addUserLockedOutTime,
} from '../../getData';

export default function SignIn() {
  // const { userHasAuthenticated } = useAppContext();
  const history = useHistory();

  const [toRegPage, setToRegPage] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit() {
    try {
      // await Auth.signIn(email, password);
      console.log('success');
      // userHasAuthenticated(true);
    } catch (e) {
      console.log(e);
      // alert(e.message);
    }
  }

  if (toRegPage) {
    history.push('/register');
  }

  const messageKey = 'updatable';
  const login = async (e) => {
    e.preventDefault();
    try {
      const { data: { attempts } } = await getUserAttempts(email);
      const { data: { locked_at } } = await getUserLockedOutTime(email);
      const lockoutTime = new Date(locked_at);
      const currentTime = Date.now();
      const duration = (currentTime - lockoutTime.getTime()) / 60000;
      // left side before account lockout, right is after
      if ((attempts < 3 ) || (attempts >= 3 && duration > 30)) {
        message.loading({ content: 'Loading...', messageKey });
        await loginUser(email, password);
        message.success({ content: 'Loaded!', messageKey, duration: 2 });
        await resetUserAttempts(email);
        history.push('/main');
      } else {
        console.log('Account is locked');
        message.error({ content: 'Account is locked out', messageKey, duration: 2 });
      }
    } catch (err) {
      console.log(err);
      try{
        await addUserAttempts(email);
        const { data: { attempts } } = await getUserAttempts(email);
        let newVar = attempts % 3 === 0 ? await addUserLockedOutTime(email) : null;
        message.error({ content: 'Invalid email or password', messageKey, duration: 2 });
      } catch (e) {
        message.error({ content: 'Invalid email or password', messageKey, duration: 2 });
      }
    }
  };

  return (
    <AuthLayout className="log-in-screen-1">
      <div className="entry-screen">
        <div
          className="registration-sign-in-box"
        >
          <button
            type="button"
            className="reg-sign-in-button"
            onClick={() => setToRegPage((toRegPagebool) => !toRegPagebool)}
          >
            Create an account
          </button>
          <h4 className="reg-sign-in-alert">
            Don&apos;t have an account?
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
        {/*  width="30.5%"*/}
        {/*  height="fit-content"*/}
        {/*/>*/}
        <div className="log-in-box-page-1">
          <h1 className="reg-header">
            <span>Welcome! Log in to your Chat App account</span>
          </h1>
          <Form onSubmit={handleSubmit} className="reg-form">
            <FormGroup bsPrefix="form-group reg-password-group">
              <FormLabel bsPrefix="email-label">Email address</FormLabel>
              <FormControl
                bsPrefix="form-control reg-password-input"
                id="email-input"
                type="Email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>
            <FormGroup bsPrefix="form-group reg-password-group">
              <FormLabel bsPrefix="password-label">Password</FormLabel>
              <FormControl
                bsPrefix="form-control reg-password-input"
                type="password"
                id="password-input"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormGroup>
            <br />
            <Button
              bsPrefix="reg-submit-button"
              disabled={!validateForm()}
              type="submit"
              value="Submit"
              onClick={(e) => login(e)}
            >
              Continue
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
            <div className="number-one-box" style={{ backgroundColor: '#FF725E' }}>
              <div className="number-one-15 gilroy-bold--normal-white-18px">1</div>
            </div>
            <div className="step-one-16 sf-pro-display-regular-normal-white-18px">
              Enter the required information and click continue.
            </div>
          </div>
          <br />
          <div className="step-two-box">
            <div className="number-two-box" style={{ backgroundColor: '#FF725E' }}>
              <div className="number-two-19 gilroy-bold--normal-white-18px">2</div>
            </div>
            <div className="step-two-110 sf-pro-display-regular-normal-white-18px">
              You must have an existing account and the correct credentials to sign in.
            </div>
          </div>
        </div>
        <div className="flower-container">
          {/*<Lottie*/}
          {/*  options={{*/}
          {/*    loop: true,*/}
          {/*    autoplay: true,*/}
          {/*    animationData: plantAnimation,*/}
          {/*    rendererSettings: {*/}
          {/*      preserveAspectRatio: 'xMidYMid slice',*/}
          {/*    },*/}
          {/*  }}*/}
          {/*  height="fit-content"*/}
          {/*  width="95%"*/}
          {/*/>*/}
        </div>
      </div>
    </AuthLayout>
  );
}
