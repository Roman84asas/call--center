import React from "react";
import {OperatorsTopSect, OperatorsMiddleSect, OperatorsBottomeSect} from "../";

import './Operators.scss';


const Operators = () => {

    return(
        <div className="operators">
            <OperatorsTopSect />
            <OperatorsMiddleSect />
            <OperatorsBottomeSect />
        </div>
    )
};

export default Operators;
