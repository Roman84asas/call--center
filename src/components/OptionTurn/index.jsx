import React from "react";
import {AccordionFirst, AccordionSecond, AccordionThird, AccordionFourth, AccordionFifth} from '../';

import './OptionTurn.scss';

const OptionTurn = () => {
    return(
        <div className="option-turn">
            <div className="header-turn">
                <div className="new">НОВЫЕ</div>
                <div className="talking">РАЗГ.</div>
                <div className="name-turn">ОЧЕРЕДЬ</div>
                <div><div className="option-icon"/></div>
            </div>
            <AccordionFirst/>
            <AccordionSecond/>
            <AccordionThird/>
            <AccordionFourth/>
            <AccordionFifth/>
        </div>
    )
};

export default OptionTurn;