import React from 'react';
import signIn from '../utilities/signIn'
import {useHistory} from 'react-router-dom'

const Homepage = (props) => {
  const history = useHistory();
    
  const routeChange = (user) =>{ 
    let path;
    if(user.accountType.includes("Uczeń"))
      path = '/uczen'
    else if(user.accountType.includes("Nauczyciel"))
      path = '/nauczyciel'

   
    history.push(path);
  }

    return (
      <form className="login-form" onSubmit={(event)=>signIn(event,routeChange)}>
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
