import './App.css';
import Navbar from './components/Navbar';
import Counter from './components/counter';
import AdressGen from './components/AdressGen';
function App() {
  let username = "shastri"
  let count = 1
  return (
    <div className="App">
      <Navbar data={username} />
      <h2>Learn React </h2>
      <Day2 />
      <Counter count={count} />
      <br />
      <AdressGen />
    </div>
  );
}

export default App;

function Day2() {
  return (
    <h3 className='day01'>DAY 02 : Hooks</h3>
  )
}