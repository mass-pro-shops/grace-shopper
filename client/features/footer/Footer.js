import React from "react";
import { Link } from 'react-router-dom';

const Footer = (props) => {

    return (
        <div className="footer">
            <div className="footerColumn">
                <Link to='/contacts'>
                    <h4>Contacts</h4>
                </Link>
            </div>
        </div>
    )
}

export default Footer;