import "./index.css";

export default function AboutMe() {
    return (
        <div id="contacts" className="footer">
            <h1 className="title">Contact Me</h1>
            <div className="contact-box">
                <div className="contacts">
                    <div className="email">
                        <img className="aviao" src={require("../../Assets/aviao-de-papel.png")}></img>
                        <p className="email-text">guifaria02@gmail.com</p>
                    </div>
                    <div className="phone">
                        <img className="telemovel" src={require("../../Assets/telemovel.png")}></img>
                        <p className="phone-text">+351 961480231</p>
                    </div>
                </div>
                <div className="socials">
                    <div className="linkedin">
                        <a href="https://www.linkedin.com/in/guilhermeffaria/"><img className="linkedin-icon" src={require("../../Assets/linkedin.png")}></img></a>
                    </div>
                    <div className="github">
                        <a href="https://github.com/GuiFFaria"><img className="github-icon" src={require("../../Assets/github.png")}></img></a>
                    </div>
                    <div className="instagram">
                        <a href="https://www.instagram.com/gui_faria02/"><img className="instagram-icon" src={require("../../Assets/instagram.png")}></img></a>
                    </div>
                    <div className="twitter">
                        <a href="https://twitter.com/guiffaria02"><img className="twitter-icon" src={require("../../Assets/twitter.png")}></img></a>
                    </div>
                </div>
            </div>
        </div>
    );
}