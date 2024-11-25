// SignUp/page.tsx
'use client';
import { useState, createContext } from 'react';
import SignUpBoxImage from './signup-box-image/SignUpBoxImage';
import SignUpBox from './signup-box/SignUpBox';
import AllContextsProvider from '@/components/shared/AllContextsProvider';
import { IUser } from '@/components/unauthorized/signup/SignUp.model';
import { Navbar } from '../navbar/navbar';


/* sign up page */
export const Context_email = createContext(null);
export const Context_password = createContext(null);
export const Context_firstName = createContext(null);
export const Context_lastName = createContext(null);
export const Context_username = createContext(null);
export const Context_error = createContext(null);
export const Context_loggedInSuccessfully = createContext(null);



export default function SignUp() {

    /* SignUp page */
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');
    const [user, setUser] = useState<IUser | null>(null);
    const [loading, setLoading] = useState(true);
    const [loggedInSuccessfully, setLoggedInSuccessfully] = useState('');


    
    const contexts = [
        [Context_email, { email, setEmail }],
        [Context_password, { password, setPassword }],
        [Context_firstName, { firstName, setFirstName }],
        [Context_lastName, { lastName, setLastName }],
        [Context_username, { username, setUsername }],
        [Context_error, { error, setError }],
        [Context_loggedInSuccessfully, { loggedInSuccessfully, setLoggedInSuccessfully }],
    ];

    return (
        <AllContextsProvider contexts={contexts}>
            <Navbar />
            <main className="h-[calc(100dvh-100px)] flex items-center justify-center p-6 relative overflow-hidden bg-custom-very-soft-blue bg-[url('/svg/BG.svg')] bg-no-repeat bg-cover">
                <div className='bg-custom-light-grayish-blue bg-[url("/svg/BG.svg")] p-10 rounded-lg shadow-md z-50 flex flex-col items-center justify-center h-[37em] md:h-[25em] md:flex-row md:w-auto w-[97%] '>
                    <SignUpBoxImage />
                    <SignUpBox />
                </div>
            </main>
        </AllContextsProvider>
    );
}
