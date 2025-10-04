import React from 'react';
import asabenehImage from './anamika.jpg';

function Day3() {
  const headerStyles = {
    backgroundColor: "#0bce22ff",
    fontFamily: 'Helvetica Neue',
    padding: 25,
    lineHeight: 1.5,
  };

  const mainStyles = {
    backgroundColor: '#ef13b1ff',
  };

  const footerStyles = {
    backgroundColor: '#040505ff',
    color: 'white',
    padding: 25,
  };

  const numOne = 3;
  const numTwo = 2;
  const techs = ['HTML', 'CSS', 'JavaScript'];

  return (
    <div>
      <header style={headerStyles}>
        <h1>Welcome to 30 Days Of React</h1>
        <h2>Getting Started React</h2>
        <h3>JavaScript Library</h3>
        <p>Anamika</p>
        <small>Oct 4, 2025</small>
      </header>

      <main style={mainStyles}>
        <p>Prerequisite to get started React.js:</p>
        <ul>
          {techs.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
        <p>
          {numOne} + {numTwo} = {numOne + numTwo}
        </p>
        <img src={asabenehImage} alt="Anamika" width="200" />
      </main>

      <footer style={footerStyles}>
        <p>Copyright 2025</p>
      </footer>
    </div>
  );
}

export default Day3;


 



