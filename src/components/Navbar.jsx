import { useState, useEffect } from 'react';
import '../styles/Navbar.css';
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

function Navbar() {
    const [statusTampil, setStatusTampil] = useState('');
    const [scrolled, setScrolled] = useState(false);

    function tampilMenu() {
        setStatusTampil(statusTampil === '' ? 'tampil' : '');
    }

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={scrolled ? 'scrolled' : ''}>
            <div className="wrapper">
                <div className="logo">
                    <HashLink to="/#header" smooth>Kelvin's Portfolio</HashLink>
                </div>
                <button onClick={tampilMenu}>
                    {statusTampil === '' ? (<FaBars />) : (<IoMdClose />)}
                </button>
                <div className={`menu ${statusTampil}`} onClick={tampilMenu}>
                    <ul>
                        <li><HashLink to="/#portfolio" smooth>Portfolio</HashLink></li>
                        <li><HashLink to="/#about" smooth>About</HashLink></li>
                        <li><Link to="/experience">Experience</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;