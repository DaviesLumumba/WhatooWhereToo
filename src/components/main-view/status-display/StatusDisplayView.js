import React, {useEffect, useState} from "react";
import './StatusDisplayView.css'
import PropTypes from "prop-types";
import { Carousel } from "antd";
import invert from 'invert-color';
import useInterval from "react-useinterval";

export default function StatusDisplayView(props) {
    const [statusUpdates, setStatusUpdates] = useState();
    let [count, setCount] = useState(0);

    const increaseCount = amount => {
        setCount(count + amount);
    };

    // check for updates every second
    useInterval(increaseCount, 1000, 5);

    useEffect(() => {
        setStatusUpdates(renderStatusUpdates(props.statusUpdates));
    }, [count]);

    function renderStatusUpdates(updates) {
        return updates?.map((status) => (
            <div key={status.username} className="status-display-view-item">
                <div className="image-view smart-layers-pointers ">
                    { !status.picture.isEmpty && !(status.picture === "") ?
                        <img className="picture" src={status.picture} alt="status picture"/>
                        :
                        <div className="status-display-text" style={{backgroundColor: status.color,
                            color: invert(status.color)}}>{status.text}</div>
                    }
                </div>
                <div className="status-display-details">
                    <img className="pic" src={status.pic} />
                    <div className="status-display-user-details">
                        <div className="posted-by valign-text-middle">
                            Posted by
                        </div>
                        <div className="status-display-username">{status.username}</div>
                    </div>
                </div>
            </div>
        ));
    }

    return (
            <Carousel className="status-display-view" autoplay effect="fade" autoplaySpeed={6000} dotPosition={"top"}>
                {statusUpdates}
            </Carousel>
    );
}
StatusDisplayView.propTypes = {
    statusUpdates: PropTypes.array,
};



