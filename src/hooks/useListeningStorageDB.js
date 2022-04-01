import { useEffect } from "react";
import { typesOfDB } from '../config/typesOfDB';

export const useListeningStorageDB = (setStudentJournal) => {
    useEffect(() => {
        window.addEventListener('storage', () => {
            setStudentJournal(JSON.parse(localStorage.getItem(typesOfDB.studentJournal)) || [])
        });
    }, [])
}