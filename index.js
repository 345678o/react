import React from 'react';
import ReactDOM from 'react-dom/client';
import asabenehImage from './anamika.jpg';


const headerStyles={
  backgroundColor: "#0bce22ff",
  fontFamily:'Helvetica Neue',
  padding:25,
  lineHeight:1.5,
}

// Your JSX elements
const header = (
  <header style={headerStyles}>
    <div className='header-wrapper'>
    <h1>Welcome to 30 Days Of React</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
    <p>Anamika </p>
    <small>Oct 4, 2025</small>
    </div>
  </header>
);
const mainStyles = {
  backgroundColor: '#ef13b1ff',
}
const numOne = 3
const numTwo = 2

const result = (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
)

// JSX element, main
const techs = ['HTML', 'CSS', 'JavaScript']
const techsFormatted = techs.map((tech, index) => <li key={index}>{tech}</li>);




const main = (
  <main style={mainStyles}>
    <div className='main-wrapper'>
      <p>
        Prerequisite to get started{' '}
        <strong>
          <em>react.js</em>
        </strong>
        :
      </p>
      <ul>{techsFormatted}</ul>
      {result}
    
    </div>

  </main>

);
const footerStyles = {
  backgroundColor: '#040505ff',
  color:'white',
  padding:25,        
}
const user = (
  <div>
    <img src={asabenehImage} alt="anamika image" />
  </div>
);



const footer = (
  <footer style={footerStyles}>
    <p>Copyright 2025</p>
  </footer>
);

// Combine all sections into one app
const app = (
  <div>
    {header}
    {main}
    {user}
    {footer}
  </div>
);

// Get the root element from HTML
const rootElement = document.getElementById('root');

// ✅ Create a root using the DOM element
const root = ReactDOM.createRoot(rootElement);

// ✅ Render your JSX
root.render(app);

 




