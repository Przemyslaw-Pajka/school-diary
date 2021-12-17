import { useState } from "react";
import { schoolGrades } from "../../utilities/schoolGrades"
import { v4 as uuidv4 } from "uuid";
import { addGrade } from "../../utilities/addGrade";
import { typesOfDB } from "../../utilities/typesOfDB";
import { useListeningStorageDB } from "../../utilities/useListeningStorageDB";
import { AddingGradesBoxStyled, AddGradeLegend, StudentNameSelect, GradesSelect, AddGradeBtn } from "./styles/AddingGradesBoxStyled";

export const AddingGradesBox = () => {
    const [studentJournal, setStudentJournal] = useState(JSON.parse(localStorage.getItem(typesOfDB.studentJournal)));

    useListeningStorageDB(setStudentJournal)

    return (
        <AddingGradesBoxStyled onSubmit={(event) => { addGrade(event, studentJournal); event.target[0].selectedIndex = 0 }}>
            <AddGradeLegend>Dodawanie ocen</AddGradeLegend>
            <StudentNameSelect id="adding-box__student-name" defaultValue={'Wybierz ucznia'} required>
                <option value='' disabled hidden>Wybierz ucznia</option>
                {studentJournal.map(student => <option key={uuidv4()} value={`${student.id}`}>{`${student.name} ${student.surname}`} {`(${student.id})`}</option>)}
            </StudentNameSelect>
            <GradesSelect id="adding-box__grades">
                {schoolGrades.map(grade => <option key={uuidv4()} value={grade}>{grade}</option>)}
            </GradesSelect>
            <AddGradeBtn>Dodaj ocenę</AddGradeBtn>
        </AddingGradesBoxStyled>
    )
}