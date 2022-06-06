import React from 'react';
import './Home.css';
import Rectangle from './Rectangle.png';
import Rectangle2 from './Rectangle (2).png';
import { useNavigate} from "react-router-dom";


export default function Home() {

  const navigate = useNavigate()

  return (
    <div className='home'>

      <div className="upper">
        <img src={Rectangle} alt="" />
      </div>

      <div className="text_area">
        <h1 className='heading'>tentwenty</h1>
        <sup className='cap'>TM</sup>
      </div>

      <div className="side_text">
        <p className='next' onClick={()=> navigate('/Intro')}><u>Next Page</u></p>
        <p className='text_rotate'>frontend developer <br />assesment</p>
      </div>

      <div className="lower">
        <img src={Rectangle2} alt="" />
      </div>


    </div>
  )
}
