import './App.css';
import Navbar from './components/Navbar';
function App() {
  let username = "shastri"
  return (
    <div className="App">
      <Navbar data={username}  />
      <h2>Learn React </h2>
      <Day1 />
    </div>
  );
}

export default App;

function Day1() {
  return (
    <h3 className='day01'>Day1: Basics</h3>
  )
}