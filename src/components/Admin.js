import { useState } from 'react';
import { FormRegistration } from './FormRegistration/FormRegistration';

export const Admin = () => {
    const [isCorrectAdminPassword, setIsCorrectAdminPassword] = useState(true);


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
