/* eslint-disable no-shadow,no-unused-vars,react/jsx-filename-extension */
import React, { useState } from 'react';
import InputEmoji from 'react-input-emoji';
import './StatusInput.css';
import {Button, message, Upload} from 'antd';
import ImgCrop from 'antd-img-crop';
import 'antd/es/modal/style';
import 'antd/es/slider/style';
import PropTypes from "prop-types";
import {getTattoosFromQuery} from "../../../getData";

export default function SearchBar(props) {
    const [text, setText] = useState('');
    const [color, setColor] = useState("#a46D6DFF");

    function handleOnEnter(text) {
        // TODO: Send message to user
    }


    const submitStatus = async () => {
        if(text.isEmpty) {
            message.info({ content: 'Enter a single keyword to see suggested tattoos' });
        } else {
            props.setSubmit(text,await getTattoosFromQuery(text)); //this will re-render
        }
    }

    return (
        <div className={"status-input"}>
            <div className={"text-color-input"}>
                <InputEmoji
                    value={text}
                    onChange={setText}
                    cleanOnEnter
                    onEnter={handleOnEnter}
                    placeholder="Enter a  keyword to see suggested tattoos..."
                />
                <div className={"color-send-box"}>
                    <div className="selected-color">
                        <div className="color-preview smart-layers-pointers"
                             style={{backgroundColor:color}}>
                            <input
                                type="color"
                                onChange={(e) => {
                                    setColor(e.target.value);
                                }}/>
                        </div>
                        <div className="hex inter-medium-pickled-bluewood-19px border-class-1">{color}</div>
                    </div>
                    <Button className={"send-button"} type="primary" onClick={submitStatus}>Send</Button>
                </div>
            </div>
        </div>
    );
}

SearchBar.propTypes = {
    username: PropTypes.string,
    setSubmit: PropTypes.func
};

