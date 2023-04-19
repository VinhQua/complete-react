import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import { Home } from './Views/Home';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='content'>
        <Home />
      </div>

    </div>
  );
}

export default App;
