import AboutMe from "../../Components/AboutMe/AboutMe";
import Navbar from "../../Components/Navbar/Navbar";
import Presentation from "../../Components/Presentation/Presentation";
import Footer from "../../Components/Footer/Footer";
import "./Homepage.css";

export default function Homepage() {
    return(
        <>
            <Navbar/>
            <div className="page">
                <Presentation/>
                <AboutMe/>
                <Footer/>
            </div>
        </>
    );
}