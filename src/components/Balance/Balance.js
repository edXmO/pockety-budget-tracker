import React from 'react';

const Balance = () => {



    const totalBalance = [];

    return (
        <div className='balance'>
            <div className='balance__total'>
                <h3 className='heading-2'>Daily</h3>
                <h3 className='heading-2'>Your balance: 3000€</h3>
            </div>
            <div className="balance__cards">
                <div className="balance__card balance__card--income">
                    <h3 className='heading-2'>INCOME</h3>
                    <p className='balance__cash balance__cash--positive'>
                        + €300
                    </p>
                </div>
                <div className="balance__card balance__card--expenses">
                    <h3 className='heading-2'>EXPENSES</h3>
                    <p className='balance__cash balance__cash--negative'>
                        - €100
                    </p>

                </div>
            </div>
        </div>
    )
}


export default Balance;