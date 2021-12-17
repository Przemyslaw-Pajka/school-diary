import { AddingGradesBox } from './AddingGradesBox/AddingGradesBox';
import { TableOfAllStudents } from './TableOfAllStudents/TableOfAllStudents';
import { UserPanel } from './UserPanel/UserPanel';

export const Teacher = () =>
    <>
        <UserPanel />
        <TableOfAllStudents />
        <AddingGradesBox />
    </>
