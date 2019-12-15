import React from "react";

import './StatisticOutputs.scss';


const StatisticOutputs = () => {
    return(
        <div className="statistic-outputs">
            <div className="name-rest">ВСЕГО</div>
            <div className="rest-number">
                <div className="rest-all"><div>102210</div></div>
                <div className="seporator"/>
                <div className="rest-first"><div>50</div></div>
                <div className="seporator"/>
                <div className="rest-second"><div>101</div></div>
            </div>
        </div>
    )
};

export default StatisticOutputs;