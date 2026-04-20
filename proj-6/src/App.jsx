import { useState, useEffect } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import './App.css'

const API_KEY = import.meta.env.VITE_APP_FINNHUB_API_KEY

function App() {
  const [list, setList] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const [directionFilter, setDirectionFilter] = useState('All')
  const [priceFilter, setPriceFilter] = useState('All')
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')

  const location = useLocation()
  const isDashboard = location.pathname === '/'

  const stocks = [
    { name: 'Joby Aviation', symbol: 'JOBY' },
    { name: 'AgEagle Aerial Systems', symbol: 'UAVS' },
    { name: 'Wedbush AI Revolution ETF', symbol: 'IVES' },
    { name: 'MP Materials', symbol: 'MP' },
    { name: 'Palantir Technologies', symbol: 'PLTR' },
    { name: 'USA Rare Earth', symbol: 'USAR' },
    { name: 'Energy Fuels', symbol: 'UUUU' },
    { name: 'Serve Robotics', symbol: 'SERV' },
    { name: 'Evolv Technologies', symbol: 'EVLV' },
    { name: 'Coca-Cola', symbol: 'KO' }
  ]

  useEffect(() => {
    const fetchStockData = async () => {
      const stockData = await Promise.all(
        stocks.map(async (stock) => {
          const response = await fetch(
            `https://finnhub.io/api/v1/quote?symbol=${stock.symbol}&token=${API_KEY}`
          )
          const json = await response.json()

          return {
            name: stock.name,
            symbol: stock.symbol,
            price: json.c,
            high: json.h,
            low: json.l,
            open: json.o,
            previousClose: json.pc
          }
        })
      )

      setList(stockData)
    }

    fetchStockData().catch(console.error)
  }, [])

  const filteredList = list.filter((stock) => {
    const matchesSearch =
      stock.name.toLowerCase().includes(searchInput.toLowerCase()) ||
      stock.symbol.toLowerCase().includes(searchInput.toLowerCase())

    const matchesDirection =
      directionFilter === 'All' ||
      (directionFilter === 'Up' && stock.price >= stock.previousClose) ||
      (directionFilter === 'Down' && stock.price < stock.previousClose)

    const matchesPrice =
      priceFilter === 'All' ||
      (priceFilter === 'Above 10' && stock.price > 10) ||
      (priceFilter === '10 or Below' && stock.price <= 10)

    const matchesMinPrice = minPrice === '' || stock.price >= Number(minPrice)
    const matchesMaxPrice = maxPrice === '' || stock.price <= Number(maxPrice)

    return (
      matchesSearch &&
      matchesDirection &&
      matchesPrice &&
      matchesMinPrice &&
      matchesMaxPrice
    )
  })

  const totalStocks = filteredList.length

  const averagePrice =
    filteredList.length > 0
      ? (
          filteredList.reduce((sum, stock) => sum + stock.price, 0) /
          filteredList.length
        ).toFixed(2)
      : 0

  const highestPrice =
    filteredList.length > 0
      ? Math.max(...filteredList.map((stock) => stock.price)).toFixed(2)
      : 0

  const lowestPrice =
    filteredList.length > 0
      ? Math.min(...filteredList.map((stock) => stock.price)).toFixed(2)
      : 0

  return (
    <div className="whole-page">
      <aside className="sidebar">
        <h2>Stock Dashboard Sidebar</h2>

        <nav>
          <ul className="sidebar-links">
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/market-summary">Market Summary</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="dashboard">
        {isDashboard && (
          <>
            <h1>Stock Dashboard</h1>
            <h3>10 Stock Tickers</h3>

            <div className="controls">
              <input
                type="text"
                placeholder="Search by stock name or ticker..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="search-bar"
              />

              <select
                value={directionFilter}
                onChange={(e) => setDirectionFilter(e.target.value)}
                className="filter-dropdown"
              >
                <option value="All">All Stocks</option>
                <option value="Up">Up</option>
                <option value="Down">Down</option>
              </select>

              <select
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value)}
                className="filter-dropdown"
              >
                <option value="All">All Prices</option>
                <option value="Above 10">Above $10</option>
                <option value="10 or Below">$10 or Below</option>
              </select>

              <input
                type="number"
                placeholder="Min price"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
              />

              <input
                type="number"
                placeholder="Max price"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
            </div>
          </>
        )}

        <Outlet
          context={{
            list,
            filteredList,
            totalStocks,
            averagePrice,
            highestPrice,
            lowestPrice
          }}
        />
      </main>
    </div>
  )
}

export default App