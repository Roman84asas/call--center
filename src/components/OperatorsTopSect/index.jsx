import React from "react";


import Missed from '../../assets/img/missed.svg';
import Outdoing from '../../assets/img/outgoing.svg';
import Received from '../../assets/img/received.svg';




import './OperatorsTopSect.scss';

const OperatorsTopSect = () => {

    return(
        <div className="operators-top">
            <div className='total-information'>
                <div className="all-name">ФИО ОПЕРАТОРА</div>
                <div className='duration'>ДЛИТ.</div>
                <div className='received'><img src={Received} alt="Icon Received"/></div>
                <div className='missed'><img src={Missed} alt="Icon Missed"/></div>
                <div className='outdoing'><img src={Outdoing} alt="Icon Outdoing"/></div>
                <div className="status">СТАТУС</div>
            </div>

            <div className="top-section-light-table">
                <div className="light-name"><div>100007 Фетисова Виктория Игоревна
                    100007 Фетисова Виктория Игоревна</div></div>
                <div className="light-duration">
                    <div className="duration-orange">
                        <div>13:34</div>
                    </div>
                </div>
                <div className='received-numb'><div>0</div></div>
                <div className='missed-numb'><div>3</div></div>
                <div className='outdoing-numb'><div>2</div></div>
                <div className='numb'>
                    <div className="numb-active">
                        <div className="active-icon"/>
                        <div>
                            Активен
                        </div>
                    </div>
                </div>
            </div>

            <div className="top-section-dark-table">
                <div className="dark-name"><div>100007 Фетисова Виктория Игоревна
                    100007 Фетисова Виктория Игоревна</div></div>
                <div className="dark-duration">
                    <div className="duration-green">
                        <div>00:48</div>
                    </div>
                </div>
                <div className='received-numb'><div>1</div></div>
                <div className='missed-numb'><div>3</div></div>
                <div className='outdoing-numb'><div>2</div></div>
                <div className='numb'>
                    <div className='numb-incoming'>
                        <div className="incoming-icon"/>
                        <div>
                            Вх. 89169718535
                        </div>
                    </div>
                </div>
            </div>

            <div className="top-section-light-table">
                <div className="light-name"><div>100007 Форфорова Ирина Олеговна</div></div>
                <div className="light-duration">
                    <div className="duration-red">
                        <div>13:34</div>
                    </div>
                </div>
                <div className='received-numb'><div>0</div></div>
                <div className='missed-numb'><div>3</div></div>
                <div className='outdoing-numb'><div>2</div></div>
                <div className='numb'>
                    <div className="numb-active">
                        <div className="active-icon"/>
                        <div>
                            Активен
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default OperatorsTopSect;
