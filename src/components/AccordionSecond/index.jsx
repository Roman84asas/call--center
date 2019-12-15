import React, {useState} from "react";


import './AccordionSecond.scss';


const AccordionSecond = () => {
    const [colorBoolSecond, setColorBoolSecond] = useState(false);
    const [getStyleTop, setStyleTop] = useState('arrow-first-show');
    const [getEventNumb, setEventNumb] = useState('number-list');

    const [colorBool, setColorBool] = useState(false);
    const [getStyleBottom, setStyleBottom] = useState('arrow-second-show');
    const [getEvent, setEvent] = useState('talking-list');


    const takeFirstEvent = () => {

        if (colorBoolSecond === false) {
            setStyleTop('arrow-first-close');
            setEventNumb('hidden-number');
            setColorBoolSecond(!colorBoolSecond);
        } else {
            setStyleTop('arrow-first-show');
            setEventNumb('number-list');
            setColorBoolSecond(!colorBoolSecond);
        }
    };

    const takeEvent = () => {

        if (colorBool === false) {
            setStyleBottom('arrow-second-close');
            setEvent('hidden-talking');
            setColorBool(!colorBool);
        } else {
            setStyleBottom('arrow-second-show');
            setEvent('talking-list');
            setColorBool(!colorBool);
        }

        console.log(colorBool);

    };

    return(
        <div>
            <div className="second-turn">
                <div className="new-number-orange">
                    <div>5</div>
                    <div className={getStyleTop} id="1" onClick={takeFirstEvent}/>
                </div>
                <div className="talking-number">
                    <div className="button-second">
                        <div>2</div>
                        <div className={getStyleBottom} id="2" onClick={takeEvent}/>
                    </div>
                </div>

                <div className="seporator"/>

                <span className="descr-turn">
                    Дмитровка-4 Сузуки
                </span>
                <div className="div-icon"><div className="menu-icon"/></div>


            </div>
                <div className="lists">
                    <div className={getEvent} id="378">
                        <div className="header-talking-list">
                            <div className="duration-talking-list">длит.</div>
                            <div className="seporator"/>
                            <div className="number-talking-list">номер телефона</div>
                            <div className="close-icon"/>
                        </div>
                        <div className="talking-list-light">
                            <div className="duration-talking-list">15 сек</div>
                            <div className="seporator"/>
                            <div className="number-talking-list">+ 79261234567</div>
                        </div>
                        <div className="talking-list-dark">
                            <div className="dark">
                                <div className="duration-talking-list">25 мин</div>
                                <div className="seporator"/>
                                <div className="number-talking-list">+ 79165006070</div>
                            </div>

                        </div>
                    </div>

                    <div className={getEventNumb} id="435">
                        <div className="header-number-list" >
                            <div className="duration-number-list">длит.</div>
                            <div className="seporator"/>
                            <div className="number-number-list">Номер телефона</div>
                            <div className="close-icon"/>
                        </div>
                        <div className="number-list-light">
                            <div className="duration-number-list">15 сек</div>
                            <div className="seporator"/>
                            <div className="number-number-list">+ 79261234567</div>
                        </div>
                        <div className="number-list-dark">
                            <div className="dark">
                                <div className="duration-number-list">25 мин</div>
                                <div className="seporator"/>
                                <div className="number-number-list">+ 79165006070</div>
                            </div>
                        </div>
                        <div className="number-list-light">
                            <div className="duration-number-list">10 сек</div>
                            <div className="seporator"/>
                            <div className="number-number-list">+ 79261234567</div>
                        </div>
                        <div className="number-list-dark">
                            <div className="dark">
                                <div className="duration-number-list">30 мин</div>
                                <div className="seporator"/>
                                <div className="number-number-list">+ 79165006070</div>
                            </div>
                        </div>
                        <div className="number-list-light">
                            <div className="duration-number-list">12 сек</div>
                            <div className="seporator"/>
                            <div className="number-number-list">+ 79261234567</div>
                        </div>
                    </div>

                </div>
        </div>

    )
};

export default AccordionSecond;