import { useOutletContext } from 'react-router-dom'
import TickerInfo from './TickerInfo.jsx'

function Dashboard() {
  const {
    filteredList,
    totalStocks,
    averagePrice,
    highestPrice,
    lowestPrice
  } = useOutletContext()

  return (
    <>
      <div className="summary-container">
        <div className="summary-card">
          <h4>Total Stocks</h4>
          <p>{totalStocks}</p>
        </div>

        <div className="summary-card">
          <h4>Average Price</h4>
          <p>${averagePrice}</p>
        </div>

        <div className="summary-card">
          <h4>Highest Price</h4>
          <p>${highestPrice}</p>
        </div>

        <div className="summary-card">
          <h4>Lowest Price</h4>
          <p>${lowestPrice}</p>
        </div>
      </div>

      <ul>
        {filteredList.map((stock) => (
          <TickerInfo
            key={stock.symbol}
            name={stock.name}
            symbol={stock.symbol}
            price={stock.price}
            high={stock.high}
            low={stock.low}
            open={stock.open}
            previousClose={stock.previousClose}
          />
        ))}
      </ul>
    </>
  )
}

export default Dashboard