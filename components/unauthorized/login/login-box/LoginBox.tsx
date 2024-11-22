import Link from 'next/link';
import { Context_email, Context_password, Context_error, Context_loggedInSuccessfully } from "@/components/unauthorized/login/Login.component"
import { useContext } from 'react';

export default function LoginBox() {

	const emailContext = useContext(Context_email);
	const passwordContext = useContext(Context_password);
	const errorContext = useContext(Context_error);
	const loggedInSuccessfullyContext = useContext(Context_loggedInSuccessfully);

	const { email, setEmail } = emailContext || { email: '', setEmail: (value: string) => {} };
	const { password, setPassword } = passwordContext || { password: '', setPassword: (value: string) => {} };
	const { error, setError } = errorContext || { error: '', setError: (value: string) => {} };
	const { loggedInSuccessfully, setLoggedInSuccessfully } = loggedInSuccessfullyContext || { loggedInSuccessfully: '', setLoggedInSuccessfully: (value: string) => {} };

	return (
		<div className="pt-8 rounded-lg  w-auto max-w-80 z-50 relative flex-col items-center justify-center">
			{error && (
				<p className="mb-4 text-sm font-bold text-red-500 absolute top-0 left-1/2 transform -translate-x-1/2 w-full text-center">
					{error}
				</p>
			)}
			{loggedInSuccessfully && (
				<p className="mb-4 text-sm font-bold text-green-500 absolute top-0 left-1/2 transform -translate-x-1/2 w-full text-center">
					{loggedInSuccessfully}
				</p>
			)}

			<input
				type="email"
				name="email"
				value={email}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
				placeholder="Email"
				className="mb-4 w-full p-3 rounded-md border border-custom-dark-desaturated-blue bg-white/50 text-custom-dark-desaturated-blue placeholder-gray-500 focus:outline-none focus:border-blue-500"
			/>
			<input
				type="password"
				name="password"
				value={password}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
				placeholder="Password"
				className="mb-4 w-full p-3 rounded-md border border-custom-dark-desaturated-blue bg-white/50  text-custom-dark-desaturated-blue placeholder-gray-500 focus:outline-none focus:border-blue-500"
			/>
			<button
				onClick={() => {}}
				className="w-full mb-2 p-3 rounded-md bg-custom-dark-desaturated-blue text-white hover:bg-gray-600 focus:outline-none"
			>
				Sign In
			</button>
			<h1 className='text-custom-dark-desaturated-blue text-center text-sm pt-2'>Don&apos;t have account? <Link className='text-custom-lark-blue' href={'/signup'}>SignUp</Link></h1>
			<h1 className='text-custom-dark-desaturated-blue text-center text-sm pt-2'>Forgot Password? <Link className='text-custom-lark-blue' href={'/forgot-password'}>Reset</Link></h1>
		</div>
	);

};