import React, {useState} from 'react';
import ReactModal from 'react-modal';
import PropTypes from "prop-types";
import '../styles/modalform.css'
import {Add} from "iconsax-react";
import {styled} from "@mui/material/styles";
import {FormControl, InputAdornment, InputLabel, MenuItem, Select, TextField} from "@mui/material";

ModalForm.propTypes = {
    content: PropTypes.element,
    isOpen: PropTypes.bool.isRequired,
    style: PropTypes.object,
    closeFunc: PropTypes.func,
    options: PropTypes.array.isRequired
};


function ModalForm(props) {
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
    const [value, setValue] = useState(0);
    const addCommas = (num) =>
        num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const removeNonNumeric = (num) => num.toString().replace(/[^0-9]/g, "");
    const handleChange = (event) =>
        setValue(addCommas(removeNonNumeric(event.target.value)));
    const [category, setCategory] = React.useState('');

    const handleCategorySelectChange = (event) => {
        setCategory(event.target.value);
    };
    const [type, setType] = React.useState("income");

    const handleTypeSelectChange = (event) => {
        setType(event.target.value);
    };
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
                <button className={"btn"} style={{padding: ".5rem"}} onClick={props.closeFunc}><Add size={30}
                                                                                                    style={{rotate: "-45deg"}}/>
                </button>
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
                                <CssTextField id={"amount"} value={value} onChange={handleChange} fullwidth
                                              label={"Amount"} variant="standard" InputProps={{
                                    startAdornment: <InputAdornment color={"#00C9C8"}
                                                                    position="start">$</InputAdornment>,
                                }}/>
                            </div>
                        </div>
                    </div>
                   <div className="input__grouped">
                       <div className="input__container">
                           <FormControl variant="standard" sx={{m: 1, minWidth: 120}}>
                               <InputLabel id="type__select__label">Category</InputLabel>
                               <Select
                                   labelId="type__select__label"
                                   id="type__select"
                                   value={type}
                                   onChange={handleTypeSelectChange}
                                   label="Type"
                               >
                                   <MenuItem value="income">
                                       Income
                                   </MenuItem>
                                   <MenuItem value="spending">
                                       Spending
                                   </MenuItem>
                               </Select>
                           </FormControl>
                       </div>
                       <div className="input__container">
                           <FormControl variant="standard" sx={{m: 1, minWidth: 120}}>
                               <InputLabel id="category__select__label">Category</InputLabel>
                               <Select
                                   labelId="category__select__label"
                                   id="category__select"
                                   value={category}
                                   onChange={handleCategorySelectChange}
                                   label="Category"
                               >
                                   <MenuItem value="">
                                       <em>None</em>
                                   </MenuItem>
                                   {
                                       props.options.map((option, index) => {
                                           return (
                                               <MenuItem key={option["name"] + "-" + index}
                                                         value={option["value"]}>{option["name"]}</MenuItem>
                                           )
                                       })
                                   }
                               </Select>
                           </FormControl>
                       </div>
                   </div>
                    <div className="input__container">
                        <CssTextField multiline fullwidth variant="standard" label={"Description"} id={"description"}/>
                    </div>
                </form>
            </div>
        </ReactModal>
    );
}

export default ModalForm;