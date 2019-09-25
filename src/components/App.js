import React from 'react';
import Header from './Header';
import '../css/App.css';
import CoinsList from './CoinsList';

const App = () => {
    return  (
        <div className="ui container app">
            <Header />
            <CoinsList />
        </div>
    );
};

export default App;