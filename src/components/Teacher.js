import React from 'react';
import {useHistory} from 'react-router-dom'
import logOut from '../utilities/logOut'
import Student from './Student';

const Teacher = () => {
    const history = useHistory();
    const user = JSON.parse(sessionStorage.getItem('login'))
    const subject = user.accountType.split(' ')[1];
    const studentJournal = JSON.parse(localStorage.getItem('studentJournal'));

    console.log(studentJournal)
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
                                {student.subjects[subject].oceny.map((grade)=>{
                                    return (<span className="subject-grades__square">{grade}</span>)
                                })}
                            </td>
                            <td className="subject-average"></td>
                        </tr>
                    )
                })}
            </table>
            <form className="adding-box">
                <legend>Dodawanie ocen</legend>
                <select className="adding-box__student-name">
                    {studentJournal.map((student,index)=>{
                        return(<option key={index} value={`${student.id}`}>{`${student.nameSurname}`}</option>)
                    })}
                </select>
                <select className="adding-box__grades">
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
