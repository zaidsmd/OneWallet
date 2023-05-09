import React, {useState} from 'react';
import ReactModal from 'react-modal';
import PropTypes from "prop-types";
import '../styles/modalform.css'
import {Add} from "iconsax-react";
import {styled} from "@mui/material/styles";
import {InputAdornment, TextField} from "@mui/material";

ModalForm.propTypes = {
    content: PropTypes.element,
    isOpen: PropTypes.bool.isRequired,
    style: PropTypes.object,
    closeFunc: PropTypes.func,
};
const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: 'var( --accent-color)',
    },
    '& .css-aqpgxn-MuiFormLabel-root-MuiInputLabel-root': {
        color: "white"
    },
    '& .css-v4u5dn-MuiInputBase-root-MuiInput-root:before': {
        borderBottom: '1px solid white'
    },
    '& .css-v4u5dn-MuiInputBase-root-MuiInput-root:hover:not(.Mui-disabled, .Mui-error):before': {
        borderBottom: '2px solid white'
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'var( --accent-color)',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'white',
        },
        '&:hover fieldset': {
            borderColor: 'var( --accent-color)',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'var( --accent-color)',
        },
    },
});

function ModalForm(props) {
    const [value, setValue] = useState(0);
    const addCommas = (num) =>
        num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const removeNonNumeric = (num) => num.toString().replace(/[^0-9]/g, "");
    const handleChange = (event) =>
        setValue(addCommas(removeNonNumeric(event.target.value)));

    return (
        <ReactModal
            isOpen={props.isOpen}
            closeTimeoutMS={5}
            contentLabel={"Example Modal"}
            portalClassName={"ReactModalPortal"}
            id={"theContent"}
            shouldCloseOnEsc={true}
            shouldReturnFocusAfterClose={true}
            role={"dialog"}
            preventScroll={true}
        >
            <div className="modal__header">
                <h2 className="modal__title">Add Transaction</h2>
                <button className={"btn"} style={{padding: ".5rem"}} onClick={props.closeFunc}><Add size={30} style={{rotate: "-45deg"}}/></button>
            </div>
            <div className="modal__body__content">
                <form className={"modal__form__form"} action="">
                    <div className="input__grouped">
                        <div className="input__container">
                            <div className="input">
                                <CssTextField id={"name"} fullwidth label={"Transaction Name"} variant="standard"/>
                            </div>
                        </div>
                        <div className="input__container">
                            <div className="input">
                                <CssTextField id={"amount"} value={value} onChange={handleChange} fullwidth label={"Amount"} variant="standard" InputProps={{
                                    startAdornment: <InputAdornment color={"#00C9C8"} position="start">$</InputAdornment>,
                                }}/>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </ReactModal>
    );
}

export default ModalForm;