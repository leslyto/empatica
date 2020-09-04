import React from "react";
import globeIcon from './images/globe.png'

const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
const isMobile = vw < 768

const Footer = () => {
  return (
    <footer>
      <div className="footer-links">
        {isMobile && (
          <div className="lang">
            <img src={globeIcon} alt="globe-icon" width={36} height={36} />
            <p>English US</p>
          </div>
        )}
        <a href="https://www.empatica.com/en-int/company/">Company</a>
        <a href="https://www.empatica.com/en-int/careers/">Careers</a>
      </div>
      <h3>Copyright © 2020 Empatica Inc. - ISO 13485 Cert. No. 9124.EPTC - All rights reserved</h3>
    </footer>
  );
};

export default Footer;
