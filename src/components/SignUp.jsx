import React, { useState } from 'react';
import SignUpHeader from './SignUpHeader';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    useNavigate.push('/login')

    console.log('Signing up with:', { username, email });
  };

  return (
    <>
      <SignUpHeader/>
      <div className='signup'>
        <div className="img"></div>
          <form onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
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
            <div className="form-content">
              <label>Confirm Password <br/>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </label>
            </div>
            <br />
            <button style={{width: '9rem'}} type="submit" onClick={handleSubmit}>Sign Up</button>
          </form>
        </div>
    </>
  );
}

export default SignUp;
