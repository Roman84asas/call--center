import React from 'react';

import filterSvg from '../../assets/img/arrow_right.svg';

import './SelectTurn.scss';

const SelectTurn = () => {
    return (
        <div className="select-turn">
            <div className="description">Выбрано очереди:</div>
            <div className="result">
                <p>53</p>
                <img src={filterSvg} alt="Filter icon"/>
            </div>


        </div>
    )
};

export  default SelectTurn;