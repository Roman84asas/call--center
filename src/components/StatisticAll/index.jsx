import React from "react";

import './StatisticAll.scss'


const StatisticAll = () => {
    return(
        <div className="statistic-all">
            <div className="header-all">
                <div className="statistic-accepted">ПРИНЯТЫЕ</div>
                <div className="the-details">
                    <div className="statistic-missed">УПУЩЕННЫЕ</div>
                    <div className="false">
                        <div className="untreated">
                            НЕОБРАБОТАН.
                        </div>
                        <div className="seporator"/>
                        <div className="all-false">
                            ВСЕГО
                        </div>
                    </div>
                </div>

            </div>

            <div className="header-rest">
                <div className="name-rest">По остальным</div>
                <div className="rest-number">
                    <div className="rest-all">97</div>
                    <div className="seporator"/>
                    <div className="rest-first">6</div>
                    <div className="seporator"/>
                    <div className="rest-second">6</div>
                </div>
            </div>
            <div className="first-rest">
                <div className="name-rest">700</div>
                <div className="rest-number">
                    <div className="rest-all">913</div>
                    <div className="seporator"/>
                    <div className="rest-first">17</div>
                    <div className="seporator"/>
                    <div className="rest-second">25</div>
                </div>
            </div>
            <div className="second-rest">
                <div className="name-rest">Брянск Ниссан</div>
                <div className="rest-number">
                    <div className="rest-all">0</div>
                    <div className="seporator"/>
                    <div className="rest-first">6</div>
                    <div className="seporator"/>
                    <div className="rest-second">2</div>
                </div>
            </div>
            <div className="third-rest">
                <div className="name-rest">Германка</div>
                <div className="rest-number">
                    <div className="rest-all">0</div>
                    <div className="seporator"/>
                    <div className="rest-first">3</div>
                    <div className="seporator"/>
                    <div className="rest-second">1</div>
                </div>
            </div>
            <div className="fourth-rest">
                <div className="name-rest">Отдел Сопровождения</div>
                <div className="rest-number">
                    <div className="rest-all">0</div>
                    <div className="seporator"/>
                    <div className="rest-first">0</div>
                    <div className="seporator"/>
                    <div className="rest-second">0</div>
                </div>
            </div>
        </div>
    )
};

export default StatisticAll;