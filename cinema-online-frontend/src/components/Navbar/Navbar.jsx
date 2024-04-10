import { NavLink } from "react-router-dom"
import { useState } from "react"

import Link from "./Link"
import SearchBar from "./Searchbar";
import LoginButton from "./LoginButton";
import AuthenicationBox from "../../pages/Authentication/AuthenticationBox";

export default function Navbar() {

    const [loginClick, setLoginClick] = useState(false);

    function handleVisible(show) {
        setLoginClick(show)
    }


    return (
        <div>
            <nav className="bg-slate-600 p-4">
                <div className="container mx-auto flex justify-start items-center">
                    <div className="text-white font-bold title"><NavLink to={'/home'}>OCinema</NavLink></div>
                    <div className='links'>
                        <ul className="flex justify-center items-center">
                            <Link to="/home" name="Home" />
                            <Link to="/home" name="Movies" />
                            <Link to="/home" name="Wishlist" />
                        </ul>
                    </div>
                    <SearchBar />
                    <LoginButton handleVisible={handleVisible} />
                    <AuthenicationBox visible={loginClick} handleVisible={handleVisible} />
                </div>
            </nav>
        </div>
    );
}