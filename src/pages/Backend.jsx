// 備用的，這個page需要過useState來confirm身分，他會牽涉到edit跟destroy

import React, { useState } from 'react'

const Backend = () => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordSubmit = (event) => {
    event.preventDefault();
    //岑岑的後台
    if (password === 'hp6hp62k7c.4w96') {
      setIsAuthenticated(true);
    }
  };

  if (!isAuthenticated) {
    return (
      <form onSubmit={handlePasswordSubmit}>
        <label>
          Please enter the password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }

  return (
    <div>
      This is a password-protected page.
    </div>
  );
 }


export default Backend

