import './Login.css';
import { createToken } from '../services/auth';
import React, { useState, useEffect } from 'react';


export default function LoginPage() {
  const [count, setCount] = useState(0);

  // De forma similar a componentDidMount y componentDidUpdate
  useEffect(() => {
    const data = {
      email: "email@email.com" ,
      password: "125345"
    }
    createToken(data).then((res)=> {
      console.log(res)
    })
  });
    return (
        <div className="login-wrapper">
        <h1>Please Log In</h1>
        <form>
          <label>
            <p>Username</p>
            <input type="text" />
          </label>
          <label>
            <p>Password</p>
            <input type="password" />
          </label>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
  
    )
}
