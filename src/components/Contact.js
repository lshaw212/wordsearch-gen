import React from 'react';
import GithubLogo from '../images/github.png';

const Contact = () => (
  <div id="contact-container">
    <div id="website-link">Project by <a href="https://lewisshaw.dev" target="_blank" rel="noopener noreferrer">Lewis Shaw</a> 2020</div>
    <a href="https://github.com/lshaw212/wordsearch-gen" target="_blank" rel="noopener noreferrer"><img src={GithubLogo} id="github-logo" alt=''/></a>
  </div>
)

export default Contact;