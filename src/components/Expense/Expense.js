import React from 'react';

const Expense = ({ description, amount }) => {
    return (
        <div className="history__item">
            <p className="history__text history__text--description">{description}</p>
            <p className="history__text history__text--amount">€{amount}</p>
        </div>
    );
};

export default Expense;