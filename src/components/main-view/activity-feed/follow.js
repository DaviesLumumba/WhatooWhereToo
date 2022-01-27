import React from 'react';

export default function Follow(prop) {
  return (
    <div className="follow-status">
      <div className="avatar" style={{ backgroundImage: `url(${prop.avatar})` }} />
      <div className="follow-other-status">
        <p className="userName-status">{prop.name}</p>
        <p className="userStatus-status">{prop.status}</p>
      </div>
    </div>
  );
}
