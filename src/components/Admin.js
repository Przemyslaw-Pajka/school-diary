import { useEffect, useState } from 'react';
import { FormRegistration } from './FormRegistration/FormRegistration';
import { showPrompt } from '../utilities/showPrompt';

export const Admin = () => {
    const [isCorrectAdminPassword, setIsCorrectAdminPassword] = useState(true);

    useEffect(() => {
        // showPrompt(setIsCorrectAdminPassword)
    }, [])

    return (
        <>
            {isCorrectAdminPassword ?
                <>
                    <FormRegistration />
                </>
                : null}
        </>
    );
};
