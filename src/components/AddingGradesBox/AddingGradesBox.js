import { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { typesOfDB } from '../../config/typesOfDB';
import { useAddGrade } from "../../hooks/useAddGrade";
import { useListeningStorageDB } from '../../hooks/useListeningStorageDB';
import { AddGradeBtn, AddGradeLegend, AddingGradesBoxStyled, GradesSelect, StudentNameSelect } from "./styles/AddingGradesBoxStyled";


export const AddingGradesBox = () => {
    const [studentJournal, setStudentJournal] = useState(JSON.parse(localStorage.getItem(typesOfDB.studentJournal)));
    const addingGradesBoxStyled = useRef(null)
    const schoolGrades = [1, 2, 3, 4, 5, 6]

    useListeningStorageDB(setStudentJournal)
    useAddGrade(addingGradesBoxStyled)

    return (
        <AddingGradesBoxStyled ref={addingGradesBoxStyled}>
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