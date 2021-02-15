import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <div className="header__heading-container">
                <h1 className="heading-1">Pockety</h1>
            </div>
            <nav className="header__navbar">
                <ul className="header__items">
                    <li className="header__item">
                        <button className="btn btn--yellow">
                            <Link to="/new">New Transaction</Link>
                        </button>
                    </li>
                    <li className="header__item">
                        <button className="btn btn--yellow">
                            <Link to="/balance">Balance</Link>
                        </button>
                    </li>
                    <li className="header__item">
                        <button className="btn btn--yellow">
                            <Link to="/chart">Charts</Link>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;