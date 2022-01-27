import React from 'react';
import AddToStatus from './addToStatus';
import Trends from './trends';
import StatusDisplay from './statusDisplay';
import './activity-feed.css';

export default function Status() {
  return (
    <div className="status">
      <p className="h1"> Status</p>
      <AddToStatus />
      <div className="flex-row-layout">
        <Trends />
        <StatusDisplay />
      </div>
    </div>
  );
}
