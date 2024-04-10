import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react"

import Login from "./Login"
import Signup from './Signup';

export default function AuthenicationBox({ visible, handleVisible }) {

    //true - login / false - signup
    const [choice, setChoice] = useState(true)

    function closeBox() {
        handleVisible(false)
    }

    function handleChoice(value) {
        setChoice(value)
    }

    return (visible &&
        (<div className="absolute w-full h-full inset-0 bg-opacity-20 backdrop-blur-sm">
            <div className="bg-slate-500  rounded-md authentication-box fadeIn-animation">
                <button className="text-black relative rounded-md shadow-md hover:text-white 
                hover:bg-slate-300 hover:transition-colors close-button"
                    onClick={closeBox}><CloseIcon /></button>

                <div className="bg-slate-200 relative flex justify-center items-center authentication-container 
                shadow-md rounded">
                    {choice ? <Login handleChoice={handleChoice} handleVisible={closeBox} />
                        : <Signup handleChoice={handleChoice} handleVisible={closeBox} />}
                </div>

            </div>
        </div>)
    );
}