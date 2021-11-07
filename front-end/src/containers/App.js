import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MainPage from "../pages/MainPage/index";
import { useEffect } from 'react';

export default function App() {
    useEffect(() => {
        document.title = "SolanaWitches";  
      }, []);
  return (
      <Router>
          <Switch>
              <Route path="/" exact={true} component={MainPage}/>
          </Switch>
      </Router>
  );
}
