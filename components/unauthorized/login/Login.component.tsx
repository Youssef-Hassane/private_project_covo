// login/page.tsx
'use client';
import { useState, createContext } from 'react';
import LoginBoxImage from './login-box-image/LoginBoxImage';
import LoginBox from './login-box/LoginBox';
import AllContextsProvider from '@/components/shared/AllContextsProvider';
import { IUser } from '@/components/unauthorized/login/Login.model';


/* login page */
export const Context_email = createContext(null);
export const Context_password = createContext(null);
export const Context_error = createContext(null);
export const Context_loggedInSuccessfully = createContext(null);
export const Context_router = createContext(null);
export const Context_user = createContext(null);
export const Context_loading = createContext(null);



export default function Login() {

    /* login page */
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loggedInSuccessfully, setLoggedInSuccessfully] = useState('');
    const [user, setUser] = useState<IUser | null>(null);
    const [loading, setLoading] = useState(true);


    const contexts = [
        [Context_email, { email, setEmail }],
        [Context_password, { password, setPassword }],
        [Context_error, { error, setError }],
        [Context_user, { user, setUser }],
        [Context_loading, { loading, setLoading }],
        [Context_loggedInSuccessfully, { loggedInSuccessfully, setLoggedInSuccessfully }],
    ];

    return (
        <AllContextsProvider contexts={contexts}>
            <main className="h-[calc(100dvh-100px)] flex items-center justify-center p-6 relative overflow-hidden bg-custom-very-soft-blue bg-[url('/svg/BG.svg')] bg-no-repeat bg-cover">
                <div className='bg-custom-light-grayish-blue bg-[url("/svg/BG.svg")]  p-10 rounded-lg shadow-md z-50 flex flex-col items-center justify-center h-[37em] md:h-[25em] md:flex-row md:w-auto w-[97%] '>
                    <LoginBoxImage />
                    <LoginBox />
                </div>
            </main>
        </AllContextsProvider>
    );
}
