import React from 'react';
import { v4 as uuidv4 } from "uuid";
import { SubjectGradesSquareStyled } from '../../commonStyles/TableGradesStyled';

export const SubjectGradesSquare = props =>
    <>
        {props.subject.oceny.map(ocena => (<SubjectGradesSquareStyled data-grade={ocena} key={uuidv4()}>{ocena}</SubjectGradesSquareStyled>))}
    </>