import React,{useEffect,useState} from 'react';
import verifyAdminPassword from '../utilities/veryifyAdminPassword'
import CreateNewUserForm from './CreateNewUserForm'

const Admin = () => {
    let [isCorrect,setIsCorrect] = useState(false);

    const showPrompt= () => {
        return new Promise((resolve,reject)=>{
            resolve(window.prompt("Podaj hasło administratora"))
        })
    }

    useEffect(() => {
        async function showAndVerify() {
            const password = await showPrompt();
            verifyAdminPassword(password)? setIsCorrect(verifyAdminPassword(password)) : showAndVerify()
        }
        showAndVerify()
    }, [])

   
    return (
        <>
            {isCorrect? 
                <>
                <h1>Jesteś zalogowany!</h1>
                <CreateNewUserForm/>
                </>
            :null}
        </>
    );
};

export default Admin;
