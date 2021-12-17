import { v4 as uuidv4 } from "uuid";
import { SubjectGradesSquare } from "../SubjectGradesSquare/SubjectGradesSquare";
import { typesOfDB } from "../../utilities/typesOfDB";
import { SubjectAverage, SubjectGrades, SubjectName } from "../../commonStyles/TableGradesStyled";

export const TableStudentOfAllGrades = (props) => {
    const user = JSON.parse(sessionStorage.getItem('login'))
    const studentJournal = JSON.parse(localStorage.getItem(typesOfDB.studentJournal)).find(item => item.id === user.id);

    return (
        <table>
            <thead>
                <tr>
                    <th>Przedmiot</th>
                    <th>Oceny</th>
                    <th>Średnia</th>
                </tr>
            </thead>
            <tbody>
                {Object.entries(studentJournal.subjects).map(subject =>
                (
                    <tr key={uuidv4()}>
                        <SubjectName>{subject[0]}</SubjectName>
                        <SubjectGrades>
                            <SubjectGradesSquare subject={subject[1]} />
                        </SubjectGrades>
                        <SubjectAverage> {subject[1].srednia} </SubjectAverage>
                    </tr>
                )
                )}
            </tbody>
        </table>
    )
}