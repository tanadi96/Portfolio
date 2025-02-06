import { useParams, Navigate } from "react-router-dom";
import '../styles/DetailPortfolio.css';
import { portfolioList } from '../data/DataPortfolio';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { useState } from 'react';

function DetailPortfolio() {
    const { id } = useParams();
    const data = portfolioList.find((item) => item.id === id);
    const [loading, setLoading] = useState(true);

    if (data == undefined) {
        return <Navigate to='/page-not-found' />;
    }

    return (
        <>
            <Navbar />
            <section id="detail-portfolio">
                <div className="wrapper">
                    <h1>{data.title}</h1>
                    {loading && <p>Loading image...</p>} {/* Loading state */}
                    <img 
                        src={data.image} 
                        onLoad={() => setLoading(false)} // Set loading to false when image loads
                        onError={() => setLoading(false)} // Handle image load error
                        alt={data.title} // Add alt text for accessibility
                    />
                    <p className="skill"><b>Skills:</b> {data.skill}</p>
                    {data.deploy && <a href={data.deploy} target="_blank" rel="noreferrer">Link</a>}
                </div>
            </section>
            <Footer />
            <ScrollToTop />
        </>
    );
}

export default DetailPortfolio;