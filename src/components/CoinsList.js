import React from 'react';
import CoinMarketCap from '../apis/CoinMarketCap';
import '../css/CoinsList.css';

class CoinsList extends React.Component {
    state = { coins: [], errorMessage: "" };

    componentDidUpdate() {
        this.render();
    }

    componentDidMount() {
        CoinMarketCap.get()
            .then((response) => this.setState({ coins: response.data.data, errorMessage: "" }))
            .catch((error) => this.setState({ coins: [], errorMessage: error }));
    }

    render() {
        if (!this.state.errorMessage && this.state.coins) {
            return (
                <table className="coins-table">
                    <tr className="tr-border-bottom">
                        <th>#</th>
                        <th>Name</th>
                        <th>Market Cap</th>
                        <th>Price</th>
                        <th>Volume (24h)</th>
                        <th>Circulating Supply</th>
                        <th>Changes (24h)</th>
                        <th>Price Graph (7d)</th>
                        <th>s</th>
                    </tr>
                    {this.state.coins.map((current, index) => {
                        return (
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{current.name}</td>
                                <td>{current.quote.USD.market_cap}</td>
                                <td>{current.quote.USD.price}</td>
                                <td>{current.quote.USD.volume_24h}</td>
                                <td>{current.circulating_supply}</td>
                                <td>{current.quote.USD.percent_change_24h}</td>
                                <td>{current.quote.USD.percent_change_7d}</td>
                                <td>#</td>
                            </tr>
                        );
                    })}
                </table>
            );
        } else {
            return (
                <div>
                    Loading
                </div>
            );
        }
    };
}

export default CoinsList;

/*
{ rows
*/