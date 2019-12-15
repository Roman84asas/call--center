import React, {useState} from "react";

import './OperatorsBottomeSect.scss';


const OperatorsBottomeSect = () => {
    const [colorBool, setColorBool] = useState(true);
    const [getStyleTop, setStyleTop] = useState('activeTop');
    const [getStyleBottom, setStyleBottom] = useState('activeBottom');

    const takeEvent = (e) => {
        let element = e.target;
        let getId = e.target.id;

        setColorBool(!colorBool);
        colorBool === true ? setStyleTop('') : setStyleTop('activeTop');
        colorBool === true ? setStyleBottom('') : setStyleBottom('activeBottom');


        if (colorBool) {
            switch (getId) {
                case "1":
                    element.classList.add(`${getStyleTop}`);
                    break;
                case "2":
                    element.classList.add(`${getStyleTop}`);
                    break;
                case "3":
                    element.classList.add(`${getStyleTop}`);
                    break;
                case "4":
                    element.classList.add(`${getStyleTop}`);
                    break;
                case "5":
                    element.classList.add(`${getStyleTop}`);
                    break;
                case "6":
                    element.classList.add(`${getStyleTop}`);
                    break;
                case "7":
                    element.classList.add(`${getStyleBottom}`);
                    break;
                case "8":
                    element.classList.add(`${getStyleBottom}`);
                    break;
                case "9":
                    element.classList.add(`${getStyleBottom}`);
                    break;
                case "10":
                    element.classList.add(`${getStyleBottom}`);
                    break;
                case "11":
                    element.classList.add(`${getStyleBottom}`);
                    break;
                default: console.log("None image");
                    break;
            }
        } else {
            switch (getId) {
                case "1":
                    element.classList.remove('activeTop');
                    break;
                case "2":
                    element.classList.remove('activeTop');
                    break;
                case "3":
                    element.classList.remove('activeTop');
                    break;
                case "4":
                    element.classList.remove('activeTop');
                    break;
                case "5":
                    element.classList.remove('activeTop');
                    break;
                case "6":
                    element.classList.remove('activeTop');
                    break;
                case "7":
                    element.classList.remove('activeBottom');
                    break;
                case "8":
                    element.classList.remove('activeBottom');
                    break;
                case "9":
                    element.classList.remove('activeBottom');
                    break;
                case "10":
                    element.classList.remove('activeBottom');
                    break;
                case "11":
                    element.classList.remove('activeBottom');
                    break;
                default: console.log("None image");
                    break;
            }

        }

    };


    return(
        <div className="operators-bottom">

            <div className="options-bottom">
                <div className='top-line' id="1" onClick={event => takeEvent(event)}>Отдел Сопровождения</div>
                <div className='top-line' id="2" onClick={event => takeEvent(event)}>Балашиха Шкода</div>
                <div className='top-line' id="3" onClick={event => takeEvent(event)}>Гермника</div>
                <div className='top-line' id="4" onClick={event => takeEvent(event)}>Автомир Мазда</div>
                <div className='top-line' id="5" onClick={event => takeEvent(event)}>Брянск Хендэ</div>
                <div className='top-line' id="6" onClick={event => takeEvent(event)}>Брянск Мульти</div>
                <div className='bottom-line' id="7" onClick={event => takeEvent(event)}>Брянск Хендэ</div>
                <div className='bottom-line' id="8" onClick={event => takeEvent(event)}>Отдел Сопровождения</div>
                <div className='bottom-line' id="9" onClick={event => takeEvent(event)}>Балашиха Шкода</div>
                <div className='bottom-line' id="10" onClick={event => takeEvent(event)}>Гермника</div>
                <div className='bottom-line' id="11" onClick={event => takeEvent(event)}>Автомир Мазда</div>
                <div className="div-icon"><div className="option-icon"/></div>
            </div>

            <div className="top-section-dark-table">
                <div className="dark-name"><div>100007 Фетисова Виктория Игоревна </div></div>
                <div className="dark-duration">
                    <div className="duration-green">
                        <div>03:34</div>
                    </div>
                </div>
                <div className='received-numb'><div>0</div></div>
                <div className='missed-numb'><div>3</div></div>
                <div className='outdoing-numb'><div>2</div></div>
                <div className='numb'>
                    <div className="numb-inactive">
                        <div className="inactive-icon"/>
                        <div>Неактивен</div>
                    </div>
                </div>
            </div>

            <div className="top-section-light-table">
                <div className="light-name"><div>100008 Хозяенко Наталья Викторовна Хозяенко Наталья Викторовна</div></div>
                <div className="light-duration">
                    <div className="duration-green">
                        <div>00:48</div>
                    </div>
                </div>
                <div className='received-numb'><div>0</div></div>
                <div className='missed-numb'><div>3</div></div>
                <div className='outdoing-numb'><div>2</div></div>
                <div className='numb'>
                    <div className="act">
                        <div>МДС</div>
                    </div>
                </div>
            </div>

            <div className="top-section-dark-table">
                <div className="dark-name"><div>100007 Фетисова Виктория Игоревна </div></div>
                <div className="dark-duration">
                    <div className="duration-orange">
                        <div>13:34</div>
                    </div>
                </div>
                <div className='received-numb'><div>0</div></div>
                <div className='missed-numb'><div>3</div></div>
                <div className='outdoing-numb'><div>2</div></div>
                <div className='numb'>
                    <div className="numb-incoming">
                        <div className="incoming-icon"/>
                        <div>Вх. 89252234843</div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default OperatorsBottomeSect;