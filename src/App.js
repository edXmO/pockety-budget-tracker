import React from 'react';

// Components
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './hoc/Content';

import './css/App.css';

const App = () => {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <Content />
    </div>
  );
};


export default App;
