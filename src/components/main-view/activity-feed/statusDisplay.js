import React from 'react';
import headshot from './img/headshot.png';
import imgPost from './img/imgpost.png';
import StatusViewHeader from './statusViewHeader';
import StatusViewImage from './statusViewImage';
import StatusViewFooter from './statusViewFooter';

export default function StatusDisplay() {
  const FOLLOW = {
    avatar: headshot,
    name: 'Brandley James',
    status: '32 minutes ago',
    post: imgPost,
  };
  return (
    <div className="status-display">
      <StatusViewHeader follow={FOLLOW} />
      <StatusViewImage follow={FOLLOW} />
      <StatusViewFooter />
    </div>
  );
}
