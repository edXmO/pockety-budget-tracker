import React from 'react';
import { ReactComponent as RemoveBtn } from '../../assets/img/SVG/remove.svg';


const Expense = ({ removeItem, description, amount, id, idx }) => {
    return (
        <div key={id + idx} className="history__item">
            <p className="history__text history__text--description">
                <button onClick={() => removeItem(id)} className="btn btn--delete">
                    <RemoveBtn className="history__icon history__icon--remove" />
                </button>
                {description}
            </p>
            <p className="history__text history__text--amount">€{amount}</p>
        </div >
    );
};

export default Expense;