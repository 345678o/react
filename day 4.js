import React from 'react';
import { createRoot } from 'react-dom/client';
import anamika from './anamika.jpg'; // Make sure this path is correct

// -------------------- Day4 Component --------------------
function Day4() {
  const skills = ['HTML', 'CSS', 'JS', 'React'];

  // Function approach
  const getUserInfo = (firstName, lastName, country, title, skills) =>
    `${firstName} ${lastName}, a ${title} developer based in ${country}. He knows ${skills.join(', ')}`;

  const userInfo = getUserInfo('Asabeneh', 'Yetayeh', 'Finland', 'FullStack Developer', skills);

  // Classes
  class Parent {
    constructor(firstName, lastName, country, title) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.country = country;
      this.title = title;
    }
    getPersonInfo() {
      return `${this.firstName} ${this.lastName}, a ${this.title} developer based in ${this.country}`;
    }
  }

  class Child extends Parent {
    constructor(firstName, lastName, country, title, skills) {
      super(firstName, lastName, country, title);
      this.skills = skills;
    }
    getSkills() {
      return this.skills.length > 0 ? this.skills.join(', ') : 'No skills found';
    }
  }

  const child = new Child('Asabeneh', 'Yetayeh', 'Finland', 'FullStack Developer', skills);

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', marginTop: '20px' }}>
      <h2>Day 4: Learning React Components</h2>
      <p>This is my practice file for Day 4!</p>

      <p><strong>Function Info:</strong> {userInfo}</p>
      <p><strong>Parent Info:</strong> {child.getPersonInfo()}</p>
      <p><strong>Child Skills:</strong> {child.getSkills()}</p>

      <img
        src={anamika}
        alt="Anamika"
        style={{ width: '200px', height: 'auto', display: 'block', marginTop: '10px' }}
      />
    </div>
  );
}

// -------------------- Header Component --------------------
const Header = () => (
  <header style={{ background: '#f0f0f0', padding: '10px' }}>
    <h1>Welcome to 30 Days Of React</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
    <p>Asabeneh Yetayeh</p>
    <small>Oct 3, 2020</small>
  </header>
);

// -------------------- UserCard Component --------------------
const UserCard = () => (
  <div style={{ marginTop: '10px', textAlign: 'center' }}>
    <img src={anamika} alt="Anamika" style={{ width: '150px', height: 'auto' }} />
    <h3>Asabeneh Yetayeh</h3>
  </div>
);

// -------------------- TechList Component --------------------
const TechList = () => {
  const techs = ['HTML', 'CSS', 'JavaScript'];
  return (
    <ul>
      {techs.map(tech => <li key={tech}>{tech}</li>)}
    </ul>
  );
};

// -------------------- Main Component --------------------
const Main = () => (
  <main style={{ padding: '10px' }}>
    <p>Prerequisite to get started React.js:</p>
    <TechList />
    <UserCard />
    <Day4 /> {/* Day4 included here */}
  </main>
);

// -------------------- Footer Component --------------------
const Footer = () => (
  <footer style={{ background: '#f0f0f0', padding: '10px', marginTop: '20px', textAlign: 'center' }}>
    <p>Copyright 2020</p>
  </footer>
);

// -------------------- App Component --------------------
const App = () => (
  <div>
    <Header />
    <Main />
    <Footer />
  </div>
);

// -------------------- Render using React 18 --------------------
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<App />);
//-------------------day 4 -------------------------------

// Hexadecimal color generator
const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}

const HexaColor = () => <div>{hexaColor()}</div>

const rootsElement = document.getElementById('root')
// we render the App component using the ReactDOM package
root.render(<HexaColor />, rootsElement)


export default Day4;

