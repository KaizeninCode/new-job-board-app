import React, { useState } from 'react';
import LoginHeader from './LoginHeader'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/')
    console.log('Logging in with:', { email, password });
  };

  return (
    <>
      {/* <LoginHeader/> */}
      <div className='signup'>
        <div className="img"></div>
          <form onSubmit={handleSubmit}>
            <h1>Sign In</h1>
            <div className="form-content">
              <label>Username <br/>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </label>
            </div>
            <div className="form-content">
              <label>Email <br/>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>
            </div>
            <div className="form-content">
              <label>Password <br/>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </label>
            </div>
            <br />
            <button style={{width: '9rem'}} type="submit">Sign In</button>
          </form>
        </div>
    </>
  );
}

export default Login;
