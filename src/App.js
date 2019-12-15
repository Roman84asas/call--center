import React, {useState} from 'react';
import Footer from "./modules/footer";
import Content from "./modules/content";

function App() {

    const [colorBool, setColorBool]       = useState(false);
    const [getStyle, setStyle]            = useState('light');
    const [colorFooter, setColorFooter]   = useState('footer');
    const [colorHeader, setColorHeader]   = useState('header');
    const [colorSection, setColorSection] = useState('section');

    const changeColor = () => {
        colorBool === true ? setColorBool(false)                         : setColorBool(true);
        colorBool === false ? setStyle('dark')                           : setStyle('light');
        colorBool === false ? setColorFooter('footer-dark-background')   : setColorFooter('footer');
        colorBool === false ? setColorHeader('header-dark-background')   : setColorHeader('header');
        colorBool === false ? setColorSection('section-dark-background') : setColorSection('section');
    };


    return (
        <div className={'app ' + getStyle}>
            <div className={colorHeader + ' wrapper'}>
                <div className="time-zone">Серверное время 19:35:57 Разница -2 с 700 мс</div>

                <button onClick={changeColor}>{getStyle}</button>
             </div>

            <Content className={colorSection + ' wrapper'}/>

            <Footer className={colorFooter}/>

        </div>
    );
}

export default App;
