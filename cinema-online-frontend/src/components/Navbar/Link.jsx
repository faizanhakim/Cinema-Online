import { NavLink } from "react-router-dom";

export default function Link(props) {
    const linkTo = props.to;
    const linkName = props.name

    return (
        <li className="mr-6 hover:font-bold hover:shadow-lg"><NavLink to={linkTo}>{linkName}</NavLink></li>
    );
}