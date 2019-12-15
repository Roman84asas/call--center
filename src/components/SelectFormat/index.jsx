import React, {useState} from 'react';

import selectFormatDisplayLight from '../../assets/img/selectFormatDisplayLifht.svg';
import selectFormatLeptopLight from '../../assets/img/selectFormatLeptopLight.svg';


import selectFormatDisplayDark from '../../assets/img/selectFormatDisplayDark.svg';
import selectFormatLaptopDark from '../../assets/img/selectFormatLeptopDark.svg';


import './SelectFormat.scss';

const SelectFormat = () => {
    const [colorBool, setColorBool] = useState(true);
    const [getStyle, setStyle] = useState('active');

    const [getImageDispl, setImageDispl] = useState(selectFormatDisplayDark);
    const [getImageLapt, setImageLapt] = useState(selectFormatLaptopDark);


    const takeEvent = (e) => {
        let getId = e.target.id;
        let parent = e.target.parentElement;

        setColorBool(!colorBool);
        colorBool === true ? setStyle('') : setStyle('active');


        if (colorBool) {
            parent.classList.add(`${getStyle}`);
            switch (getId) {
                case "1":
                    setImageDispl(selectFormatDisplayLight);
                    break;

                case "2":
                    setImageLapt(selectFormatLeptopLight);
                    break;
                default: console.log("None image");
                    break;
            }
        } else {
            parent.classList.remove('active');
            switch (getId) {
                case "1":
                    setImageDispl(selectFormatDisplayDark);
                    break;

                case "2":
                    setImageLapt(selectFormatLaptopDark);
                    break;
                default: console.log("None image");
                    break;
            }

        }
    };

    return (
        <div className="select-format">
            <div className="font">
                <img src={getImageDispl} alt="Icon desktop" id="1" onClick={event => takeEvent(event)}/>
            </div>
            <div className="font">
                <img src={getImageLapt} alt="Icon desktop" id="2" onClick={event => takeEvent(event)}/>
            </div>
        </div>
    )
};

export  default SelectFormat;