import React from 'react';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul className="sidebar__navigation">
                <li className="sidebar__item sidebar__item--active">
                    <a href="#" className="sidebar__link">
                        Link 1
            </a>
                </li>
                <li className="sidebar__item">
                    <a href="#" className="sidebar__link">
                        Link 2
            </a>
                </li>
                <li className="sidebar__item">
                    <a href="#" className="sidebar__link">
                        Link 3
            </a>
                </li>
            </ul>
            <div className="sidebar__copy">
                <a href="https://github.com/edXmO" target="_blank">
                    <img
                        src="https://cdn3.iconfinder.com/data/icons/inficons/512/github.png"
                        className="sidebar__git-icon"
                    ></img>
                </a>
                <p className="sidebar__text">Built and designed by edXmO &copy; 2021</p>
            </div>
        </div>
    );
};

export default Sidebar;