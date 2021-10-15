import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from "react-router-dom"
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Navbar from './components/Navbar';
import { persistUserInfoAfterRefresh } from "./store/user/actions"

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(persistUserInfoAfterRefresh)
  }, [])

  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage}/>
      </Switch>
    </div>
  );
}

export default App;
