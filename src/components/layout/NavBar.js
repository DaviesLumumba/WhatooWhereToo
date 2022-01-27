/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line,react/jsx-filename-extension,
react/destructuring-assignment */
/* eslint-disable react/self-closing-comp */
import React, { useState } from 'react';
import s from 'styled-components';
import './NavBar.css';
import { Popover } from 'antd';
import {
  Chat, Main, SignOut,
} from '../icons/Icons';
import { logoutUser } from '../../getData';

const NavBarWrapper = s.div`
  background: #753751;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 74px;
  min-width: 74px;
  height: 100vh;
  min-height: 460px;
  position: relative;
  overflow: auto;
`;

const ProfileImg = s.img`
  position: relative;
  width: 45px;
  height: 45px;
  margin-top: 35px;
  margin-bottom: 15px;
  border-radius: 100px;
  opacity: 20%;
`;

const NavLink = s.a`
  display: block;
  width: 100%;
  line-height: 60px;
  text-decoration: none;
  box-sizing: border-box;
`;

const LogOut = s.a`
  display: block;
  width: 100%;
  line-height: 60px;
  text-decoration: none;
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  margin-bottom: 12px
`;

function NavBar(props) {
  const [isLogoutVisible, setLogoutVisible] = useState(false);
  async function logout(e) {
    e.preventDefault();
    try {
       // eslint-disable-next-line no-restricted-globals
      const res = await logoutUser();
      console.log(res);
      const url = `${process.env.REACT_APP_SERVER}login`
      this.props.history.pushState(null, '', url);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <NavBarWrapper>
      <NavLink href={`${process.env.REACT_APP_SERVER}${props.activeUser?.username}`}  style={{ lineHeight: "20px" }}>
        {/* eslint-disable-next-line react/prop-types */}
        {/* props.activeUser.img ?  :  */}
        <ProfileImg src={props.profileImg} />
      </NavLink>
      <NavLink href={`\main`}><Main /></NavLink>
      <NavLink href={`\main`}><Chat /></NavLink>
      {/* <p>{props.activeUser.username}</p> */}
      <Popover
        content={(
          <div style={{ display: 'flex', width: '100%' }}>
            <a
              onClick={() => {
                setLogoutVisible(!isLogoutVisible);
              }}
              style={
                        {
                          textAlign: 'right', color: ' #6c757d', alignSelf: 'end', width: '85%', marginRight: '12px',
                        }
}
            >
              Cancel
            </a>
            <a style={{ textAlign: 'right', color: 'red' }} onClick={logout}>Confirm</a>
          </div>
              )}
        placement="topLeft"
        title="Are you sure you want to log out?"
        trigger="click"
        visible={isLogoutVisible}
        onVisibleChange={(visible) => {
          setLogoutVisible(visible);
        }}
      >
        <LogOut href="login"><SignOut /></LogOut>
      </Popover>
    </NavBarWrapper>
  );
}

export default NavBar;
