import React from 'react'
import resumeSS from "../../assets/images/resumescreenshot.png";
import './resume.css';

const resume = () => {
    return (
        <div className="container containerMargin">
            <div className="row">
            <h1 className="text-center mainHeader resumeHeader">
                Resume
                <div className="flex-item imagePadding"><a href="https://docs.google.com/document/d/17EJ1ScWI4leJ3LyXSNLJ4NeY9-wGcixg/edit?usp=sharing&ouid=104705080098949872674&rtpof=true&sd=true">
                <img src={resumeSS} alt="Weather Dashboard SS" className="img-fluid"></img>
                </a>
            </div>
            </h1>
            
            <div className="text-center mainHeader resumeList">
                <p className="skillUnderline">Skills</p>
                <ul>
                    <li><span>HTML</span></li>
                    <li><span>CSS</span></li>
                    <li><span>Javascript</span></li>
                    <li><span>Node.js</span></li>
                    <li><span>Express.js</span></li>
                    <li><span>SQL</span></li>
                    <li><span>Bootstrap</span></li>
                    <li><span>React</span></li>
                    <li><span>MongoDB</span></li>
                    <li><span>Regex</span></li>
                </ul>
            </div>
            </div>
        </div>
    )
}
export default resume;