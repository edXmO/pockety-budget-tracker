import React from 'react';
import { ReactComponent as RemoveBtn } from '../../assets/img/SVG/remove.svg';


const Expense = ({ removeItem, description, amount, id, idx }) => {
    const colorTextClass = parseInt(amount) > 0 ? 'history__text--positive' : 'history__text--negative';
    return (
        <div key={id + idx} className="history__item">
            <p className="history__text history__text--description">
                <button onClick={() => removeItem(id)} className="btn btn--delete">
                    <RemoveBtn className="history__icon history__icon--remove" />
                </button>
                {description}
            </p>
            <p className={`history__text history__text--amount ${colorTextClass}`}>
                €{amount}
            </p>
        </div >
    );
};

export default Expense;