import React     from 'react';
import ReactDOM  from 'react-dom'
import Nav       from './Nav.jsx'

export default class App extends React.Component {

  constructor() {

    super();

    this.state = {
      userLoggedIn: false
    }
  }

  changeLogInStatus(e){
    e.preventDefault();
    console.log('yas!')
  }

  render() {
    return(
      <container>
        <header>
          <Nav
          userStatus={this.state.userLoggedIn}
          changeStatus={this.changeLogInStatus.bind(this)} />
        </header>
        <div className="container">
          {this.props.children}
        </div>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
      </container>
      )
  }
}
