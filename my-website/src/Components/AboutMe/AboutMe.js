import "./index.css";
import { useState } from "react";

export default function AboutMe() {

    const [tab, setTab] = useState("");
    const [isSkillsActive, setIsSkillsActive] = useState(true);
    const [isTechActive, setIsTechActive] = useState(false);
    const [isEdActive, setIsEdActive] = useState(false);

    const handleSkills = () => {
        setTab("");
        setIsSkillsActive(true);
        setIsTechActive(false);
        setIsEdActive(false);
    }

    const handleTechnologies = () => {
        setTab("technologies");
        setIsTechActive(true);
        setIsSkillsActive(false);
        setIsEdActive(false);
    }

    const handleEducation = () => {
        setTab("education");
        setIsEdActive(true);
        setIsTechActive(false);
        setIsSkillsActive(false);
    }
    

    return(
        <>
        <div id="cenas" className="about-me">
            <div className="about-image">
                <img className="image1" src={require("../../Assets/IMG_8050.jpg")} alt="Guilherme Faria"></img>
            </div>
            <div className="about-text">
                <div className="text1">
                    <h1 className="AboutMe">About Me</h1>
                    <p className="description">
                        I'm 21 years old and I'm currently in the first year of my Master's Degree
                        in Computer Engineering at the University of Coimbra.
                        <br></br>
                        I'm also a Junior Software Developer at <a href="https://jeknowledge.pt/">jeKnowledge</a>, a Junior Enterprise from FCTUC,
                        where I've been working on several projects, with real clients, doing Web and Mobile development. 
                    </p>
                </div>
                <div className="skills">
                    <div className="skills-title">
                        <h3 className={isSkillsActive ? "skills-title-text-active": "skills-title-text"} onClick={handleSkills}>Soft Skills</h3>
                        <h3 className={isTechActive ? "skills-title-text-active": "skills-title-text"} onClick={handleTechnologies}>Technologies</h3>
                        <h3 className={isEdActive ? "skills-title-text-active": "skills-title-text"} onClick={handleEducation}>Education</h3>
                    </div>
                    <div className="skills-content">
                        {tab === "" && (
                            <ul className="skills-list">
                                <li className="skills-item">Teamwork</li>
                                <li className="skills-item">Communication</li>
                                <li className="skills-item">Problem Solving</li>
                                <li className="skills-item">Adaptability</li>
                                <li className="skills-item">Leadership</li>
                                <li className="skills-item">Sense of Humor</li>
                            </ul>
                        )}
                        {tab === "technologies" && (
                            <ul className="skills-list">
                                <li className="skills-item">Java</li>
                                <li className="skills-item">C</li>
                                <li className="skills-item">Python / Django</li>
                                <li className="skills-item">HTML</li>
                                <li className="skills-item">CSS</li>
                                <li className="skills-item">Javascript</li>
                                <li className="skills-item">React</li>
                                <li className="skills-item">React Native</li>
                                <li className="skills-item">SQL</li>
                            </ul>
                        )}
                        {tab === "education" && (
                            <ul className="skills-list">
                                <li className="skills-item">High School - Ended in 2020</li>
                                <li className="skills-item">Bachelor's Degree in Computer Engineering - Ended in 2023</li>
                                <li className="skills-item">Master's Degree in Computer Engineering - present</li>
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}