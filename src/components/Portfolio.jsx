import { useState } from 'react';
import { portfolioList } from '../data/DataPortfolio';
import { Link } from 'react-router-dom';
import '../styles/Portfolio.css';

function Portfolio() {
    const [loading, setLoading] = useState(true);

    return (
        <section id="portfolio">
            <div className="wrapper">
                <h3>Portfolio</h3>
                {loading && <p>Loading...</p>} {/* Loading state */}
                <div className="grid">
                    {
                        portfolioList.map((item) => {
                            return (
                                <div className="item" key={item.id}>
                                    <Link to={`/portfolio/${item.id}`}>
                                        <img 
                                            src={item.image} 
                                            onLoad={() => setLoading(false)} // Set loading to false when image loads
                                            onError={() => setLoading(false)} // Handle image load error
                                            alt={item.title} // Add alt text for accessibility
                                        />
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default Portfolio;