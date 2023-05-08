import React, {useState} from 'react';
import ReactModal from 'react-modal';
import PropTypes from "prop-types";
import {AddCircle} from "iconsax-react";

ModalForm.propTypes = {
    content: PropTypes.element,
    isOpen:PropTypes.bool.isRequired,
    style:PropTypes.object
};

function ModalForm(props) {

    return (
        <ReactModal
            isOpen={props.isOpen}
            style={props.style}
        >
            <div className="modal--content">
                <div className="modal--header">
                    <h3 className="modal--title">

                    </h3>
                    <button className="btn"><AddCircle size={30}/> </button>
                </div>
            </div>
        </ReactModal>
    );
}

export default ModalForm;