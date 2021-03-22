import React from 'react';
import signIn from '../utilities/signIn'

const Homepage = () => {
    return (
      <form className="login-form" onSubmit={signIn}>
          <legend>Panel logowania</legend>
          <label htmlFor="user-id">Wpisz ID:</label>
          <input id="user-id" type="number"/>
          <label htmlFor="user-password">Wpisz hasło:</label>
          <input id="user-password" type="number"/>
          <button type="submit">Zaloguj</button>
      </form>
    );
}

export default Homepage;
