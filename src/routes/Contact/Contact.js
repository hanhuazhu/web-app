import './Contact.css';

import {
  FaGithub,
  FaLinkedin,
  FaMobileAlt,
  FaAt
} from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="Contact">
      <h1 className="Contact__header">Let's Chat!</h1>
      <h3 className="Contact__subheader">You can reach me by...</h3>
      <div className="Contact__socials">
        <a
        rel="noreferrer"
        href="https://github.com/hanhuazhu"
        target="_blank">
          <span><FaGithub /></span> Github
        </a>
        <a
        rel="noreferrer"
        href="https://linkedin.com/in/hanhuazhu"
        target="_blank">
          <span><FaLinkedin /></span> Github
        </a>
        <a
        rel="noreferrer"
        href="mailto:zhuhanh@oregonstate.edu"
        target="_blank">
          <span><FaAt /></span> Email
        </a>  
        <a
        rel="noreferrer"
        href="tel:541-639-5059"
        target="_blank">
          <span><FaMobileAlt /></span> Phone
        </a>
      </div>
    </div>
  );
}

export default Contact;