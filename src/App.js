import './App.css';
import Profile from './components/Profile';
import About from './components/About';
import { useHistory, Route, Link } from 'react-router-dom'
function App() {
  const history = useHistory()
  return (
    <div className="App">
      <button onClick={() => history.push('/about')}>About Me</button>
      <button onClick={() => history.push('/profile')}>profile</button>
      <Route path='/about' component={About} />
      <Route path='/profile' component={Profile} />

    </div>
  );
}

export default App;
