import React from 'react';
import {Operators, OptionTurn, Statistic} from "../../components";

import './Content.scss';
import './DarckConyent.scss';




const Content = (colorSection) => {
    return (
        <div className={colorSection.className} >
            <Operators />
            <OptionTurn />
            <Statistic />
        </div>
    )
};

export default Content;