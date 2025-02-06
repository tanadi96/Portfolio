import { SiGmail } from 'react-icons/si';
import '../styles/Footer.css';
import { FaGithub, FaLinkedin} from "react-icons/fa";

function Footer() {
    return (
        <footer>
            <p>&copy; 2024 Kelvin Tanadi</p>
            <div className="social-icons">
                <a href="https://github.com/tanadi96" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/kelvin-tanadi96/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="mailto:tanadi96@gmail.com?subject=Hello&body=I%20wanted%20to%20reach%20out!" target="_blank" rel="noopener noreferrer">
                    <SiGmail />
                </a>
            </div>
        </footer>
    );
}

export default Footer;