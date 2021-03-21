import React from 'react';

const CreateNewUserForm = () => {
    const schoolSubjects = ["biologia","chemia","fizyka","geografia","historia","informatyka","j.angielski","j.polski","j.niemiecki","matematyka","religia","wos"]
    return (
       <form className="create-user-form">
           <legend>Rejestracja nowego użytkownika</legend>
           <label htmlFor="user-name-surname">Wpisz imie i nazwisko użytkownika:</label>
           <input id="user-name-surname" type="text"/>
           <label htmlFor="user-id">Wpisz ID użytkownika:</label>
           <input id="user-id" type="text"/>
           <label htmlFor="user-password">Wpisz hasło użytkownika:</label>
           <input id="user-password"type="password"/>
           <label>Wybierz typ konta:</label>
           <select>
               <option>Uczeń</option>
               {schoolSubjects.map((item)=>{
                   return <option key={'nauczyciel'+item}>{"Nauczyciel " + item}</option>
               })}
           </select>
           <button>Załóż nowe konto</button>
       </form>
    );
}

export default CreateNewUserForm;
