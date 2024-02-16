// App.js

import React, { useState } from 'react';
import ContactList from './components/ContactList';
import Chat from './components/Chat';
import './App.css'; // Import the CSS file
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  const [selectedContact, setSelectedContact] = useState(null);
  const [isContactListActive, setIsContactListActive] = useState(true); // Set to true initially

  const handleContactClick = (contact) => {
    setSelectedContact(contact);
    setIsContactListActive(false);
  };

  const toggleContactList = () => {
    setIsContactListActive(!isContactListActive);
  };

  return (
    <div className="app-container">
      <div className="top-bar">
        <div className="logo-container">
          <i className="fas fa-comment"></i>
          <div className="company-name">BuzzCode</div>
        </div>
        <div className="menu-icon" onClick={toggleContactList}>
          &#9776;
        </div>
      </div>
      <div className={`content-container ${isContactListActive ? 'contact-list-active' : ''}`}>
        <ContactList onContactClick={handleContactClick} />
        <Chat selectedContact={selectedContact} />
      </div>
    </div>
  );
};

export default App;