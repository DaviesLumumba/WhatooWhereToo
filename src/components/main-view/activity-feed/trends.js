import React from 'react';
import NewUpdates from './newUpdates';
import ViewedUpdates from './viewedUpdates';
import img1 from './img/img_1.png';
import img2 from './img/img_2.png';

export default function Trends() {
  const FOLLOW_1 = [
    {
      avatar: img1,
      name: 'Ashley Smith',
      status: 'Just now',
    },
    {
      avatar: img2,
      name: 'Jane Doe',
      status: 'Just now',
    },
  ];
  const FOLLOW_2 = [
    {
      avatar: img1,
      name: 'Ashley Smith',
      status: 'Just now',
    },
    {
      avatar: img2,
      name: 'Jane Doe',
      status: 'Just now',
    },
    {
      avatar: img1,
      name: 'Ashley Smith',
      status: 'Just now',
    },
    {
      avatar: img2,
      name: 'Jane Doe',
      status: 'Just now',
    },
  ];
  return (
    <div className="trends">
      <NewUpdates follow={FOLLOW_1} />
      <ViewedUpdates follow={FOLLOW_2} />
    </div>
  );
}
