import React from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import CardTransaction from "./CardTransaction";
import '../styles/transactionscard.css'


TransactionsCard.propTypes = {
    data: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired
};

function TransactionsCard(props) {
    return (
        <div className="transactions__card card">
            <div className="transactions__card__header">
                <p className="transactions__card__title">
                    {props.title}
                </p>
                <Link to='/transactions' className="transactions__card__button">view all</Link>
            </div>
            <div className="transactions__card__body">
                {props.data.map(
                    (transaction, index) =>
                    <CardTransaction key={index+transaction.status+(Math.floor(Math.random()*10000))}
                    category={transaction.category}
                    description={transaction.description}
                    transactionType={transaction.type}
                    amount={transaction.amount}
                    status={transaction.status}
                />
                )}
            </div>
        </div>
    );
}

export default TransactionsCard;