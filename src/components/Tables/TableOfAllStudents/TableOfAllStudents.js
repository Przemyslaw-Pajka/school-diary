import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { typesOfDB } from "../../../config/typesOfDB";
import { SubjectAverage, SubjectGrades, SubjectName } from '../TableGradesStyled';
import { SubjectGradesSquare } from "./SubjectGradesSquare/SubjectGradesSquare";

export const TableOfAllStudents = (props) => {
    const user = JSON.parse(sessionStorage.getItem('login'))
    const subjectTaughtByTeacher = user.teacherType.split(' ')[1];
    const [studentJournal, setStudentJournal] = useState(JSON.parse(localStorage.getItem(typesOfDB.studentJournal)));


    useEffect(() => {
        window.addEventListener('storage', () => {
            setStudentJournal(JSON.parse(localStorage.getItem(typesOfDB.studentJournal)) || [])
        });
    }, [])

    return (
        <table>
            <thead>
                <tr>
                    <th>Uczeń</th>
                    <th>Oceny</th>
                    <th>Średnia</th>
                </tr>
            </thead>
            <tbody>
                {studentJournal.map((student) =>
                    <tr key={uuidv4()}>
                        <SubjectName>{`${student.name} ${student.surname}`}</SubjectName>
                        <SubjectGrades>
                            <SubjectGradesSquare subject={student.subjects[subjectTaughtByTeacher]} />
                        </SubjectGrades>
                        <SubjectAverage>{student.subjects[subjectTaughtByTeacher].srednia}</SubjectAverage>
                    </tr>
                )}
            </tbody>
        </table>
    )
}