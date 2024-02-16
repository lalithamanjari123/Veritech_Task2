// ContactList.js

import React, { useState } from 'react';
import profile from './asserts/profile.png';

const contacts = [
    { id: 1, name: 'John Doe', photo:profile, comment: 'Hello, how are you?' },
    { id: 2, name: 'Jane Doe', photo:profile, comment: 'Nice to meet you!' },
    // Add more contacts as needed
  ];
  

const ContactList = ({ onContactClick }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showEmails, setShowEmails] = useState(true);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleToggle = () => {
    setShowEmails(!showEmails);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="contact-list">
      <h2>Contact List</h2>
      <div className="search-bar">
        <label htmlFor="searchInput">
          <i className="fas fa-search"></i>
        </label>
        <input
          type="text"
          id="searchInput"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      
      <div className="toggle-buttons">
        <button className={showEmails ? 'active' : ''} onClick={handleToggle}>
          {showEmails ? 'CHAT' : 'EMAIL'}
        </button>
      </div>
      </div>
      <ul>
        {filteredContacts.map((contact) => (
          <li key={contact.id} onClick={() => onContactClick(contact)}>
            <div className="contact-info">
              <img src={contact.photo} alt={`${contact.name}'s profile`} />
              <div>
                <h3>{contact.name}</h3>
                <p>{contact.comment}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
