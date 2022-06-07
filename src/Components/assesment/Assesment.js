import React from 'react';
import './Assesment.css';
import Rectangle4 from './Rectangle (4).png';
import { useNavigate } from "react-router-dom";

export default function Assesment() {

  const navigate = useNavigate()

  return (
    <div className='assesment'>

      <div className="txt-area_5">

        <div className='img_5'>
          <img src={Rectangle4} alt="img" />
        </div>

        <div className="navbar">
          <h2 className='nav'>tentwenty</h2>
        </div>

        <div className="text_field_5">

          <div className='greet_5'>the assessment</div>

          <div class="main-txt_5">We understand everyone is unique. You might be in a different <br />
            stage of your careerpath. Therefore we've created two types of <br />
            assessments. You can choose yourself which one you would like to <br />
            take. You might not be able to complete the assessment in the <br />
            given timespan, but let's see how far you can get : </div>

          <div className="mid_5">
            <h4>I'm competent</h4>
            <h1 className='big'><u>let's get started</u></h1>
          </div>

          <div className="days">
            <p className='day'>1-2 days</p>
          </div>

          <div className="bottom_5">
            <h4 className='link_5' onClick={() => navigate('/Steps')}><u>Previous</u></h4>
            <h4 className='link-5' onClick={() => navigate('/Requirement')}><u>See the Deliverable Requirements</u></h4>
          </div>

        </div>
      </div>

    </div>
  )
}
