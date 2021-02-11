import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import contactPagePic from '../../../static/assets/images/auth/login.jpg';

export default function() {
    return (
        <div className="content-wrapper">
            <div 
                className="left-column"
                style={{
                    background: "url("+ contactPagePic +")",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover"
                }}   
            />

            <div className="right-column">
                <div className="contact-items_wrapper">
                    <div className="contact-item">
                        <div className="icon">
                            <FontAwesomeIcon icon="phone" />
                        </div>

                        <div className="text">
                            555-555-5555
                        </div>
                    </div>

                    <div className="contact-item">
                        <div className="icon">
                            <FontAwesomeIcon icon="envelope" />
                        </div>

                        <div className="text">
                            bridger@example.com
                        </div>
                    </div>

                    <div className="contact-item">
                        <div className="icon">
                            <FontAwesomeIcon icon="map-marked-alt" />
                        </div>

                        <div className="text">
                            Lehi Ut
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}