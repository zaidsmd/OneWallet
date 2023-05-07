import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import SavingCard from "./SavingCard";
import '../styles/savingscard.css'

SavingsCard.propTypes = {
    data: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    progressBarColor: PropTypes.string
};

function SavingsCard(props) {
    return (
        <div className="savings__card card">
            <div className="savings__card__header">
                <h3 className="savings__card__title">
                    {props.title}
                </h3>
                <Link to='/savings' className="savings__card__button">view all</Link>
            </div>
            <div className="savings__card__body">
                {
                    props.data.map((saving, index) => (
                        <SavingCard key={saving["title"]+Math.floor(Math.random()*1000)+Math.floor(Math.random()*1000)} data={saving} color={"#00C9C8"}/>
                    ))
                }
            </div>
        </div>
    );
}

export default SavingsCard;