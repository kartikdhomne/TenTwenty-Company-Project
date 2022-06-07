import React from 'react';
import "./Intro.css";
import img from './image 205.png';
import { useNavigate } from "react-router-dom";

export default function Intro() {

    const navigate = useNavigate()

    return (
        <div className='intro'>

            <div className="navbar">
                <h2 className='nav_1'>tentwenty</h2>
            </div>

            <div className="txt-area_1">

                <div className="text_field_1">

                    <div className='greet_1'>hi there <span className='hello'>👋</span></div>

                    <div class="main-txt_1">Thank you for your application. Great to see that you're <br />
                        interested in the position of front-end developer at tentwenty. <br />
                        We've reviewed your CV & portfolio and they look great! <br />
                        Let's proceed with the next step  We hope to meet you soon.</div>

                    <div className="mid_1">
                        <p>Regards</p>
                        <p>Co-founders/Bas & Patrick </p>
                    </div>

                    <div className="bottom_1">
                        <h4 className="link_1" onClick={() => navigate('/Purpose')}><u>Let's get started!</u></h4>
                        <h4 className="link-1" onClick={() => navigate('/About')}><u>A bit more about tentwenty</u></h4>
                    </div>

                </div>

                <div className="img">
                    <img src={img} alt="img" />
                </div>
            </div>
        </div>
    )
}
