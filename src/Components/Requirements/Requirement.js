import React from 'react';
import "./Requirement.css";
import { useNavigate } from "react-router-dom";

export default function Requirement() {

    const navigate = useNavigate()

    return (
        <div className='requirement'>

            <div className="navbar">
                <h2>tentwenty</h2>
            </div>

            <div className="txt_area_6">

                <div className='greet_6'>the <br />requirements <span className='emoji'>✅</span></div>

                <div className="text_field_6">

                    <div className='main_txt_6'><strong>Important Pointers before submitting your code </strong><br /><br />
                        <ul>
                            <li>Reusable, modular Javascript code</li>
                            <li>Easy to understand, not too complex and something which can be understood by any other dev.</li>
                            <li>Keep your codes short and simple.</li>
                            <li>Feel free to use any javascript framework BUT set it up from scratch, no boilerplates.</li>
                            <li>Do your code from scratch. We expect you to not use any templates available online.</li>
                            <li>When you display good knowledge of JS, we expect you to show equal expertise in css and html considering that it's a frontend assignment.</li>
                        </ul>
                    </div>

                    <div className="req_6">
                        <ul>
                            <li>Use preprocessors if possible. SASS or LESS</li>
                            <li>Good naming convention for variables and functions</li>
                            <li>The template should follow a pixelperfect approach to the design </li>
                        </ul>

                        <p className='texts_6'>Please note: You will be evaluated not only on the logic, but also on the UI/UX implement and transitions/ effects of the output. So please keep this in mind.</p>

                    </div>
                </div>

                <div className="bottom_6">
                    <h4 className='link_6' onClick={() => navigate('/Assesment')}><u>Previous</u></h4>
                    <h4 className='link-6' onClick={() => navigate('/Goodluck')}><u>Next Page</u></h4>
                </div>
            </div>
        </div>
    )
}
