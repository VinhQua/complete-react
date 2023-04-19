import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import { Home } from './Views/Home';
import {BrowserRouter as Router ,Route, Switch} from 'react-router-dom';
import { Create } from './Views/Create';
import BlogDetails from './Views/BlogDetails';
function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />
      <div className='content'>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>


          <Route path='/blog/:id'>
            <BlogDetails/>
          </Route>
          <Route path='/create'>
            <Create/>
          </Route>          
        </Switch>
      </div>

    </div>      
    </Router>

  );
}

export default App;
