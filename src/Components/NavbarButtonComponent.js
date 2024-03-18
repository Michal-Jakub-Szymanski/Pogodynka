import { Link } from "react-router-dom";

const NavbarButton = (props) => {
    return(
        <li><Link to={props.linkTo}>{props.text}</Link></li>
    )
}

export default NavbarButton;