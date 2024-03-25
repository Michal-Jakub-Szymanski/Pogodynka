import NavbarButton from "./NavbarButtonComponent";

const Navbar = () => {
    return(<div>
        <ul>
            <NavbarButton text="Homepage" linkTo="/"/>
            <NavbarButton text="Quiz" linkTo="/quiz"/>
            <NavbarButton text="How to play" linkTo="/how-to-play"/>
        </ul>
    </div>)
}

export default Navbar;