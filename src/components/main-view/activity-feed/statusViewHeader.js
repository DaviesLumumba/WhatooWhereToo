import React from 'react';
import phone from './icon/phone.png';

export default function StatusViewHeader(prop) {
  return (
    <div className="follow-status">
      <div className="avatar" style={{ backgroundImage: `url(${prop.follow.avatar})` }} />
      <div className="follow-other-status">
        <p className="userName-status">{prop.follow.name}</p>
        <p className="userStatus-status">{prop.follow.status}</p>
      </div>
      <div className="icon" style={{ backgroundImage: `url(${phone})` }} />
    </div>
  );
}
