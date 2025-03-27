import { useEffect, useState } from "react";


const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

export function BitcoinRates() {
    const [currency, setCurrency] = useState(currencies[0]);
    const [bitcoinPrice, setBitcoinPrice] = useState();

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

    return (
        <div className="BitcoinRates componentBox">
            <h3>Bitcoin Exchange Rate</h3>
            <label>Choose currency:
                <select value={currency} onChange={e => setCurrency(e.target.value)}>
                    {options}
                </select>
            </label>
            <h4>Current Price: </h4>
            {bitcoinPrice}
        </div>
    )
}