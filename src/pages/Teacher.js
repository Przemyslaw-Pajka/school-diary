import { AddingGradesBox } from '../components/AddingGradesBox/AddingGradesBox';
import { TableOfAllStudents } from '../components/Tables/TableOfAllStudents/TableOfAllStudents';
import { UserPanel } from '../components/UserPanel/UserPanel';

export const Teacher = () =>
    <>
        <UserPanel />
        <TableOfAllStudents />
        <AddingGradesBox />
    </>