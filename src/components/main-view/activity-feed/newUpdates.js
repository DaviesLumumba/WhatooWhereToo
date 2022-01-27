/* eslint-disable react/no-array-index-key */
import React from 'react';
import Follow from './follow';

export default function NewUpdates(prop) {
  return (
    <div className="updates">
      <p className="h2">New updates</p>
      {prop.follow.map((
        follow, index,
      ) => (
        <Follow
          key={index}
          avatar={follow.avatar}
          name={follow.name}
          status={follow.status}
        />
      ))}
    </div>
  );
}
