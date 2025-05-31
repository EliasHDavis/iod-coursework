import { useEffect, useState } from "react";
import { useData } from './customFetch.js'
// import { useEmojiContext } from './EmojiContext.jsx'


const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

export function BitcoinRates() {
    const [currency, setCurrency] = useState(currencies[0]);
    const [bitcoinPrice, setBitcoinPrice] = useState();

    // const {currentEmoji, handleChangeEmoji} = useEmojiContext();

    const data = useData(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`)

    useEffect(() => {
        fetch(
            `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
        )
        .then((response) => response.json())
        .then((json) => {
            const key = currency.toLowerCase();
            const price = json.bitcoin[key];
            

            setBitcoinPrice(price);
        })
    }, [currency]);

    const options = currencies.map((curr) => (
        <option value={curr} key={curr}>
          {curr}
        </option>
    ));

    const handleChangeCurrency = e => setCurrency(e.target.value)

    return (
        <>
        {/* <div>
            Current Mood: {currentEmoji}
            <img src={currentEmoji === 'smiley' ? './public/smiley-face-emoji-png.png' : './public/stick-sad.png'}/>
            <button onClick={handleChangeEmoji}>Change Mood</button>
        </div> */}
        <div className="BitcoinRates componentBox">
            <h3>Bitcoin Exchange Rate</h3>
            <label>Choose currency:
                <select value={currency} onChange={handleChangeCurrency}>
                    {options}
                </select>
            </label>
            <h4>Current Price: </h4>
            {bitcoinPrice}
        </div>
        </>
    )
}