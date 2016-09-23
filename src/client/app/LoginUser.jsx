import React from 'react';

export default function LoginUser (props){
  <div>
    <section className="col-md-8 col-md-offset-2">
      <form action="post">
        <div className="form-group">
          <label type='text'>User Name</label>
          <input className='form-control' type="text" name='username' placeholder="Enter User Name" required/>
        </div>
        <div className='form-group'>
          <label tyoe='text'>Password</label>
          <input type="password" className='form-control' name='password_digest' placeholder="Enter a password" required/>
        </div>
        <button className='btn btn-success' type='submit'>Login</button>
      </form>
    </section>
  </div>
}

