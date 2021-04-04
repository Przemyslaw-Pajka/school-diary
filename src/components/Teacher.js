import React,{useEffect,useState} from 'react';
import {useHistory} from 'react-router-dom'
import logOut from '../utilities/logOut'
import addGrade from '../utilities/addGrade'
import SubjectGradesSquare from './SubjectGradesSquare'

const Teacher = () => {
    const history = useHistory();
    const user = JSON.parse(sessionStorage.getItem('login'))
    const subject = user.accountType.split(' ')[1];
    const [studentJournal,setStudentJournal] = useState(JSON.parse(localStorage.getItem('studentJournal')));
    

    useEffect(() => {
        window.addEventListener('storage', () => {
          setStudentJournal(JSON.parse(localStorage.getItem('studentJournal')) || [])   
        });
    }, [])

 
    return (
        <>
           <div className="user-panel">
                Cześć <span className="user-panel__user-name">{`${user.name} ${user.surname}`}</span>
                <button className="user-panel__logout-btn" onClick={()=>logOut(history)}>Wyloguj</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Uczeń</th>
                        <th>Oceny</th>
                        <th>Średnia</th>
                    </tr>
                </thead>
                {studentJournal.map((student,index)=>{
                    return (
                        <tr key={index}>
                            <td className="subject-name">{student.nameSurname}</td>
                            <td className="subject-grades">
                                <SubjectGradesSquare subject={student.subjects[subject]}/>
                            </td>
                            <td className="subject-average">{student.subjects[subject].srednia}</td>
                        </tr>
                    )
                })}
            </table>
            <form className="adding-box" onSubmit={(event)=>addGrade(event,studentJournal,subject)}>
                <legend>Dodawanie ocen</legend>
                <select className="adding-box__student-name" id="adding-box__student-name">
                    {studentJournal.map((student,index)=>{
                        return(<option key={index} value={`${student.id}`}>{`${student.nameSurname}`} {`(${student.id})`}</option>)
                    })}
                </select>
                <select className="adding-box__grades" id="adding-box__grades">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select>
                <button>Dodaj ocenę</button>
            </form>
        </>
    );
}

export default Teacher;
