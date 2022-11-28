import './Footer.css';

import {
  FaGithub,
  FaLinkedin,
  FaRegCopyright,
  FaMobileAlt,
  FaAt
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="Footer">
      <p className="Footer__copyright">
        Copyright <FaRegCopyright /> 2022
      </p>
      <p className="Footer__credit">
        Created by Han Zhu
      </p>
      <div className="Footer__socials">
        <a
        rel="noreferrer"
        href="https://github.com/hanhuazhu"
        target="_blank">
          <FaGithub />
        </a>
        <a 
        rel="noreferrer"
        href="https://linkedin.com/in/hanhuazhu"
        target="_blank">
          <FaLinkedin /> 
        </a>  
        <a 
        rel="noreferrer"
        href="mailto:zhuhanh@oregonstate.edu"
        target="_blank">
          <FaAt /> 
        </a>  
        <a 
        rel="noreferrer"
        href="tel:541-639-5059"
        target="_blank">
          <FaMobileAlt /> 
        </a>  
      </div>
    </footer>
  );
}

export default Footer;