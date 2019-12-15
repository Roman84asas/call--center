import React from 'react';
import {Checkbox, Filter, SelectTurn, SelectFont, SelectFormat} from "../../components";


import './Footer.scss';
import './DarckFooter.scss';



const Footer = (colorFooter) => {
    return (
        <div className={colorFooter.className} >
            <div className="footer-option">
                <Checkbox/>
                <Filter/>
                <SelectTurn/>
                <SelectFont/>
                <SelectFormat/>
            </div>
        </div>
    )
};

export default Footer;