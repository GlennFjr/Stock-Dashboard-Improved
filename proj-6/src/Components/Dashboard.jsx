import { useOutletContext } from 'react-router-dom'
import TickerInfo from './TickerInfo.jsx'

function Dashboard() {
  const { filteredList } = useOutletContext()

  return (
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
  )
}

export default Dashboard