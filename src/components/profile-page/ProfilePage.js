/* eslint-disable react/destructuring-assignment,react/jsx-filename-extension,
react/jsx-props-no-spreading,react/require-default-props */
import React, { useState, useEffect } from 'react';
import {
  useParams
} from "react-router-dom";

import PropTypes from 'prop-types';
import DefaultLayout from '../layout/default/MainLayout';
import NavBar from '../layout/NavBar';
import ProfileView from './ProfileView';
import { getUser, userProfile } from '../../getData';

export default function ProfilePage(props) {
  const { username } = useParams();
  const [activeUser, setActiveUser] = useState('');
  const [profileData , setProfileData ] = useState('');

  useEffect(async () => {
    try {
      const { data } = await getUser();
      const userData = data.data;
      setActiveUser(userData);
      console.log(userData);
    } catch (err) {
      console.log(err);
      this.props.history.pushState(null, 'logged out','/login');
      window.location.reload();
    }
  }, []);

  useEffect(async() => {
    try {
      const { data } = await userProfile(username);
      setProfileData(data.data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <DefaultLayout>
      <NavBar profileImg={activeUser?.img || props.userImage} activeUser={activeUser} />
      <ProfileView
          profileImg = {activeUser?.img || props.userImage}
          username = {profileData.username}
          fullname = {profileData.full_name}
          bio={ 'Click to add a bio...' }
          dateJoined={profileData.created_at}
          handleProfileChange={props.handleProfileChange}
          set
      />
    </DefaultLayout>
  );
}

ProfilePage.propTypes = {
  userImage: PropTypes.string,
  handleProfileChange: PropTypes.func,
};
