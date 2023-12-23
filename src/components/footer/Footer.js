import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
          <h1 className="footer__title">Harshvardhan</h1>

          <ul className="footer__list">
            <li>
              <a href="#about" className="footer__link">About</a>
            </li>

            <li>
              <a href="#skills" className="footer__link">Skills</a>
            </li>

            <li>
              <a href="#contact" className="footer__link">Contact</a>
            </li>
          </ul>

          <div className="footer__social">
            <a href="https://www.twitter.com/Harshvardhan123" className="footer__social-link" target="_blank">
                <i class="bx bxl-twitter"></i>
            </a>

            <a href="https://www.instagram.com/hvs_harshvardhan21?igsh=N2Z6aWVoeWFhMGFm&utm_source=qr" className="footer__social-link" target="_blank">
                <i class="bx bxl-instagram"></i>
            </a>

            <a href="https://www.linkedin.com/in/harshvardhan-sharma-88b414256" className="footer__social-link" target="_blank">
                <i class="bx bxl-linkedin-square"></i>
            </a>
          </div>

          <span className="footer__copy">&#169; HarshvardhanSharma. All Rights Reserved</span>
      </div>
    </footer>
  )
}

export default Footer