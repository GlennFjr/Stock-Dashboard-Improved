import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts'

function PriceChart({ stocks }) {
  const data = stocks.map((stock) => ({
    symbol: stock.symbol,
    price: stock.price,
  }))

  return (
    <div className="chart-box">
      <h3>Current Price by Stock</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="symbol" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="price" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default PriceChart