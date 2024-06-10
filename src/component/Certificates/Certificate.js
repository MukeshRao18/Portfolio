import React from 'react'
import uniqid from 'uniqid'
import './Certificate.css'
import { certificates } from '../../portfolio'
const Certificate = () => {
  return (
    <div className='section certificate' id="certificates">
      <h2 className='section__title'>Certificates</h2>
      <div className="certificates-container">
        {certificates.map((certificate) => (
          <div
            className="certificate-item"
            key={uniqid()}
            onClick={() => window.location.href = certificate.link}
          >
             <h3 className="certificate-name">{certificate.name}</h3>
            <img src={certificate.image} width="100px" height="100px" alt={certificate.name} className="certificate-name" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Certificate
