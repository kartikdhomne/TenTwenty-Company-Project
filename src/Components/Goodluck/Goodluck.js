import React from 'react';
import './Goodluck.css';
import { useNavigate } from "react-router-dom";

export default function Goodluck() {

  const navigate = useNavigate()

  return (
    <div className='goodluck'>
      <div className="navbar">
        <h2>tentwenty</h2>
      </div>
      <div className="txt_area_7">
        <div className="text_field_7">
          <div className='greet_7'>good luck! 💪</div>
          <div className='main_txt_7'>We're looking forward to your submission.<br /> Good luck with the assessment and keep <br />on rocking!</div>
        </div>
        <div className="bottom_7">
          <h4 className="link_7" onClick={() => navigate('/Requirement')}><u>Previous</u></h4>
          <h4 className="link-7">Assessment done? Submit your work via email to us &nbsp;✉️</h4>
        </div>
      </div>
    </div>
  )
}
