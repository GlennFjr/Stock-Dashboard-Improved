import {
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts'

function ChangeChart({ stocks }) {
  const data = stocks.map((stock, index) => ({
    x: index, // just spacing points
    y: Number(
      (((stock.price - stock.previousClose) / stock.previousClose) * 100).toFixed(2)
    ),
    symbol: stock.symbol,
  }))

  return (
    <div className="chart-box">
      <h3>Percent Change from Previous Close</h3>
      <ResponsiveContainer width="100%" height={300}>
        <ScatterChart>
          <CartesianGrid />
          <XAxis dataKey="symbol" type="category" name="Stock" />
          <YAxis dataKey="y" name="% Change" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter data={data} />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ChangeChart