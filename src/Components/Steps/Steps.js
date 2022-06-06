import React from 'react';
import './Steps.css';
import { useNavigate } from "react-router-dom";

export default function Steps() {

  const steps = [
    { step: "step 1", symbol: '✅', detail: ' Resume & portfolio check' },
    { step: "step 2", symbol: '✅', detail: 'initial call' },
    { step: "step 3", symbol: '✅', detail: ' technical interview' },
    { step: "step 4", symbol: '💻', detail: 'work assessment' }
  ]

  const navigate = useNavigate()

  return (
    <div className='steps'>

      <div className="navbar">
        <h2 className='nav'>tentwenty</h2>
      </div>

      <div className="txt-area_4">

        <div className="text_field_4">

          <div className='greeting_4'>what step of <br /> the process  <br />am I at?</div>

          <div class="main-txt_4">

            We would like to make sure you're aware of <br />
            our hiring process. On the right you can see <br />
            your progression.

            <div className="bottom_4">
              <h4 className='link_4' onClick={() => navigate('/Purpose')}><u>Previous</u></h4>
              <h4 className='link-4' onClick={() => navigate('/Assesment')}><u>Next Page</u></h4>
            </div>

          </div>

        </div>

        <div className="process_4">

          {steps.map((item) => {
            console.log(item);
            return (
              <>
                <div className="step_1">
                  <div className="step_1_a">{item.step} </div>
                  <div className="step_1_b">{item.symbol}</div>
                  <div className="step_1_c">{item.detail}</div>
                </div>
                <hr />
              </>)
          })}

          <div className='step_5'>
            <div className='step_5_a'>step 5 </div>
            <div className='step_5_b'>conclusion of application</div>
          </div>

        </div>
      </div>
    </div>
  )
}
