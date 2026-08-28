# Stock Dashboard

Stock Dashboard is a React application that displays market data for a selected group of stocks using the Finnhub API.

The dashboard shows stock names, ticker symbols, current prices, opening and previous closing prices, along with visual indicators showing whether a stock is up or down.

## Features

- Display data for multiple stocks
- Show ticker symbol, price, open, and previous close
- Color-code stock prices based on daily performance
- Search stocks by name or ticker
- Filter displayed stocks by price range
- Apply multiple filters at the same time
- View summary statistics for the current dataset
- Dynamically update results as filters change

## Dashboard Statistics

The application calculates summary information for the displayed stocks, including:

- Total number of stocks
- Average stock price
- Lowest stock price

## How It Works

Stock data is fetched from the Finnhub API using asynchronous requests.

The application uses React's `useEffect` hook to retrieve stock information when the dashboard loads, while `async` and `await` are used to handle the API requests.

A predefined list of ticker symbols is used to request quote data for each stock.

Users can search and filter the displayed results without making additional API requests. The dashboard updates dynamically based on the current search query and selected filters.

Stock prices are also displayed with dynamic styling:

- Green when the current price is greater than or equal to the previous closing price
- Red when the current price is lower than the previous closing price

## Tech Stack

- React
- JavaScript
- CSS
- Finnhub API
- React Hooks (`useState`, `useEffect`)

## Demo

![Stock Dashboard Demo](Proj5_GFortunato.gif)

## What I Learned

This project gave me more experience working with external APIs and asynchronous data fetching in React.

I also practiced:

- Using `useEffect` for API requests
- Working with `async` and `await`
- Managing API response data in React state
- Creating dynamic search and filtering behavior
- Calculating summary statistics from fetched data
- Applying conditional styling based on data values
