import { Link } from 'react-router-dom'

const TickerInfo = ({name, symbol, price, high, low, open, previousClose}) => {
    const stockUp = price >= previousClose

    return (
        <li className="main-list">
            <Link to={`/stock/${symbol}`} className="ticker-link">
                <div className="ticker-top">
                    <span className="ticker-name">
                    {name} ({symbol})
                    </span>

                    <span className="stockUp" style={{ color: stockUp ? 'green' : 'red' }}>
                    ${price?.toFixed(2)}
                    </span>
                </div>

                <div className="ticker-bottom">
                    <span>Open: ${open?.toFixed(2)}</span>
                    <span>High: ${high?.toFixed(2)}</span>
                    <span>Low: ${low?.toFixed(2)}</span>
                    <span>Prev: ${previousClose?.toFixed(2)}</span>
                </div>
            </Link>
        </li>
  )
}

export default TickerInfo