import React from 'react';

import './Checkbox.scss';

const Checkbox = () => {
    return (
        <div className="option-checkbox">
            <div className="checkbox">
                <input type="checkbox" id="checkbox-id" className="check"/>
                <label htmlFor="checkbox-id">Компактно</label>
            </div>

            <div className="checkbox">
                <input type="checkbox" id="checkbox-2" className="check"/>
                <label htmlFor="checkbox-2">Активные</label>
            </div>

            <div className="checkbox">
                <input type="checkbox" id="checkbox-3" className="check"/>
                <label htmlFor="checkbox-3">Группировать</label>
            </div>

            <div className="checkbox">
                <input type="checkbox" id="checkbox-4" className="check"/>
                <label htmlFor="checkbox-4">На ручной паузе</label>
            </div>

            <div className="checkbox">
                <input type="checkbox" id="checkbox-5" className="check"/>
                <label htmlFor="checkbox-5">Показывать упущенные</label>
            </div>
        </div>
    )
};

export default Checkbox;