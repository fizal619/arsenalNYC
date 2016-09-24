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

  changeLogInStatus(){
    let userStatus = !this.state.userLoggedIn
    this.setState({
      userLoggedIn: userStatus
    })
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
          {this.props.children && React.cloneElement(this.props.children, {
            changeStatus:this.changeLogInStatus.bind(this)
            })}
        </div>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
      </container>
      )
  }
}
