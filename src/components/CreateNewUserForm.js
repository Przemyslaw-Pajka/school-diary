import React from 'react';
import createNewUser from '../utilities/createNewUser'
import schoolSubjects from '../schoolSubjects.json'
const CreateNewUserForm = () => {
    return (
       <form className="create-user-form" onSubmit={createNewUser}>
           <legend>Rejestracja nowego użytkownika</legend>
           <label htmlFor="user-name">Wpisz imie:</label>
           <input id="user-name" type="text" minLength="3" required pattern="^[a-zA-Z][a-zA-ZążźćśęółbńĄŻŹĆŃŚĘÓŁ]+"/>
           <label htmlFor="user-surname">Wpisz nazwisko:</label>
           <input id="user-surname" type="text" minLength="3" required pattern="^[a-zA-Z][a-zA-ZążźćśęółbńĄŻŹĆŃŚĘÓŁ]+" />
           <label htmlFor="user-password">Wpisz hasło (minimum 8 znaków):</label>
           <input id="user-password"type="password" minLength="8" required/>
           <label>Wybierz typ konta:</label>
           <select id="user-account-type">
               <option>Uczeń</option>
               {schoolSubjects.map((item)=>{
                   return <option key={'nauczyciel'+item}>{"Nauczyciel " + item}</option>
               })}
           </select>
           <button type="submit">Załóż konto</button>
       </form>
    );
}

export default CreateNewUserForm;
