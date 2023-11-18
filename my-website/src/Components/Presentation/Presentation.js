import './index.css'

export default function Footer() {
    return(
        <div id="home" className="presentation">
            <div className="presentation-text">
                <div className="text-box">
                    <p className="text"><b className="hi">Hi</b>, I'm<span className="name2"> Guilherme</span> Faria</p>
                    <p className="from"> from Portugal.</p>
                    <p className="job">Software Developer</p>
                </div>
            </div>
            <div className="presentation-image">
                <img className="image" src={require("../../Assets/trajado.JPG")} alt="Guilherme Faria"></img>
            </div>
        </div>
    );
}