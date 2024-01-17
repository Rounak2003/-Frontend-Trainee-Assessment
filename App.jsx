// React imports
// App.js
// App.js
// App.js
// App.js

// App.js

import React, { useState } from 'react';
import './App.css'; // Import your CSS file for styling

const users = [
  { name: 'John Doe', age: 25 },
  { name: 'Alexander', age: 17 },
  { name: 'Nelson Mandela', age: 78 },
  { name: 'Mahatma Gandhi', age: 56 },
  { name: 'Nikol Tesla', age: 39 },
];

const App = () => {
  const [sortedUsers, setSortedUsers] = useState([]);

  const sortUsersByEmail = () => {
    const sortedArray = [...users].sort((a, b) => a.age - b.age);
    setSortedUsers(sortedArray);
    alert(`Sorted Users by Age: ${sortedArray.map((user) => user.name).join(', ')}`);
  };

  const showMobileMessage = () => {
    alert(`Thank you for choosing mobile, [your name]`); // Replace [your name] with the actual name
  };

  return (
    <div className="App">
      <h1>Login or Signup</h1>
      <p>Please choose an option to continue</p>

      <div className="button-container">
        <button className="email-button" onClick={sortUsersByEmail}>
          Continue with Email
        </button>

        <button className="mobile-button" onClick={showMobileMessage}>
          Continue with Mobile
        </button>
      </div>

      <button className="google-button" disabled>
        Continue with Google
      </button>

      <p>By continuing you accept the Terms of Use and Privacy Policy</p>
    </div>
  );
};

export default App;


