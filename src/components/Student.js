import React from 'react';
import {useHistory} from 'react-router-dom'
import logOut from '../utilities/logOut'
import SubjectGradesSquare from './SubjectGradesSquare'
const Student = () => {
    const history = useHistory();
    const user = JSON.parse(sessionStorage.getItem('login'))
    let studentJournal = JSON.parse(localStorage.getItem('studentJournal')).filter(item => {
        return item.id === user.id;
    });
    studentJournal = studentJournal[0]

    return (
        <>
            <div className="user-panel">
                Cześć <span className="user-panel__user-name">{`${user.name} ${user.surname}`}</span>
                <button className="user-panel__logout-btn" onClick={()=>logOut(history)}>Wyloguj</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Przedmiot</th>
                        <th>Oceny</th>
                        <th>Średnia</th>
                    </tr>
                </thead>
                {Object.entries(studentJournal.subjects).map((subject,index)=>{
                    return (
                        <tr key={index}>
                            <td className="subject-name">{subject[0]}</td>
                            <td className="subject-grades">
                                <SubjectGradesSquare subject={subject[1]}/>
                            </td>
                            <td className="subject-average">{subject[1].srednia}</td>
                        </tr>
                    )
                })}
            </table>
        </>
    );
}

export default Student;
