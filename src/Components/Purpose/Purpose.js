import React from 'react';
import './Purpose.css'
import Rectangle3 from './Rectangle (3).png';
import { useNavigate } from "react-router-dom";

export default function Purpose() {

  const navigate = useNavigate()

  return (
    <div className='purpose'>

      <div className="right-corner">

        <img className="img_1" src={Rectangle3} alt="" />
        <div className="navbar">
        <h2 className="nav_3">tentwenty</h2>
        </div>

        <div className="left-corner">
          <div className='greet_3'>why are <br /> you here?</div>
        </div>

        <div class="main-txt_3">Now that we have taken the first step we would like to put your <br />
          development skills to the test. What sets you apart from others? <br />
          This document will guide your through the steps of the front-end <br />
          developer assessment. In case of any questions, don't hesitate to <br />
          get in touch with us (email/ call).</div>

        <div className="bottom_3">
          <h4 className='link_3' onClick={() => navigate('/About')}><u>Previous</u></h4>
          <h4 className='link-3' onClick={() => navigate('/Steps')}><u>Next Page</u></h4>
        </div>
        
      </div>
    </div>
  )
}
