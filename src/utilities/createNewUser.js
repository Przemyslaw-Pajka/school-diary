import getRandomNumber from './getRandomNumber'
import saveNewUserToDB from './saveNewUserToDB'
import schoolSubjects from '../schoolSubjects.json'
const createNewUser = (event) => {
    event.preventDefault();
    let newStudent;
    const newUser = {
        name: document.getElementById('user-name').value,
        surname: document.getElementById('user-surname').value,
        id: getRandomNumber(7),
        password: document.getElementById('user-password').value,
        accountType: document.getElementById('user-account-type').value
    }
   
    if(newUser.accountType==="Uczeń"){
        const allSubjects = schoolSubjects.reduce((prev,current,currentIndex)=>{
            return Object.assign(prev,{[current] : {oceny: [],srednia: null}})
        },{})
        newStudent = {
            id: newUser.id,
            nameSurname: `${newUser.name} ${newUser.surname}`,
            subjects: {...allSubjects}
        }
    }
  
    // wykonac lepszy alert ( może jakis modal ? animacja)
    alert(`Pilnie zapisz na kartce to ID, bedzie Ci potrzebne do logowania ${newUser.id}`)
    saveNewUserToDB(newUser,newStudent)
}

export default createNewUser;   