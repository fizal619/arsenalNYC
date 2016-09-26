import React from 'react'

export default class Profile extends React.Component {


  render(){
    return (
      <div>
        <h1 className='heading'>This is the profile page!!</h1>
        <div class="btn-group">
          <div class="dropdown">
            <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Dropdown Example
            <span class="caret"></span></button>
            <ul class="dropdown-menu">
              <li><a href="#">HTML</a></li>
              <li><a href="#">CSS</a></li>
              <li><a href="#">JavaScript</a></li>
            </ul>
          </div>
        </div>
        {/*<div className="dropdown">
         <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown button
        </button>
          <ul className="dropdown-menu">
          {this.props.upcomingEvents.map((event, i) => {
            return (
              <li key={event.id}>{event.name}<br />
              {event.date}<br />
              {event.description}<br />
              {event.cost}</li>
            )
          })}
          </ul>
        </div>*/}
      </div>
      )
  }
}
