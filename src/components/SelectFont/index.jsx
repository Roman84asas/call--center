import React, {useState} from 'react';
import lightFont100 from '../../assets/img/lightFont100.svg';
import lightFont150 from '../../assets/img/lightFont150.svg';
import lightFont200 from '../../assets/img/lightFont200.svg';
import lightFont300 from '../../assets/img/lightFont300.svg';


import darkFont100 from '../../assets/img/darckFont100.svg';
import darkFont150 from '../../assets/img/darckFont150.svg';
import darkFont200 from '../../assets/img/darckFont200.svg';
import darkFont300 from '../../assets/img/darckFont300.svg';

import './SelectFont.scss';



const SelectFont = () => {
    const [colorBool, setColorBool] = useState(true);
    const [getStyle, setStyle] = useState('active');

    const [getImage100, setImage100] = useState(lightFont100);
    const [getImage150, setImage150] = useState(lightFont150);
    const [getImage200, setImage200] = useState(lightFont200);
    const [getImage300, setImage300] = useState(lightFont300);



    const takeEvent = (e) => {
        let getId = e.target.id;
        let parent = e.target.parentElement;

        setColorBool(!colorBool);
        colorBool === true ? setStyle('') : setStyle('active');


        if (colorBool) {
            parent.classList.add(`${getStyle}`);
            switch (getId) {
                case "1":
                    setImage100(darkFont100);
                    break;

                case "2":
                    setImage150(darkFont150);
                    break;

                case "3":
                    setImage200(darkFont200);
                    break;

                case "4":
                    setImage300(darkFont300);
                    break;
                default: console.log("None image");
                break;
            }
        } else {
            parent.classList.remove('active');
            switch (getId) {
                case "1":
                    setImage100(lightFont100);
                    break;

                case "2":
                    setImage150(lightFont150);
                    break;

                case "3":
                    setImage200(lightFont200);
                    break;

                case "4":
                    setImage300(lightFont300);
                    break;
                default: console.log("None image");
                    break;
            }

        }
    };

    return (
        <div className="size-fonts" >
            <div className='font'>
                <img src={getImage100} alt="Font icon" id="1" onClick={event => takeEvent(event)}/>
            </div>

            <div className='font'>
                <img src={getImage150} alt="Font icon" id="2" onClick={event => takeEvent(event)}/>
            </div>

            <div className='font'>
                <img src={getImage200} alt="Font icon" id="3" onClick={event => takeEvent(event)}/>
            </div>

            <div className='font'>
                <img src={getImage300} alt="Font icon" id="4" onClick={event => takeEvent(event)}/>
            </div>
        </div>
    )
};

export default SelectFont;