import { useState } from "react"

export default function Signup({ handleChoice, handleVisible }) {

    const [signupInfo, setSignupInfo] = useState({ userName: "", email: "", password: "", confirmPassword: "" })
    const [errorInfo, setErrorInfo] = useState({ error: false, message: "no error" })

    function chooseLogin() {
        handleChoice(true)
    }

    function handleUpdate(event) {
        const { name, value } = event.target;
        setSignupInfo((previous) => {
            return { ...previous, [name]: value }
        })

        if (name === "password" || name === "confirmPassword") {
            setErrorInfo(() => { return { error: false, message: "" } })
        }
    }

    function Signup(event) {

        event.preventDefault();

        const { userName, email, password, confirmPassword } = signupInfo

        if (password !== confirmPassword) {
            setErrorInfo(() => { return { error: true, message: "Passwords do not match" } })
        }

        alert(`Registering user ${userName} ${email}`)

        handleVisible(false)
        handleChoice(true)

    }

    return (
        <form className="mb-1" onSubmit={Signup} autoComplete="off">

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Username
                </label>
                <input
                    className="bg-gray-200 shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none 
                    focus:shadow-outline focus:border-indigo-500"
                    type="text"
                    placeholder="Username"
                    size="30"
                    name="userName"
                    value={signupInfo.userName}
                    onChange={handleUpdate}
                    required="true"
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Email
                </label>
                <input
                    className="bg-gray-200 shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none 
                    focus:shadow-outline focus:border-indigo-500"
                    type="email"
                    placeholder="Email"
                    size="30"
                    name="email"
                    value={signupInfo.email}
                    onChange={handleUpdate}
                    required="true"
                />
            </div>

            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Password
                </label>
                <input
                    className="bg-gray-200 shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none 
                focus:shadow-outline focus:border-indigo-500 focus:ring-0"
                    type="password"
                    placeholder="Password"
                    size="30"
                    name="password"
                    value={signupInfo.password}
                    onChange={handleUpdate}
                    required="true"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                />
            </div>

            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Confirm Password
                </label>
                <input
                    className="bg-gray-200 shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none 
                focus:shadow-outline focus:border-indigo-500 focus:ring-0"
                    type="password"
                    placeholder="Password"
                    size="30"
                    name="confirmPassword"
                    value={signupInfo.confirmPassword}
                    onChange={handleUpdate}
                    required="true"
                />
            </div>

            <div className="className=text-sm mb-2 text-red-600">
                {errorInfo.error && <p>{errorInfo.message}</p>}
            </div>

            <p className="text-sm text-gray-700 mb-6">
                Already a user? <div onClick={chooseLogin} className="underline w-36 click-text"> <strong>Login</strong> </div>
            </p>

            <button className="bg-slate-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit">
                Register
            </button>
        </form >
    );
}