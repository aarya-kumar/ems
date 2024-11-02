import React, { useState } from 'react';


const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        handleLogin(email, password)
        setEmail('');
        setPassword('');
    };

    return (
        <div className="flex min-h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="border-2 rounded-xl border-emerald-600 p-8 sm:p-10 md:p-12 lg:p-20 w-full max-w-md">
                <form
                    onSubmit={(e) => {
                        submitHandler(e);
                    }}
                    className="flex flex-col items-center justify-center"
                >
                    <input
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        required
                        className="outline-none bg-transparent border-2 border-emerald-600 py-2 sm:py-3 px-4 sm:px-5 text-base sm:text-xl rounded-full placeholder:text-gray-400 w-full"
                        type="email"
                        placeholder="Enter your email"
                    />
                    <input
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        required
                        className="outline-none bg-transparent border-2 border-emerald-600 py-2 sm:py-3 px-4 sm:px-5 text-base sm:text-xl rounded-full placeholder:text-gray-400 mt-3 w-full"
                        type="password"
                        placeholder="Enter password"
                    />
                    <button className="text-white outline-none border-none bg-emerald-600 hover:bg-emerald-700 font-semibold text-base sm:text-lg py-2 sm:py-3 px-8 w-full rounded-full placeholder:text-white mt-5">
                        Log In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
