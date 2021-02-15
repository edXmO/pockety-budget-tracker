import React, { useEffect, useState } from 'react';

import NewTransactionForm from '../components/Form/Form';
import ShowHistory from '../components/History/ShowHistory';

const Content = () => {

    const [history, setHistory] = useState([]);

    useEffect(() => {
        const arrOfData = [];
        for (let i = 0; i <= localStorage.length - 1; i++) {
            let key = localStorage.key(i);
            let value = localStorage.getItem(key).split(' ');
            arrOfData.push({ description: value[1], amount: value[2], id: value[0] });
        }
        setHistory([...history, ...arrOfData]);
    }, [localStorage]);

    const handleDataSubmit = data => {
        setHistory([...history, { ...data, id: history.length }]);
        localStorage.setItem(history.length, history.length.toString() + ' ' + data.description.toString() + ' ' + data.amount.toString());
    };

    const handleRemoveItem = id => {
        localStorage.removeItem(id);
        const newHistory = history.filter(item => item.id === id ? false : true);
        setHistory([...newHistory]);
    }


    return (
        <div className="content">
            <NewTransactionForm handleDataSubmit={handleDataSubmit} btnText='New Transaction' />
            <ShowHistory data={history} removeItem={handleRemoveItem} />
        </div>

    );
};

export default Content;