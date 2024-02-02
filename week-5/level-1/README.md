You have to create a simple React App which has a reusable Card Component which has the following
 - Ability to pass in props to the Component
 - The Card must show a person's
    - Name
    - A short description
    - LinkedIn, Twitter and other Social Media Handle buttons
    - Interests Section
 - You can assume that this is kind of an e-business card and feel free to put in your creativity
 - Additional & Slightly advanced:
    - Create a page where you can add these kind of Cards by taking input from the user
    - Create a backend server where these cards get stored in a DB and can handle basic CRUD operations
    - Give the feature to perform CRUD operations from the frontend (Can be restricted to the admin only as well)

// Card.js

import React from 'react';

const Card = ({ name, description, socialMedia, interests }) => {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{description}</p>

      <div className="social-media">
        {socialMedia.linkedin && <a href={socialMedia.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
        {socialMedia.twitter && <a href={socialMedia.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>}
        {/* Add more social media links as needed */}
      </div>

      <div className="interests">
        <strong>Interests:</strong>
        <ul>
          {interests.map((interest, index) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
// App.js

import React, { useState } from 'react';
import Card from './Card';

const App = () => {
  const [cards, setCards] = useState([]);

  const addCard = (cardData) => {
    setCards([...cards, cardData]);
  };

  return (
    <div className="app">
      <h1>Business Cards</h1>

      {/* Render existing cards */}
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}

      {/* Form to add new cards */}
      <CardForm addCard={addCard} />
    </div>
  );
};

const CardForm = ({ addCard }) => {
  const [formData, setFormData] = useState({ name: '', description: '', interests: '', linkedin: '', twitter: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    addCard({
      name: formData.name,
      description: formData.description,
      socialMedia: {
        linkedin: formData.linkedin,
        twitter: formData.twitter,
        // Add more social media links as needed
      },
      interests: formData.interests.split(',').map((interest) => interest.trim()),
    });
    setFormData({ name: '', description: '', interests: '', linkedin: '', twitter: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="card-form">
      <h2>Add a Card</h2>
      <label>Name:</label>
      <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
      <label>Description:</label>
      <textarea value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} required />
      <label>Interests (comma-separated):</label>
      <input type="text" value={formData.interests} onChange={(e) => setFormData({ ...formData, interests: e.target.value })} required />
      <label>LinkedIn:</label>
      <input type="text" value={formData.linkedin} onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })} />
      <label>Twitter:</label>
      <input type="text" value={formData.twitter} onChange={(e) => setFormData({ ...formData, twitter: e.target.value })} />
      <button type="submit">Add Card</button>
    </form>
  );
};

export default App;

