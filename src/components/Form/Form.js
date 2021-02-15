import React, { useReducer } from 'react';
import formReducer from '../../reducers/formReducer';

const INITIAL_STATE = {
    description: '',
    amount: ''
}

const NewTransactionForm = ({ handleDataSubmit, btnText }) => {
    //useReducer hook to create the formData object,
    //  reducer function to pull the description and amount fields from the e.target object 
    //  and update the state with spread operator

    const [formData, dispatch] = useReducer(formReducer, INITIAL_STATE);

    const handleSubmit = e => {
        e.preventDefault();
        handleDataSubmit(formData);
    };

    const handleChange = e => {
        dispatch({
            type: "HANDLE_INPUT",
            payload: {
                field: e.target.name,
                value: e.target.value
            }
        })
    };

    const { description, amount } = formData;
    return (
        <form onSubmit={handleSubmit} className="expenseForm">
            <div className="expenseForm__add">
                <label>Description</label>
                <input
                    required
                    value={description}
                    onChange={handleChange}
                    name="description"
                    className="expenseForm__input expenseForm__input--description"
                    type="text"
                    placeholder="Description"
                />
                <label>Amount</label>
                <input
                    required
                    value={amount}
                    onChange={handleChange}
                    name="amount"
                    className="expenseForm__input expenseForm__input--amount"
                    type="number"
                    placeholder="Amount"
                />
            </div>
            <button type="submit" className="btn btn--yellow">
                {btnText}
            </button>
        </form>
    );
};

export default NewTransactionForm;