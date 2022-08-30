import './App.css';
import { useState } from 'react'
import Navbar from './components/Navbar';
import Counter from './components/counter';
import AdressGen from './components/AdressGen';
import Users from './components/Users';
import Toogle from './components/toogle';
function App() {
  let [state, setState] = useState(false)
  let username = "shastri"
  let count = 1
  let users = [
    {
      name: 'Naveen',
      age: '22',
      place: 'Moon'
    },
    {
      name: 'Shastri',
      age: '15',
      place: 'Sun'
    },
    {
      name: 'Ezzzz',
      age: '80',
      place: 'Earth'
    }
  ]
  return (
    <div className="App">

      <Navbar data={username} />
      <h2>Learn React </h2>

      <Day3 />
      {
        users.map((obj, index) => {
          return (
            <Users key={index} name={obj.name} place={obj.place} age={obj.age} />
          )
        })
      },

      <h2 onClick={() => {
        setState(!state)
      }}>Open / Close Counter  </h2>

      {state && <Toogle />}
    </div>
  );
}

export default App;

function Day3() {
  return (
    <h3 className='day01'>DAY 03 : Spread and UseEffect</h3>
  )
}