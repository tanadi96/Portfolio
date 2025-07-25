import '../styles/About.css';
import { FaHtml5, FaReact, FaBootstrap, FaGit, FaWordpress, FaDownload } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { SiTypescript, SiMongodb, SiSequelize } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import CV_File from '../assets/KelvinTanadi_CV.pdf';

function About() {
    return (
        <section id="about">
            <div className='wrapper'>
                <h3>About</h3>
                <p>
                    I am a dedicated Full-Stack JavaScript Developer with two years of experience as a QC Foreman and six months in R&D. I possess strong leadership skills and a passion for innovation, ready to contribute to tech-driven roles.
                </p>
                <p>
                    With expertise in technologies such as Node.js, Express.js, React, React Native, Next.js, TypeScript, and GraphQL, I specialize in building impactful web and mobile applications. My focus is on creating scalable, user-centered solutions that deliver a seamless experience.
                </p>
                
                <div className="cv-download">
                    <a href={CV_File} download="KelvinTanadi_CV.pdf" className="cv-button">
                        <FaDownload /> Download CV
                    </a>
                </div>
                <h4>Programming Language & Tools</h4>
                <div className="skills">
                    <FaHtml5 title="HTML5" />
                    <SiJavascript title="JavaScript" />
                    <FaReact title="React" />
                    <RiNextjsFill title="Next.js" />
                    <FaBootstrap title="Bootstrap" />
                    <RiTailwindCssFill title="Tailwind CSS" />
                    <SiTypescript title="TypeScript" />
                    <FaWordpress title="WordPress" />
                    <FaGit title="Git" />
                    <SiMongodb title="MongoDB" />
                    <BiLogoPostgresql title ="PostgreSQL" />
                    <SiSequelize title="Sequelize" />
                </div>
            </div>
        </section>
    );
}

export default About;