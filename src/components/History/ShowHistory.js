import React from 'react';
import Expense from '../Expense/Expense';

const ShowHistory = ({ data }) => {

    const renderHistory = data.map(expense => {
        const { id, description, amount } = expense;
        return <Expense key={id} description={description} amount={amount} />
    })

    return (
        <div className="history">
            <h3 className="heading-2">History</h3>
            <ul className="history__items">
                {!data ? null : renderHistory}
            </ul>
        </div>
    );
};

export default ShowHistory;