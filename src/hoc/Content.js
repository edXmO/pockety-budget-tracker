import React, { useState } from 'react';

import NewTransactionForm from '../components/Form/Form';
import ShowHistory from '../components/History/ShowHistory';

const Content = () => {

    const [history, setHistory] = useState([]);

    const handleDataSubmit = data => {
        setHistory([...history, { ...data, id: history.length }]);
    };

    return (

        <div className="content">
            <NewTransactionForm handleDataSubmit={handleDataSubmit} btnText='New Transaction' />
            <ShowHistory data={history} />
        </div>

    );
};

export default Content;