import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import Errors from './pages/Errors'
import SingleRoom from './pages/SingleRoom'

import {Route, Switch} from 'react-router-dom'

import NavBar from './components/NavBar'

function App() {
  return (
    <>
    <NavBar />
    <Switch>
      
    <Route exact path="/" component={Home} />
    <Route exact path="/rooms" component={Rooms} />
    <Route exact path="/rooms/:slug" component={SingleRoom} />
    <Route component={Errors} />
    {/* //when there is no component that exists whats typed it the error page will render instead />  */}
    </Switch> 

    </>
  );
}

export default App;
