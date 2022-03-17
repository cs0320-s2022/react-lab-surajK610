
import React, {useState} from 'react';

function TextBox(props : any) {
    return (
    <div className="TextBox">
        <label>{props.label}</label>
        <input type={'text'} onChange={(event) => props.change(event.target.value)}/><br></br>
    </div>
    )
}
export default TextBox;
