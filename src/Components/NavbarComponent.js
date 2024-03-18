import NavbarButton from "./NavbarButtonComponent";

const Navbar = () => {
    return(<>
        <ul>
            <NavbarButton text="Homepage" linkTo="/homepage"/>
            <NavbarButton text="Quiz" linkTo="/quiz"/>
            <NavbarButton text="How to play" linkTo="/how-to-play"/>
        </ul>
    </>)
}

export default Navbar;