import React from "react";
import './StatusListItem.css'
import PropTypes from "prop-types";

export default function StatusListItem(props) {
    const { statusItemPicture, statusItemName, statusItemTime, statusItemClick } = props;

    return (
        <div className="status-list-item" onClick={statusItemClick}>
            <img className="status-item-picture" src={statusItemPicture} />
            <div className="status-item-divider" >

            </div>
            <div className="status-item-user-details">
                <div className="status-item-name sf-pro-display-medium-gray-18px">{statusItemName}</div>
                <div className="status-item-time valign-text-middle sf-pro-display-light-gray-14px">{statusItemTime}</div>
            </div>
        </div>
    );
}

StatusListItem.propTypes = {
    statusItemPicture: PropTypes.string,
    statusItemName: PropTypes.string,
    statusItemTime : PropTypes.string,
    statusItemClick: PropTypes.func
}

