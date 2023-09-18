import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
const Nav = () => {
    const [IsActive, setIsActive] = useState({ showDialog: false, currentpage: 0 });
    const navigator = useNavigate()
    function setActive(index) {
        setIsActive({ showDialog: !IsActive.showDialog, currentpage: index });
    }
    function ContactUs() {
        if (window.location.pathname !== "/") {
            navigator("/contactUs");
        }
        else { window.scrollTo(0, document.body.scrollHeight); }
        setActive(3)
    }

    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                    HindaTech
                </div>
                <ul className={`nav-links ${IsActive.showDialog && 'active'}`}>
                    <li onClick={() => setActive(0)}><NavLink to={"/"} >Home</NavLink></li>
                    <li onClick={() => setActive(1)}><NavLink to={"/download"}>Apps</NavLink></li>
                    <li onClick={() => setActive(2)}><NavLink to={"/services"}>Services</NavLink></li>
                    <li onClick={() => ContactUs()}><NavLink >Contact</NavLink></li>
                </ul>
                <div onClick={setActive} className="burger-menu">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
        </nav>
    )
}

export default Nav