import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import { Profile } from '../../portfolio';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div 
      id="contact" 
      className="Profile_section"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="profile" variants={itemVariants}>
        <img src={Profile} alt="Mukesh Kumar" width="300" height="400" className="image" />
      </motion.div>
      <motion.div className="details" variants={itemVariants}>
        <motion.div className="hire" variants={itemVariants}>
               <h3><span className="dot"></span> Available now for work </h3>
        </motion.div>
        <motion.div className="description" variants={itemVariants}>
          I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with React, Web Development, UI/UX, and Open Source Development.
        </motion.div>
        <motion.div className="social-media" variants={itemVariants}>
          <a href="https://www.linkedin.com/in/mukesh-kumar-b-474714200/"  className='link link--icon social'>
            <LinkedInIcon />
          </a>
          <a href="https://github.com/MukeshRao18"  className='link link--icon social'>
            <GitHubIcon />
          </a>
          <a href="https://www.facebook.com/munna.brikur.10"  className='link link--icon social'>
            <FacebookIcon />
          </a>
          <a href="mailto:kumarbeerkoor@gmail.com"  className='link link--icon social'>
            <EmailIcon />
          </a>
          <a href="https://www.instagram.com/_mukesh_rao___/"  className='link link--icon social'>
            <InstagramIcon />
          </a>
        </motion.div>
        <motion.div className="visit" variants={itemVariants}>
          <span type='button' className='btn rounded btn--outline'>
            Resume
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Contact;
