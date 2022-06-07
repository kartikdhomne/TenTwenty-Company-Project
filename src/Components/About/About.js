import React from 'react';
import image200 from "./image 200.png"
import image201 from "./image 201.png"
import image202 from "./image 201 (1).png"
import image203 from "./Rectangle 2356.png";
import "./About.css";
import { useNavigate } from "react-router-dom";

export default function About() {

    const navigate = useNavigate()

    return (
        <div className="about">

            <div className="navbar">
                <h2 className='nav_2'>tentwenty</h2>
            </div>


                <div className="img1">
                    <img src={image200} alt="img" />
                </div>

                <div className="img2">
                    <img src={image201} alt="img" />
                </div>

                <div className="img3">
                    <img src={image202} alt="img" />
                </div>

                <div className="img4">
                    <img src={image203} alt="img" />
                </div>


            <div className="txt-area_2">

                <div className="text_field_2">

                    <div className='greet_2'>a bit about <br /> tentwenty</div>

                    <div class="main-txt_2">

                        <div className="para_top"> At TenTwenty, we believe that the effective interplay between design <br />
                            and functionality is what sets our websites, web shops and apps apart <br />
                            from other digital agencies. We're transparent with our customers and <br />
                            because we consider their projects to be our own, the results are <br />
                            beautiful, useful and responsive.
                        </div><br />

                        <div className="para_top">
                            We do good work. That means we get to say yes to the projects we <br />
                            know we'll be proud of, and no to the others. We're all about for filling <br />
                            our client's needs. Why not make all projects of award winning quality? :) <br />
                            The bigger we get, the smaller we stay. Does that make sense? We keep <br />
                            our teams nimble, our atmosphere healthy, and our organization flat.
                        </div>

                        <div className="bottom_2">
                            <h4 className='link_2' onClick={() => navigate('/Intro')}><u>Previous</u></h4>
                            <h4 className='link-2'><u>See the tentwenty showreel :)</u></h4>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
