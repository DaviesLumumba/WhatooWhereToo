import React from 'react';
import avatar from './img/img_2.png';
import orange from './icon/orange.png';
import picture from './icon/picture.png';
import post from './icon/post.png';

export default function AddToStatus() {
  const [stus, setStus] = React.useState('');
  return (
    <div className="status-add">
      <div className="avatar" style={{ backgroundImage: `url(${avatar})` }} />
      <div className="add-status-container">
        <form className="add-status-form">
          <input
            className="text-input"
            onChange={(e) => setStus(e.target.value)}
            value={stus}
            placeholder="What are you up to?"
            type="text"
          />
        </form>
        <div className="add-status-toolbar">
          <div className="left">
            <div className="icon" style={{ backgroundImage: `url(${picture})` }} />
            <div className="icon" style={{ backgroundImage: `url(${orange})` }} />
          </div>
          <div className="right">
            <div className="icon" style={{ backgroundImage: `url(${post})` }} />
          </div>
        </div>
      </div>
    </div>
  );
}
