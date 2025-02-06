import profilePicture from '../assets/lll.jpg'
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

import '../styles/Header.css'
function Header() {
    return (
        <header id='header'>
            <div className="header-jumbotron">
                <img src={profilePicture} className="profile-picture" />
                <h3>Kelvin Tanadi</h3>
                <p className='location'>Bekasi, Indonesia</p>
                <p className='typing-effect'>Programmer - Web Developer</p>
                <div className='socialMedia'>
                   
                </div>
            </div>
        </header>
    )
}

export default Header