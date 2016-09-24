import React from 'react'

export default class Profile extends React.Component {


  render(){
    return (
      <div>
        <h1 className='heading'>This is the profile page!!</h1>
        <div>
          {this.props.upcomingEvents.map((event, i) => {
            return (
              <li key={event.id}>{event.name}<br />
              {event.date}<br />
              {event.description}<br />
              {event.cost}</li>
            )
          })}
        </div>
      </div>
      )
  }
}
