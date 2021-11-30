import React from 'react'
import './footer.css';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { BsStackOverflow } from 'react-icons/bs';


const footer = () => {
    return(

        <footer>
            <div className="row footerRow">
            <div className="col-xs footerCol">
                <h3 className="footerButtons"><a href="mailto:micah41224@gmail.com" target="_blank"> <FaEnvelope className="icons"/></a></h3>
            </div>
            <div className="col-xs footerCol">
                <h3 className="footerButtons"><a href="https://github.com/micah41224" target="_blank"> <FaGithub className="icons"/></a></h3>
            </div>
            <div className="col-xs footerCol">
                <h3 className="footerButtons"><a href="https://www.linkedin.com/in/michael-feldman87/" target="_blank"><FaLinkedin className="icons"/></a></h3>
            </div>
             <div className="col-xs footerCol">
                <h3 className="footerButtons"><a href="https://stackoverflow.com/users/16086306/michaelfeldman" target="_blank"> <BsStackOverflow className="icons"/></a></h3>
            </div>
            </div>

            </footer>
    )
}





export default footer 