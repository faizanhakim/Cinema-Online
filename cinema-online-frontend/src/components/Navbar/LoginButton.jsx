export default function LoginButton({ handleVisible }) {

    return (
        <button className="bg-sky-500  hover:bg-sky-700 login-button shadow-xl  hover:transition-colors"
            type="button" onClick={() => handleVisible(true)}>LOGIN</button>
    );
}