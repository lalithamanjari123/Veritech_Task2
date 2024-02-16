// Chat.js

import React, { useState } from 'react';

const Chat = ({ selectedContact }) => {
  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSend = () => {
    // Implement your logic to send the message
    console.log('Sending message:', message);
    // Reset the message input
    setMessage('');
  };

  return (
    <div className="chat-container">
      {selectedContact ? (
        <div>
          <div className="chat-header">
            <img src={selectedContact.photo} alt={`${selectedContact.name}'s profile`} />
            <h2>{selectedContact.name}</h2>
          </div>
          {/* Chat messages go here */}
          <div className="chat-messages">
            {/* Example: Display the last message sent or received */}
            <div className="message received">
              <p>Welcome to chat...</p>
            </div>
            <div className="message sent">
              <p>This is the starting message..</p>
            </div>
          </div>
          {/* Chat input area */}
          <div className="chat-input">
            <div className="attachments-icon">&#128206;</div>
            <input
              type="text"
              placeholder="Type here..."
              value={message}
              onChange={handleInputChange}
            />
            <div className="smiley-icon">&#128515;</div>
            <div className="send-icon" onClick={handleSend}>&#128073;</div>
          </div>
        </div>
      ) : (
        <p>Select a contact to start chatting</p>
      )}
    </div>
  );
};

export default Chat;
