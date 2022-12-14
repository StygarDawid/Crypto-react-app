import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import './Coin.scss'
import DOMPurify from 'dompurify'

const Coin = () => {
    const params = useParams();
    const [coin, setCoin] = useState({});

    const url =`https://api.coingecko.com/api/v3/coins/${params.coinId}`

    useEffect(() =>{
        axios.get(url).then((res) => {
            setCoin(res.data)
        }).catch((error) => {
            console.log(error)
        })
    },[url])
    return (
        <main>
            <div className="coin-container">
                <header className="content">
                    <h1>{coin.name}</h1>
                </header>
                <div className="content">
                    <div className="rank">
                        <span className='rank-btn'>Rank # {coin.market_cap_rank}</span>
                    </div>
                    <section className="info">
                        <div className="coin-heading">
                            {coin.image ? <img src={coin.image.small} alt=""/> : null}
                            <p>{coin.name}</p>
                            {coin.symbol ? <p>{coin.symbol.toUpperCase()}/USD</p> : null}
                        </div>
                        <div className="coin-price">
                            {coin.market_data?.current_price ? <h2>${coin.market_data.current_price.usd.toLocaleString()}</h2> : null}
                        </div>
                    </section>
                </div>
                <section className="content">
                   <table>
                       <thead>
                           <tr>
                               <th>1h</th>
                               <th>24h</th>
                               <th>7d</th>
                               <th>14d</th>
                               <th className='hide-mobile-table'>30d</th>
                               <th className='hide-mobile-table'>1yr</th>
                           </tr>
                       </thead>
                       <tbody>
                            <tr>
                                <td>{coin.market_data?.price_change_percentage_1h_in_currency ? <p>{coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(2)}%</p> : null}</td>
                                <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(2)}%</p> : null}</td>
                                <td>{coin.market_data?.price_change_percentage_7d_in_currency ? <p>{coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(2)}%</p> : null}</td>
                                <td>{coin.market_data?.price_change_percentage_14d_in_currency ? <p>{coin.market_data.price_change_percentage_14d_in_currency.usd.toFixed(2)}%</p> : null}</td>
                                <td className='hide-mobile-table'>{coin.market_data?.price_change_percentage_30d_in_currency ? <p>{coin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(2)}%</p> : null}</td>
                                <td className='hide-mobile-table'>{coin.market_data?.price_change_percentage_1y_in_currency ? <p>{coin.market_data.price_change_percentage_1y_in_currency.usd.toFixed(2)}%</p> : null}</td>
                            </tr>
                       </tbody>
                   </table>
               </section>
                <div className="content">
                    <section className="stats">
                        <div className="left">
                            <div className="row">
                                <h4>24 Hour Low</h4>
                                {coin.market_data?.low_24h ? <p>${coin.market_data.low_24h.usd.toLocaleString()}</p> : null}
                            </div>
                            <div className="row">
                                <h4>24 Hour High</h4>
                                {coin.market_data?.high_24h ? <p>${coin.market_data.high_24h.usd.toLocaleString()}</p> : null}
                            </div>
                        </div>
                        <div className="right">
                            <div className="row">
                                <h4>Market Cap</h4>
                                {coin.market_data?.market_cap ? <p>${coin.market_data.market_cap.usd.toLocaleString()}</p> : null}
                            </div>
                            <div className="row">
                                <h4>Circulating Supply</h4>
                                {coin.market_data ? <p>{coin.market_data.circulating_supply}</p> : null}
                            </div>
                        </div>
                    </section>
                </div>
                <div className="content">
                    <section className="about">
                        <h3>About</h3>
                        <p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(coin.description ? coin.description.en : '')}}></p>
                    </section>
                </div>
            </div>
        </main>
    )
}

export default Coin;