import { Context_email, Context_password, Context_firstName, Context_lastName, Context_username, Context_error, Context_loggedInSuccessfully} from '../SignUp.component';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';

export default function SignUpBox() {
	const emailContext = useContext(Context_email);
	const passwordContext = useContext(Context_password);
	const firstNameContext = useContext(Context_firstName);
	const lastNameContext = useContext(Context_lastName);
	const usernameContext = useContext(Context_username);
	const errorContext = useContext(Context_error);
	const loggedInSuccessfullyContext = useContext(Context_loggedInSuccessfully);

	const { email, setEmail } = emailContext || { email: '', setEmail: (value: string) => {} };
	const { password, setPassword } = passwordContext || { password: '', setPassword: (value: string) => {} };
	const { firstName, setFirstName } = firstNameContext || { firstName: '', setFirstName: (value: string) => {} };
	const { lastName, setLastName } = lastNameContext || { lastName: '', setLastName: (value: string) => {} };
	const { username, setUsername } = usernameContext || { username: '', setUsername: (value: string) => {} };
	const { error, setError } = errorContext || { error: '', setError: (value: string) => {} };
	const { loggedInSuccessfully, setLoggedInSuccessfully } = loggedInSuccessfullyContext || { loggedInSuccessfully: '', setLoggedInSuccessfully: (value: string) => {} };


	const handleSignUp = async () => {};

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
			<div className='w-auto  flex justify-between'>
				<input
					type="text"
					name="firstName"
					value={firstName}
					onChange={(e) => setFirstName(e.target.value)}
					placeholder="First Name"
					className="mr-1 mb-4 w-full p-3 rounded-md border border-custom-dark-desaturated-blue bg-white/50 placeholder-gray-500 focus:outline-none focus:border-blue-500"
				/>
				<input
					type="text"
					name="lastName"
					value={lastName}
					onChange={(e) => setLastName(e.target.value)}
					placeholder="Last Name"
					className="ml-1 mb-4 w-full p-3 rounded-md border border-custom-dark-desaturated-blue bg-white/50 placeholder-gray-500 focus:outline-none focus:border-blue-500"
				/>
			</div>
			<input
				type="text"
				name="username"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
				placeholder="Username"
				className="mb-4 w-full p-3 rounded-md border border-custom-dark-desaturated-blue bg-white/50 placeholder-gray-500 focus:outline-none focus:border-blue-500"
			/>
			<input
				type="email"
				name="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				placeholder="Email"
				className="mb-4 w-full p-3 rounded-md border border-custom-dark-desaturated-blue bg-white/50 placeholder-gray-500 focus:outline-none focus:border-blue-500"
			/>
			<input
				type="password"
				name="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				placeholder="Password"
				className="mb-4 w-full p-3 rounded-md border border-custom-dark-desaturated-blue bg-white/50 placeholder-gray-500 focus:outline-none focus:border-blue-500"
			/>
			<button
				onClick={handleSignUp}
				className="w-full mb-2 p-3 rounded-md bg-custom-dark-desaturated-blue text-white hover:bg-gray-600 focus:outline-none"
			>
				Sign Up
			</button>
			<h1 className='text-custom-dark-desaturated-blue text-center text-sm pt-2'>Already have an account? <Link className='text-custom-lark-blue' href={'/login'}>Login</Link></h1>
		</div>
	)

}