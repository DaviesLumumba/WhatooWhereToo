import React from 'react';
import send from './icon/send.png';

export default function StatusViewFooter() {
  const [msg, setMsg] = React.useState('');
  return (
    <div className="send-message-status-view">
      <form className="send-message-form">
        <input
          className="text-input"
          onChange={(e) => setMsg(e.target.value)}
          value={msg}
          placeholder="Send Message"
          type="text"
        />
      </form>
      <div className="icon" style={{ backgroundImage: `url(${send})` }} />
    </div>
  );
}
