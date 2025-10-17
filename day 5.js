import React from 'react';
import { createRoot } from 'react-dom/client';
import anamika from './anamika.jpg';

// Function to show month, date, year
const showDate = (time) => {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];

  const month = months[time.getMonth()].slice(0, 3); // 3-letter month
  const year = time.getFullYear();
  const date = time.getDate();
  return `${month} ${date}, ${year}`;
};

// Header Component
const Header = ({ data }) => {
  const { welcome, title, subtitle, author: { firstName, lastName }, date } = data;

  return (
    <header>
      <div className="header-wrapper">
        <h1> DAY 5 OF REACT </h1>
        <h1>{welcome}</h1>
        
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>{firstName} {lastName}</p>
        <small>{showDate(date)}</small>
      </div>
    </header>
  );
};

// TechList Component
const TechList = ({ techs }) => (
  <ul>
    {techs.map((tech) => <li key={tech}>{tech}</li>)}
  </ul>
);

// UserCard Component
const UserCard = ({ user }) => {
  const { firstName, lastName, image } = user;
  return (
    <div className="user-card">
      <img src={image} alt={`${firstName} ${lastName}`} />
      <h2>{firstName} {lastName}</h2>
    </div>
  );
};

// Button Component
const Button = ({ text, onClick, style }) => (
  <button style={style} onClick={onClick}>{text}</button>
);

// Button CSS styles
const buttonStyles = {
  backgroundColor: '#61dbfb',
  padding: '10px 15px',
  border: 'none',
  borderRadius: 5,
  margin: 3,
  cursor: 'pointer',
  fontSize: 18,
  color: 'white',
};

// Main Component
const Main = ({ user, techs, greetPeople, handleTime }) => (
  <main>
    <div className="main-wrapper">
      <p>Prerequisite to get started React.js:</p>
      <TechList techs={techs} />
      <UserCard user={user} />
      <Button text="Greet People" onClick={greetPeople} style={buttonStyles} />
      <Button text="Show Time" onClick={handleTime} style={buttonStyles} />
    </div>
  </main>
);

// Footer Component
const Footer = ({ copyRight }) => (
  <footer>
    <div className="footer-wrapper">
      <p>Copyright {copyRight.getFullYear()}</p>
    </div>
  </footer>
);

// App Component
const App = () => {
  const data = {
    welcome: 'Welcome to 30 Days Of React',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
    author: { firstName: 'Asabeneh', lastName: 'Yetayeh' },
    date: new Date(),
  };

  const techs = ['HTML', 'CSS', 'JavaScript'];
  const user = { ...data.author, image: anamika };
  const date = new Date();

  const handleTime = () => alert(showDate(new Date()));
  const greetPeople = () => alert('Welcome to 30 Days Of React Challenge, 2020');

  return (
    <div className="app">
      <Header data={data} />
      <Main
        user={user}
        techs={techs}
        greetPeople={greetPeople}
        handleTime={handleTime}
      />
      <Footer copyRight={date} />
    </div>
  );
};

// Render App
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<App />);

export default App;
