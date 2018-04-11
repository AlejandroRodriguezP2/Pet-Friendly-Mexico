import React from 'react';
import { Link } from 'react-router-dom';

import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FlatButton from 'material-ui/FlatButton';
import {darkBlack, white} from 'material-ui/styles/colors';
import firebase from 'firebase';
import {provider, auth} from '../config/client.js';
import runtimeGenerator from 'regenerator-runtime/runtime';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

export default class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
      open: false
    }

    this.handleToggle=this.handleToggle.bind(this)
    this.handleClose=this.handleClose.bind(this)
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)

  }
  async login() {
    const result = await auth().signInWithPopup(provider)
    this.setState({user: result.user});
  }

  async logout() {
    await auth().signOut()
    this.setState({user: null});
  }

  async componentWillMount() {
    const user = firebase.auth();;
    if (user) {
      this.setState({user})
    }
  }


  handleToggle() {
    this.setState({open: !this.state.open});
}

 handleClose(){
   this.setState({open: false});
}

  render() {
    return(
      <Toolbar className= "toolBar" style={{backgroundColor:darkBlack}}>
          <ToolbarGroup>
            <div>
              <FlatButton label='Menu' onClick={this.handleToggle} style={{color: white}}/>
              <Drawer docked={false} width={200} open={this.state.open} onRequestChange={(open) => this.setState({open})}>
<<<<<<< HEAD
              <Link to='/servicesprofile'><MenuItem onClick={this.handleClose}>Create Service Profile</MenuItem></Link>
              <Link to='/userprofile'><MenuItem onClick={this.handleClose}>Create User Profile</MenuItem></Link>
=======
              <MenuItem onClick={this.handleClose}>Crear Perfil de Serivicio</MenuItem>
              <MenuItem onClick={this.handleClose}>Crear Perfil de Usuario</MenuItem>
>>>>>>> 72caff336d0e2b57eae768ca19d5c11fcd2ae451
            </Drawer>
            </div>
            <Link to='/'><ToolbarTitle text="Pet's Mexico" style={{color:white}}/></Link>
            <ToolbarSeparator />
            <FlatButton className="login" onClick={this.login} label="Login with Facebook" style={{right: -805, color: white}} />
            <FlatButton className="signup" onClick={this.logout} label="Logout" style={{left: 780, color: white}} />
          </ToolbarGroup>
        </Toolbar>
    );
  }
}
