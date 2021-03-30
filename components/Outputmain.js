
import React from 'react';
import Output from './Input.js';

const Outputmain = (props) => {
    return (
        <div className="screen">
            <Output value={props.question} />
            <Output value={props.answer} />
        </div>
    )
}
export default Outputmain;