import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Redirect, Switch, Route } from "react-router-dom";
import Header from './Components/Header';
import Dashboard from './Components/Dashboard';
import Editorder from './Components/Editorder';
import Login from './Components/Login';
import Register from './Components/Register';
import fire from './config/fire'
import MenuList from './Components/MenuList';
import AddList from './Components/AddList';
import Submenu from './Components/Submenu';
import CreateSubmenu from './Components/CreateSubmenu';

const PrivateRoute = ({ component: IncomingComponent, ...rest }) => (
  <Route {...rest}
  render={props => (  
    (sessionStorage.getItem('auth')) ? (<IncomingComponent {...props} />) : (
      <Redirect to={{pathname: '/', state: { from: props.location }, }}/>)
  )}
/>
);

const PublicRoute = ({ component: IncomingComponent, ...rest }) => (
  <Route {...rest}
  render={props => (  
    (!sessionStorage.getItem('auth')) ? (<IncomingComponent {...props} />) : (
      <Redirect to={{pathname: '/dashboard', state: { from: props.location }, }}/>)
  )}
/>
);

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user : {}
    }
  }

  componentDidMount(){
    this.authListner()
  }

  authListner() {
    fire.auth().onAuthStateChanged((user) => {
      if(user) {
        console.log(user)
        this.setState({user})
      } else {
        this.setState({user : null})
      }
    })
  }

  render() {
    return (
      <Router >
        <div className="row m-0 " >
          <Switch>
            <PublicRoute exact path='/' component={Login}></PublicRoute>
            <PublicRoute exact path='/register' component={Register}></PublicRoute>
            <div style={{width:'100%'}}>
              <Header user={this.state.user}/>
              <PrivateRoute exact path='/dashboard' component={Dashboard}></PrivateRoute>
              <PrivateRoute exact path='/edit' component={Editorder}></PrivateRoute>
              <PrivateRoute exact path='/menu' component={MenuList}></PrivateRoute>
              <PrivateRoute exact path='/addlist' component={AddList}></PrivateRoute>
              <PrivateRoute exact path='/submenu' component={Submenu}></PrivateRoute>
              <PrivateRoute exact path='/addsubmenu' component={CreateSubmenu}></PrivateRoute>
            </div>           
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

