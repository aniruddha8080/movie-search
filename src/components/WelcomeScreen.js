import React from 'react';
import '../styles/Styles.css';
const WelcomeScreen = ({ onStart }) => {
  return (
    <div className="welcome-screen">
      <h1>Welcome to Aniruddha Website 🎥</h1>
      <p>Here you can search movies and get their details!</p>
      <button onClick={onStart}>Get Started</button>
    </div>
  );
};
export default WelcomeScreen;
