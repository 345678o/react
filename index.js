import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Day4 from './day 4'; 
import Day3 from './day3'; 
import Day5 from './day 5'; 
import Day6 from './day 6'; 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Day3 />
    <Day4 />
    <Day5 />
    <Day6 />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




