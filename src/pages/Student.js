import React from 'react';
import { TableStudentOfAllGrades } from '../components/Tables/TableStudentOfAllGrades/TableStudentOfAllGrades';
import { UserPanel } from '../components/UserPanel/UserPanel';

export const Student = () =>
    <>
        <UserPanel />
        <TableStudentOfAllGrades />
    </>