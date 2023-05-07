import React from 'react';
import PropTypes from 'prop-types';
import '../styles/savingcard.css'
SavingCard.propTypes = {
    data: PropTypes.object.isRequired,
    color: PropTypes.string
};

function SavingCard(props) {
    return (
        <div className="saving__card">
            <h3 className="saving__card__title">
                {props.data["title"]}
            </h3>
            <div className="saving__card__body">
                <div className="saving__card__progress">
                    <span className="saving__card__progress__amount">
                        {Number(props.data["progress"]).toLocaleString('en-US', {style: "currency", currency: "USD"})}
                    </span>
                    <span className="saving__card__progress__goal">
                        /{Number(props.data["goal"]).toLocaleString('en-US', {style: "currency", currency: "USD"})}
                    </span>
                </div>
                <div className="saving__card__progress__bar">
                   <div className="progress__bar" style={{backgroundColor:"#FFF"}}>
                       <div style={{backgroundColor:props.color, height:"100%",width:`${props.data["progress"]*100/props.data["goal"]}%`}} ></div>
                   </div>
                </div>
            </div>
        </div>
    );
}

export default SavingCard;