/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './ProfileView.css';
import {Typography, Upload, Input, message} from 'antd';
import ImgCrop from 'antd-img-crop';
import 'antd/dist/antd.css';
// eslint-disable-next-line no-unused-vars
import {addUserProfile, registerUser} from '../../getData';
import moment from "moment";
// import {uploadFilesToDB} from "../messaging-view/utils/getMessagingData";

const { Paragraph } = Typography;

export default function ProfileView(props) {
  const {
    bio,
    handleProfileChange,
  } = props;

  const [lengthLimitedStr, setLengthLimitedStr] = useState(bio);
  const [fullName, setFullName] = useState();
  const [image, setImage] = useState([]);
  const [imageUrl, setImageUrl] = useState();
  let password = "";

  // eslint-disable-next-line no-unused-vars
  const update = async (e) => {
    e.preventDefault();
    let imgUrl;
    if(image[0]) {
      try {
        const formData = new FormData();
        formData.append("file", image[0].originFileObj);
        // await uploadFilesToDB(formData).then((response) => {
        //   imgUrl = response.data.url;
        //   setImageUrl(imgUrl);
        // });
        message.success({ content: 'Image uploaded!' });
      } catch (e) {
        console.log(e);
      }
    }
    try {
      const res = await addUserProfile(
          props.username,
          password,
          imgUrl || props.profileImg,
          fullName || props.fullname);
      message.success("Successfully updated your profile")
      e.target.value = "";
      console.log(res);
    } catch (err) {
      message.error("Unable to update your profile")
      console.log(err);
    }
  };

  const onChange = ({ fileList: newFileList }) => {
    setImage(newFileList);
    if (newFileList.length > 0) {
      const { thumbUrl } = newFileList[0];
      handleProfileChange(thumbUrl);
    }
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  return (
  // eslint-disable-next-line react/jsx-filename-extension
    <div className="main-view">
      <div className="search-bar-title-box">
        <h1 className="search-bar-title">Profile</h1>
      </div>
      <div
        className="profile smart-layers-pointers "
        style={{ backgroundImage: `url(${imageUrl || props.profileImg})` }}
      />
      <div className="profile-user-details">
        <Paragraph
          className="username gilroy-extra-extra-bold-plantation-24px smart-layers-pointers "
          editable={{
            onChange: (value) => {
              setFullName(value);
            },
            maxLength: 30,
            autoSize: { maxRows: 1, minRows: 1 },}}>
          {fullName || props.fullname}
        </Paragraph>
        <ImgCrop grid shape="round">
          <Upload
            className="profileUpload"
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture"
            fileList={image}
            onChange={onChange}
            onPreview={onPreview}
          >
            {image.length < 1 && '+ Upload'}
          </Upload>
        </ImgCrop>
        <Paragraph
          id="bio"
          className="bio smart-layers-pointers "
          editable={{
            onChange: lengthLimitedStr ? setLengthLimitedStr : setLengthLimitedStr(bio),
            maxLength: 80,
            autoSize: { maxRows: 3, minRows: 1 },
          }}
        >
          {lengthLimitedStr}
        </Paragraph>
        <div className="date-joined sf-pro-display-regular-normal-plantation-18px">
          { `Joined on ${moment(props.dateJoined).format("DD MMMM YYYY") || 'December 10th 2020'}.`}
        </div>
        <Input.Password placeholder="input password and press enter" onPressEnter={update} />
      </div>
      <div className="grey-box">
        <div className="search-bar-title-box">
          <div className="prev-posts-title gilroy-extra-extra-bold-plantation-24px">Your Status</div>
        </div>
        <div className="empty-notification">
          <div className="empty gilroy-extra-extra-bold-regent-gray-30px">Empty</div>
          <div className="desc sf-pro-display-regular-normal-regent-gray-20px">
            You currently have no user status up.
          </div>
        </div>
      </div>
    </div>
  );
}
