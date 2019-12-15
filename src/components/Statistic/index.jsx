import React from "react";
import {StatisticAll, StatisticOutputs} from '../';

import './Statistic.scss'


const Statistic = () => {
    return(
        <div className="statistic">
            <div className="header-statistic">
                <div className="name-stat">
                    СТАТИСТИКА ОЧЕРЕДЕЙ
                </div>
                <div className="stat-detail">
                    <div className="descr-detial">
                        подробно по
                    </div>
                    <div className="number-detail">
                        700
                    </div>
                </div>

            </div>
            <StatisticAll/>
            <StatisticOutputs/>
        </div>
    )
};

export default Statistic;

