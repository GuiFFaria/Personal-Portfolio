import React from "react";
import "./index.css";


export default function Navbar() {

    return (
        <nav className="navbar">
            <div className="logo">
                <span className="name">Guilherme</span><span className="dot">.</span>
            </div>
            <div className="items">
                <div><a className="home" href="#cenas1">Home</a></div>
                <div><a className="about" href="#cenas">About me</a></div>
                <div><a className="contact" href="#about">Contacts</a></div>
            </div>
        </nav>
    );
}