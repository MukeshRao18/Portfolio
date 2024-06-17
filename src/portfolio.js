
import meta from './assests/s.svg'
import html from './assests/html.png'
import css from './assests/css-3.png'
import js from './assests/js.png'
import rea from './assests/atom.png'
import boot from './assests/bootstrap.png'
import g from './assests/social.png'
import gh from './assests/code.png'
import sql from './assests/sql.png'
import redux from './assests/Redux.png'
import socket from './assests/Socket.io.png'
const header = {
    homepage: 'vjfyfjv',
    title: 'Portfolio.',
  }
  
  const about = {
    
    name: 'Mukesh Kumar',
    role: 'Front End Engineer',
    description:
      "As a Junior Front-End Developer, I have strong skills in HTML, CSS, JavaScript, React, Bootstrap, and more. I love creating interactive websites and I'm focused on becoming an expert in React. I'm excited to work on real projects and want to build solutions that improve user experiences.",
    resume: 'file:///C:/Users/bmuke/Downloads/Mukesh-Resume2.pdf',
    social: {
      linkedin: 'https://www.linkedin.com/in/mukesh-kumar-b-474714200/',
      github: 'https://github.com/MukeshRao18',
    },
  }
  
  const projects = [
   
    {
      name: 'TUBESUMM - YouTube Transcript Summarizer',
      description:
        "TUBESUMM, a Chrome extension for YouTube, offers concise video transcript summaries. It uses Node.js, Express.js, YouTube Transcript API, and Hugging Face Summarization API for precise segment summaries.",
      stack: ['HTML', 'CSS', 'JavaScript','React.js', 'Node.js', 'Express.js'],
      sourceCode: 'https://github.com/MukeshRao18/TubeSumm-Extension', 
      livePreview: 'https://github.com/MukeshRao18/TubeSumm-Extension', 
    },
    {
      name: 'WorksHub - Workshop Registration Platform',
      description:
        'Workshub simplifies workshop registration for college students via seamless Paytm integration. Admin can easily add workshops, while students benefit from streamlined enrollment and payment processes.',
      stack: ['Node.js', 'Express.js', 'Firebase', 'React.js', 'Paytm'],
      sourceCode: 'https://github.com/your-github-repo', 
      livePreview: 'https://workshub.example.com',
    },
    {
      name: 'Blood Bond Society',
      description:
        "The Blood Bond Society app connects blood donors with recipients, enabling easy registration, matching, and notifications for urgent blood needs, fostering a supportive donation community.",
      stack: ['Streamlit', 'Python', 'MongoDB'],
      sourceCode: 'https://github.com/MukeshRao18/BloodBond-Society',
      livePreview: 'https://bloodbondsociety.streamlit.app',
    },
    {
      name: 'Chat Application',
      description:
        "The React chat app with Socket.io connects users in real-time, facilitating seamless communication through instant messaging, notifications, and user presence tracking.",
      stack: ['React.JS', 'Socket.io', 'CSS','Redux'],
      sourceCode: 'https://github.com/MukeshRao18/Chat-Appllication-Using-React.js',
      livePreview: 'https://github.com',
    },
    
    
  ]
  
  const skills = [
    `${html}`,
    `${css}`,
    `${js}`,
    `${boot}`,
    `${rea}`,
    `${g}`,
    `${gh}`,   
    `${sql}`,
    `${redux}`,
    `${socket}`,
  ]
  
  const contact = {
    email: 'b.mukesh7989@gmail.com',
  }
 const certificates=[
  {
    name:'React Basics',
    link:'https://www.coursera.org/account/accomplishments/certificate/L3BRKUXK9734',
    image:`${meta}`,
  },{
    name:'Advanced React',
    link:' https://www.coursera.org/account/accomplishments/certificate/8EDSTWXTSKZM',
    image:`${meta}`,
  },{
    name:'JavaScript',
    link:' https://www.coursera.org/account/accomplishments/certificate/6SNCTUCD6ZN4',
    image:`${meta}`,
  },{
    name:'HTML & CSS',
    link:' https://www.coursera.org/account/accomplishments/verify/9YGK8VUNBWUM',
    image:`${meta}`,
  },
 ]
  
  export { header, about, projects, skills, contact,certificates}