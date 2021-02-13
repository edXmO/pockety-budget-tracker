import React from 'react';

const Header = () => {
    return (
        <div className="header">
            <div className="header__heading-container">
                <h1 className="heading-1">Pockety</h1>
            </div>
            <nav className="header__navbar">
                <ul className="header__items">
                    <li className="header__item">
                        <button className="btn btn--yellow">Add Expense</button>
                    </li>
                    <li className="header__item">
                        <button className="btn btn--yellow">Resume</button>
                    </li>
                    <li className="header__item">
                        <button className="btn btn--yellow">Charts</button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;