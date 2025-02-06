import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { RiNextjsFill } from "react-icons/ri";
import { FaVuejs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'



function Experience() {
    return (
        <>
            <Navbar />
            <div className="wrapper">
                <h1>Experience</h1>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="July 2024 - November 2024"
                        iconStyle={{ background: '#222831', color: '#fff' }}
                        icon={<RiNextjsFill />}
                    >
                        <h3 className="vertical-timeline-element-title">Hacktiv8</h3>
                        <h4 className="vertical-timeline-element-subtitle">Jakarta</h4>
                        <p>
                            As student in Hacktiv8, I learn about Full Stack Web Development, and I learn about HTML, CSS, JavaScript, React, Node.js, Express.js, and MongoDB.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2020 - 2022"
                        iconStyle={{ background: '#222831', color: '#fff' }}
                        icon={<FaVuejs />}
                    >
                        <h3 className="vertical-timeline-element-title">Foreman QC</h3>
                        <h4 className="vertical-timeline-element-subtitle">PT. Fajar Surya Wisesa, Tbk</h4>
                        <p>
                            - Doing raw material test, make a prototype of product samples and check physical properties of prototype samples
                        </p>
                        <p>
                        - Check physical properties of product samples
                        </p>
                        <p>
                        - Make daily, weekly and monthly reports
                        </p>
                    </VerticalTimelineElement>
                    {/* <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2021 - 2022"
                        iconStyle={{ background: '#222831', color: '#fff' }}
                        icon={<FaReact />}
                    >
                        <h3 className="vertical-timeline-element-title">Front End Engineer</h3>
                        <h4 className="vertical-timeline-element-subtitle">dirumahrafif Corporation</h4>
                        <p>
                            Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2020 - 2021"
                        iconStyle={{ background: '#222831', color: '#fff' }}
                        icon={<FaLaravel />}
                    >
                        <h3 className="vertical-timeline-element-title">Front End Engineer</h3>
                        <h4 className="vertical-timeline-element-subtitle">dirumahrafif Corporation</h4>
                        <p>
                            Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                        </p>
                    </VerticalTimelineElement> */}
                </VerticalTimeline>
            </div>
            <Footer />
            <ScrollToTop />
        </>
    )
}

export default Experience