import React from 'react';

class Cryptocurrency extends React.Component {
    crypto=[
        {
            name: 'Биткоин',
            ticker: 'BTC',
            year: '2009',
            link: 'https://ru.wikipedia.org/wiki/Биткойн'

        },

        {
            name: 'Эфириум',
            ticker: 'ETH',
            year: '2015',
            link: 'https://ru.wikipedia.org/wiki/Ethereum'
        },

        {
            name: 'Tether',
            ticker: 'USDT',
            year: '2015',
            link: 'https://ru.wikipedia.org/wiki/Tether'
        },

        {
            name: 'BNB',
            ticker: 'BNB',
            year: '2017',
            link: 'https://www.binance.com/ru/bnb'
        }
    ]

    render()
    {
        return (<div className="info">
            <h2>Список доступных криптовалют</h2>
            {this.crypto.map((el)=>( <a href={el.link} id="link" >
            <div className="crypto">
                <h3>Название: {el.name}</h3>
                <h3>Тикер: {el.ticker}</h3> 
                <p>Год выхода: {el.year}</p>
               </div>
               </a>
            ))}
        </div>

        )
    }
}
export default Cryptocurrency