import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import StatusListItem from "./StatusListItem";
import './StatusList.css';
import moment from 'moment';
import useInterval from "react-useinterval";

export default function StatusList(props) {
    const [statusUpdates, setAllStatusUpdates] = useState();
    let [count, setCount] = useState(0);

    const increaseCount = amount => {
        setCount(count + amount);
    };

    // check for updates every second
    useInterval(increaseCount, 1000, 5);

    useEffect(() => {
        console.log("StatusList : props.statusUpdates changed " + props.statusUpdates);
        const ui = getList(props.statusUpdates);
        setAllStatusUpdates(ui);
    }, [count] );

    function getList(updates) {
        console.log(updates);
        return updates?.map((update) => (
            <StatusListItem
                key={ update.username }
                statusItemPicture = { update.pic }
                statusItemName = { update.username }
                statusItemTime = { getElapsedTime(update.time)}
                statusItemClick = { update.handleClick || {}}
            />
        ));
    }

    function getElapsedTime(time) {
        const minutes = moment().diff(moment(time),"minutes");
        const hours = moment().diff(moment(time),"hours");
        if (minutes === 0) {
            return "Just now"
        }
        if (minutes < 60) {
            return minutes + " minutes ago.";
        } else {
            return hours + " hours ago.";
        }
    }
    return (
        <div className="trends">
            <div className="status-list-header gilroy-extra-extra-bold-plantation-20px">{"Status Updates"}</div>
            <div className="status-list-scrollable">
                { statusUpdates }
            </div>
        </div>
    );
}

StatusList.propTypes = {
    statusUpdates: PropTypes.array,
};

