/* eslint-disable react/require-default-props,react/destructuring-assignment,
react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import PropTypes, {element} from "prop-types";
import DefaultLayout from '../layout/default/MainLayout';
import NavBar from "../layout/NavBar";
import {getUser, getTattoosFromQuery} from '../../getData';
import SearchBar from './status-input/SearchBar';
import ImageCard from '../card/ImageCard';



export default function MainViewPage(props) {
  const [activeUser, setActiveUser] = useState("");
  let [searchResults, setSearchResults] = useState();

  useEffect(async () => {
    try {
      const { data } = await getUser();
      const userData = data.data;
      setActiveUser(userData);
      console.log(userData);
    } catch (err) {
      //console.log(err);
      //window.history.pushState(null, "pushed out of main page",'/login');
    }
  }, []);

  function renderResults(query,results) {
    const view = results?.map(image => (
        <ImageCard
            tattooImageUrl={image.image}
            tagTextSelected={query}
            tags = { image.data.tags.filter(element => element!==query).map(tag =>
                <div className="tag border-1-1px-wine-berry">
                  <div className="tag-text valign-text-middle sfprodisplay-regular-normal-wine-berry-11-2px">
                    {tag}
                  </div>
                </div>)
            }
        />
    ))
    console.log(view)
    setSearchResults(view);
  }


  return (
    <DefaultLayout>
      <NavBar profileImg={activeUser?.img || props.userImage} activeUser={activeUser}/>
      <div className="main-view" >
        <div className="frame-23">
          <img
              className="group-20"
              src={"logo.png"}
          />
          <div className="im-a-tatoo-artist">
            I’m a tattoo artist
          </div>
        </div>
        <div className="search-bar-title-box">
          <h1 className="search-bar-title">Explore</h1>
        </div>
        <SearchBar username={ activeUser.username } setSubmit = {renderResults}/>
        <div className="user-details">
          <div className="browse-title">
            Browse by Style
          </div>
          <p className="posted-by valign-text-middle">
            Find artists by your preferred style
          </p>
        </div>
        <div className="results-box">
          {searchResults}
        </div>
      </div>
    </DefaultLayout>
  );
}

MainViewPage.propTypes = {
  userImage: PropTypes.string,
};
