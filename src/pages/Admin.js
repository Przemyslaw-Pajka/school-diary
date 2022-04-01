import { useState } from 'react';
import { FormRegistration } from '../components/Forms/FormRegistration/FormRegistration';

export const Admin = () => {
    const [isCorrectAdminPassword, setIsCorrectAdminPassword] = useState(true);

    // useShowPrompt(setIsCorrectAdminPassword)

    return (
        <>
            {isCorrectAdminPassword && <FormRegistration />}
        </>
    );
};
