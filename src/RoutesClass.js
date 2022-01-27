import React from 'react';
import { Switch ,Route } from 'react-router-dom';
import Registration from './components/auth/Registration';
import SignIn from './components/auth/SignIn';
import MainViewPage from './components/main-view/MainViewPage';
import ProfilePage from './components/profile-page/ProfilePage';
import profileImage from './components/main-view/activity-feed/img/profile_icon.png';

export default function RoutesClass() {
  const [profileImg, setProfileImage] = React.useState(profileImage);
  function handleProfileImgChange(value) {
    setProfileImage(value);
  }
  return (
  // eslint-disable-next-line react/jsx-filename-extension
    <Switch>
      <Route
        exact
        path="/register"
        render={() => (
          <Registration />
        )}
      />
      <Route
        exact
        path="/login"
        render={() => (
          // <SignIn />
            <MainViewPage userImage={profileImg} />
        )}
      />
      <Route
        exact
        path='/main'
        render={() => (
          <MainViewPage userImage={profileImg} />
        )}
      />
        <Route
            exact
            path='/'
            render={() => (
                <MainViewPage userImage={profileImg} />
            )}
        />
      <Route
        exact
        path="/messaging"
        // render={() => (
        //   <MessagingPage userImage={profileImg} />
        // )}
      />
      <Route
        exact
        path="/messaging/:username"
        // render={() => (
        //   <MessagingPage userImage={profileImg} />
        // )}
      />
      <Route
        path="/:username"
        render={() => (
          <ProfilePage userImage={profileImg} handleProfileChange={handleProfileImgChange} />
        )}
      />
    </Switch>
  );
}
