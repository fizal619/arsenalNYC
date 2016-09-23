import React from 'react'

export default class CreateUser extends React.Component {
  handleSubmit(e){
    e.preventDefault()
    console.log(`bro, it's handled`);
  }

  render() {
    return (
      <div>
        <section className='col-md-8 col-md-offset-2'>
          <form action="post" onSubmit={this.handleSubmit.bind(this)}>
              <div className="form-group">
                <label type='text'>First Name</label><br/>
                <input className='form-control' type="text" name="firstName" placeholder="Enter you First Name" required/>
              </div>
              <div className="form-group">
                <label type='text'>Last Name</label><br/>
                <input className='form-control' type="text" name="lastName" placeholder="Enter you Last Name" required/>
              </div>
              <div className="form-group">
                <label type='text'>City</label><br/>
                <input className='form-control' type="text" name="city" placeholder="City" required/>
              </div>
              <div className="form-group">
                <label type='text'>State</label><br/>
                <input className='form-control' type="text" name="state" placeholder="State" required/>
              </div>
              <div className="form-group">
                <label type='text'>Zip Code</label><br/>
                <input className='form-control' type="text" name="zipCode" placeholder="Zip Code" required/>
              </div>
              <div className="form-group">
                <label type='text'>Preferred Email</label><br/>
                <input className='form-control' type="text" name="email" placeholder="Email" required/>
              </div>
              <div className="form-group">
                <label type='text'>New Password</label><br/>
                <input className='form-control' type="text" name="password" placeholder="Password" required/>
              </div>
              <div className="form-group">
                <label type='text'>Confirm Password</label><br/>
                <input className='form-control' type="text" name="password-digest" placeholder="Confirmed Password" required/>
              </div>
              <div className="form-group">
                <label type='text'>Previous Member ID</label><br/>
                <input className='form-control' type="text" name="memberId" placeholder="Previous Member ID"/>
              </div>
              <div className="form-group">
                <label type='text'>Birthday</label><br/>
                <input className='form-control' type="text" name="birthday" placeholder="Birthday" required/>
              </div>
              <button className="btn btn-success" type='submit'>Create User</button>
            </form>

        </section>
      </div>
      )
  }
}
