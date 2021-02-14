import React from 'react';
import Expense from '../Expense/Expense';
import { ReactComponent as Broke } from '../../assets/img/SVG/broke.svg';
//Icon credits =>  <div>Icons made by <a href="https://www.flaticon.com/authors/smalllikeart" title="smalllikeart">smalllikeart</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

const ShowHistory = ({ data }) => {

    const renderHistory = data.map(expense => {
        const { id, description, amount } = expense;
        return <Expense key={id} description={description} amount={amount} />
    })

    return (
        <div className="history">
            <h3 className="heading-2">History</h3>
            {data.length === 0
                ?
                <Broke className='history__icon' />
                :
                <ul className="history__items">
                    {renderHistory}
                </ul>}
        </div >
    );
};

export default ShowHistory;