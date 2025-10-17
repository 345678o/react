/*
This file contains a React application that demonstrates:
1. Rendering a list of numbers dynamically using the map function.
2. Displaying a list of skills with their respective levels using components.
3. Proper usage of React components and props to manage and display data.
*/

import React from 'react';
import { createRoot } from 'react-dom/client';

/*const s = () => {
    return (
        <div className="container">
            <div>
               <h1>NUMBER LIST</h1>
                <ul>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => (
                        <li key={number}>{number}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};*/
 const skills = [['html',10], ['css',9], ['js',8], ['react',7], ['node',6]];
 const Skill=({skill:[tech,level]})=>(
    <li>{tech} {level}</li>
 )
 const Skills = ({ skills }) => {
  const skillsList = skills.map((skill) => <Skill skill={skill} />)
  console.log(skillsList)
  return <ul>{skillsList}</ul>
}
const countries =[{
    name: 'United States',
    capital: 'Washington, D.C.'
}, {
    name: 'Canada',
    capital: 'Ottawa'
}, {
    name: 'Mexico',
    capital: 'Mexico City'
}, {
    name: 'United Kingdom',
    capital: 'London'
}, {
    name: 'France',
    capital: 'Paris'
}];
const Country=({country:{name,capital}})=>{
    return(
        <div>
            <h1>{name}</h1>
            <small>{capital}

            </small>

            
        </div>
    )
}
const Countries =({countries})=>{
    const countryList=countries.map((country)=><Country country={country} />)
    return(
        <div>
            {countryList}
        </div>
    )
}

const App=()=>{
    return (
        <div className="container">
    <div>
        <h1>SKILLs Level</h1>
        <Skills skills={skills} />
        <h1>Countries List</h1>
      <Countries countries={countries} />

    </div>

</div>)
}


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<App />);
export default App;