import React from 'react';

export default function StatusViewImage(prop) {
  return (
    <div>
      <div className="post" style={{ backgroundImage: `url(${prop.follow.post})` }} />
    </div>
  );
}
