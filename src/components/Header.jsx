import profilePicture from '../assets/lll.jpg'
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import '../styles/Header.css'
function Header() {
    return (
        <header id='header'>
            <div className="header-jumbotron">
                <img src={profilePicture} className="profile-picture" alt="Kelvin Tanadi" />
                <h3>Kelvin Tanadi</h3>
                <p className='location'>Bekasi, Indonesia</p>
                <p className='typing-effect'>Programmer - Web Developer</p>
                <div className='socialMedia'>
                    <a href="https://github.com/tanadi96" target="_blank" rel="noopener noreferrer" title="GitHub">
                        <FaGithub />
                    </a>
                    <a href="https://linkedin.com/in/kelvin-tanadi" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                        <FaLinkedin />
                    </a>
                    <a href="mailto:kelvintanadi96@gmail.com" title="Email">
                        <FaEnvelope />
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header