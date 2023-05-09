import React from 'react';
import PropTypes from 'prop-types';
import '../styles/cardtransaction.css'

CardTransaction.propTypes = {
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    transactionType: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
};

function CardTransaction(props) {
    const status = () => {
      if (props.status === "completed"){
          return (
              <p className="card__transaction__status green">
                  {props.status}
              </p>
          )
      }else  {
          return (
              <p className="card__transaction__status red">
                  {props.status}
              </p>
          )
      }
    }
    return (
        <div className="card__transaction">
            <div className="card__transaction__header">
                <p className="card__transaction__category">
                    {props.category}
                </p>
                <p className="card__transaction__amount">
                    {props.transactionType==="income" ? "+" : "-"}${props.amount}
                </p>
            </div>
            <div className="card__transaction__body">
                <p className="card__transaction__description">
                    {props.description}
                </p>
                {status()}
            </div>
        </div>
    );
}

export default CardTransaction;