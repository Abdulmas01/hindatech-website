import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
const Nav = () => {
    const [IsActive, setIsActive] = useState({ showDialog: false, currentpage: 0 });
    const navigator = useNavigate()
    function setActive(index) {
        setIsActive({ showDialog: !IsActive.showDialog, currentpage: index });
    }
    function closeDialog() {
        setIsActive({ ...IsActive, showDialog: !IsActive.showDialog })
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
            <div className="nav-container">
                <div className="logo">
                    HindaTech
                </div>
                <ul className={`nav-links ${IsActive.showDialog && 'active'}`}>
                    <li className={`${IsActive.currentpage === 0 && "active-page"}`} onClick={() => setActive(0)}><NavLink to={"/"} >Home</NavLink></li>
                    <li className={`${IsActive.currentpage === 1 && "active-page"}`} onClick={() => setActive(1)}><NavLink to={"/download"}>Apps</NavLink></li>
                    <li className={`${IsActive.currentpage === 2 && "active-page"}`} onClick={() => setActive(2)}><NavLink to={"/services"}>Services</NavLink></li>
                    <li className={`${IsActive.currentpage === 3 && "active-page"}`} onClick={() => ContactUs()}><NavLink >Contact</NavLink></li>
                </ul>
                <div onClick={closeDialog} className="burger-menu">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
        </nav>
    )
}

export default Nav