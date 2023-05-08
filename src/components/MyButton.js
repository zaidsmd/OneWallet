import React from 'react';
import PropTypes from "prop-types";
import '../styles/buttons.css'

MyButton.propsType={
    classnames : PropTypes.array.isRequired,
    children: PropTypes.any.isRequired,
    onClick:PropTypes.func
}
fetch('').then()
function MyButton(props) {
    let classnames_String = props.classnames.join(' ');
    return (
        <div className={'btn '+classnames_String} onClick={(props.onClick)()} >
            {props.children}
        </div>
    );
}

export default MyButton;