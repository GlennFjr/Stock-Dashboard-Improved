import { useOutletContext, useParams } from 'react-router-dom'

function StockDetail() {
  const { list } = useOutletContext()
  const { symbol } = useParams()

  const stock = list.find((item) => item.symbol === symbol)

  if (!stock) {
    return <p>Stock not found.</p>
  }

  const dayChange = stock.price - stock.previousClose
  const percentChange = (dayChange / stock.previousClose) * 100
  const intradayRange = stock.high - stock.low

  return (
    <div>
      <h1>{stock.name} ({stock.symbol})</h1>
      <p>Current Price: ${stock.price?.toFixed(2)}</p>
      <p>Open: ${stock.open?.toFixed(2)}</p>
      <p>High: ${stock.high?.toFixed(2)}</p>
      <p>Low: ${stock.low?.toFixed(2)}</p>
      <p>Previous Close: ${stock.previousClose?.toFixed(2)}</p>

      <h3>Additional Details</h3>
      <p>Day Change: ${dayChange.toFixed(2)}</p>
      <p>Percent Change: {percentChange.toFixed(2)}%</p>
      <p>Intraday Range: ${intradayRange.toFixed(2)}</p>
    </div>
  )
}

export default StockDetail