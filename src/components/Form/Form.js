import React, { useReducer } from 'react';

const NewTransactionForm = ({ handleDataSubmit, btnText }) => {
    //useReducer hook to create the formData object,
    //  reducer function to pull the description and amount fields from the e.target object 
    //  and update the state with spread operator
    const formReducer = (state, e) => {
        if (e.reset) {
            return {
                description: "",
                amount: ""
            };
        }
        return {
            ...state,
            [e.name]: e.value
        };
    };

    const [formData, setFormData] = useReducer(formReducer, {});

    const handleSubmit = e => {
        e.preventDefault();
        handleDataSubmit(formData);
    };

    const handleChange = e => {
        setFormData({
            name: e.target.name,
            value: e.target.value
        });
    };
    return (
        <form onSubmit={handleSubmit} className="expenseForm">
            <div className="expenseForm__add">
                <label>Description</label>
                <input
                    value={formData.description || ""}
                    onChange={handleChange}
                    name="description"
                    className="expenseForm__input expenseForm__input--description"
                    type="text"
                    placeholder="Description"
                />
                <label>Amount</label>
                <input
                    value={formData.amount || ""}
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