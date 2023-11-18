import React from "react";
import "./index.css";
import Homepage from "../../Pages/Homepage/Homepage";


export default function Navbar() {

    const goToHome = () => {
        let home = document.getElementById("home");
        home.scrollIntoView({behavior: "smooth"});
    }

    const goToAboutMe = () => {
        let about = document.getElementById("about");
        about.scrollIntoView({behavior: "smooth"});
    }

    const goToContacts = () => {
        let contacts = document.getElementById("contacts");
        contacts.scrollIntoView({behavior: "smooth"});
    }


    return (
        <nav className="navbar">
            <div className="logo">
                <span className="name">Guilherme</span><span className="dot">.</span>
            </div>
            <div className="items">
                <div><a className="home" onClick={goToHome}>Home</a></div>
                <div><a className="about" onClick={goToAboutMe}>About me</a></div>
                <div><a className="contact" onClick={goToContacts}>Contacts</a></div>
            </div>
        </nav>
    );
}