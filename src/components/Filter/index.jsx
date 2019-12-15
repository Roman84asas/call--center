import React from 'react';

import filterSvg from '../../assets/img/filter.svg';

import './Filter.scss';

const Filter = () => {
    return (
        <div className="filter-option">
            <img src={filterSvg} alt="Filter icon"/>
            <form action="" className="form-select">
                <input type="text" placeholder="Фильтры по оператору" className="form-select__text"/>
                <div className="form-select__submit">
                    <input type="submit"  value=""/>
                </div>
            </form>
        </div>
    )
};

export  default Filter;