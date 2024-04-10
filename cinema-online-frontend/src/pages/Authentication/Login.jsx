import { useState } from "react"

export default function Login({ handleChoice, handleVisible }) {

    const [loginInfo, setLoginInfo] = useState({ userName: "", password: "" })

    function chooseSignup() {
        handleChoice(false)
    }

    function handleUpdate(event) {
        const { name, value } = event.target
        setLoginInfo((previous) => {
            return { ...previous, [name]: value }
        })
    }

    function Login(event) {
        event.preventDefault();
        alert(loginInfo.userName)

    }

    return (
        <form className="mb-12" onSubmit={Login} autoComplete="off">

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
                    value={loginInfo.userName}
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
                    value={loginInfo.password}
                    onChange={handleUpdate}
                    required="true"

                />
            </div>

            <p className="text-sm text-gray-700 mb-6">
                Don't have an account? <div onClick={chooseSignup} className="underline w-36 click-text"> <strong>Sign up</strong> </div>
            </p>

            <button className="bg-slate-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit">
                Login
            </button>
        </form>
    );
}