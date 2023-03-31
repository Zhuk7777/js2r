import axios from 'axios';
import React from 'react';
  
class Main extends React.Component {
    constructor(props)
    {
        super(props) 
        this.state ={
            price: 0
        }

        this.clickButton=this.clickButton.bind(this);

    }

    clickButton ()
    {
        let tickerCrypto=""
        let nameCrypto=document.getElementById('listOne').value
        switch(nameCrypto)
        {
            case "Биткоин":
                tickerCrypto="BTC"
                break
            case "Эфириум":
                tickerCrypto="ETH"
                break
            case "Tether":
                tickerCrypto="USDT"
                break
            case "BNB":
                tickerCrypto="BNB"
                break

        }
        let currency=document.getElementById('listTwo').value
        let date = new Date(document.getElementById('dateOne').value);
        date = date.getTime()/1000;

        let URL=`https://min-api.cryptocompare.com/data/pricehistorical?fsym=${tickerCrypto}&tsyms=${currency}&ts=${date}`
        let options = {
            method: 'GET',
            url: URL,
        
          };//Дневная пара OHLCV от TS
        axios.request(options).then((response) => {
           /* let normDate= 1680257986
            let date = new Intl.DateTimeFormat('ru-RU', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(normDate*1000)
            console.log(date)
            console.log(normDate)
            console.log(1680257986)*/
            this.setState(
                {
                    price: response.data[`${tickerCrypto}`][`${currency}`]
                }
             )

         }).catch(function (error) {
             console.error(error);
         })

    }
    
    render()
    {
        return (
            <div className="main">
                
                <img id='image' src="https://master-saydinga.ru/wp-content/uploads/kriptovalyuta.jpg"></img><br></br>
                <select className='list' id="listOne">
                    <option>Биткоин</option>
                    <option>Эфириум</option>
                    <option>Tether</option>
                    <option>BNB</option>
                </select><br></br>
                <input className='date' id="dateOne" type="date" /><br></br>
                <input className='date' id='dateTwo' type='month'></input><br></br>
                <select className='list' id="listTwo">
                    <option>USD</option>
                    <option>EUR</option>
                    <option>JPY</option>
                </select><br></br>
                <button id="myButton" onClick={this.clickButton}>Готово</button><br></br>
                <span id='price'>Price: {this.state.price}</span>
            </div>
        )
    }

}
export default Main