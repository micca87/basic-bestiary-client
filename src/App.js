import './App.css';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import { Link, BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <div className="App">
            <ul>
              <li>
                <Link to="/">Zaloguj sie</Link>
              </li>
              <li>
                <Link to="/register">Zarejestruj się</Link>
              </li>
            </ul>

        <Switch>
          <Route exact path="/">
            <SignIn />
          </Route>
          <Route path="/register">
            <SignUp />
          </Route>
        </Switch>
        <Link to="/guest" >Wejdź bez logowania</Link>
        </div>
      </BrowserRouter>
  );
}

export default App;
