import React from 'react';
import { Link } from 'react-router-dom';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import './footer.styles.scss';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='content'>
        <div className='options'>
          <div className='heading'>About</div>
          <About />
        </div>
        <div className='options'>
          <div className='heading'>Quick Links</div>
          <QuickLinks />
        </div>

        <div className='options'>
          <div className='heading'>Contact Developer</div>
          <DeveloperContact />
        </div>
      </div>
      <div className='cp-signature'>
        <span>&#9400; OPENSOURCE PROJECT</span>
      </div>
    </div>
  );
};

const QuickLinks = () => (
  <React.Fragment>
    <Link className='option' to='/'>
      Shop
    </Link>
    <Link className='option' to='/checkout'>
      Cart
    </Link>
  </React.Fragment>
);

const About = () => (
  <div className='about'>
    React E-Store is a web app developed with React Hooks and the Context API as
    a part of Bootcamp 2020.
  </div>
);

const DeveloperContact = () => (
  <React.Fragment>
    <span className='option'>Muhammad Usman Tariq</span>
    <address className='option'>
      <a href='mailto:usmantariq65@outlook.com'> usmantariq65@outlook.com </a>
    </address>
    <div className='contact-icons'>
      <a className='icon' href='https://github.com/usman64'>
        <GitHubIcon />
      </a>
      <a
        className='icon'
        href='https://www.linkedin.com/in/muhammad-usman-tariq-454579a4/'
      >
        <LinkedInIcon />
      </a>
    </div>
  </React.Fragment>
);

export default Footer;
