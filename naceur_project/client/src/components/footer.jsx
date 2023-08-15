import React from 'react'
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Naceur Abdlhamid</h1>
                <p> AI/Machine Learning Developer</p>

                <ul className="footer__list">
                    <li>
                        <Link to="/" className="footer__link">Home</Link>
                    </li>
                    <li>
                        <Link to="#skills" className="footer__link">Skills</Link>
                    </li>
                    <li>
                        <Link to="#projects" className="footer__link">Projects</Link>
                    </li>
                </ul>

                <ul className="footer__social">
                    <Link to="www.linkedin.com/in/abdelhamid-naceur" target="_blank" className="footer__social-link">
                        <i className="ri-linkedin-box-line"></i>
                    </Link>

                    <Link to="https://www.youtube.com/channel/UC9GZ1TqZ_rwD-ObDossuZtg" target="_blank" className="footer__social-link">
                        <i className="ri-youtube-line"></i>
                    </Link>

                    <Link to="https://api.whatsapp.com/send?phone=0021656061075&text=Hello, more information!" target="_blank" className="footer__social-link">
                        <i className="ri-whatsapp-line"></i>
                    </Link>

                </ul>

                <span className="footer__copy">
                    &#169; Copyright nourdeouich159@gmail.com. All rights reserved
                </span>
            </div>
        </footer>
  )
}

export default Footer