const saveNewUserToDB = (newUser,newStudent) => {
    let users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [] ;
    let studentJournal = localStorage.getItem('studentJournal') ? JSON.parse(localStorage.getItem('studentJournal')) : [] ;

    users.push(newUser)
    
    if(newUser.accountType==="Uczeń"){
        studentJournal.push(newStudent)
    }
    
    localStorage.setItem('studentJournal',JSON.stringify(studentJournal))
    localStorage.setItem('users',JSON.stringify(users))
}

export default saveNewUserToDB;
