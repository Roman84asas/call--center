import React from "react";

import './AccordionThird.scss';


const AccordionThird = () => {
    return(
        <div>
            <div className="third-turn">
                <div className="new-number-light-green">
                    <div>2</div>
                    <div className="arrow-first-close"/>
                </div>
                <div className="talking-number">
                    <div className="button-second">
                        0
                    </div>
                </div>

                <div className="seporator"/>

                <span className="descr-turn">
                    Байкальская 5 Рено
                </span>
                <div className="div-icon"><div className="menu-icon"/></div>
            </div>
        </div>
    )
};

export default AccordionThird;