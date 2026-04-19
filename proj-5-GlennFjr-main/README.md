# Web Development Project 5 - *Stock Dashboard*

Submitted by: **Glenn Fortunato**

This web app: **Displays a dashboard of stocks, including name, ticker symbol, price, close/open prices, and a red or green color based on whether the stock is up or down for the day.  The application uses Finnhub's API to fetch stock information, as current as the previous day's closing prices.**

Time spent: **3.5** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The site has a dashboard displaying a list of data fetched using an API call**
  - The dashboard should display at least 10 unique items, one per row
  - The dashboard includes at least two features in each row
- [x] **`useEffect` React hook and `async`/`await` are used**
- [x] **The app dashboard includes at least three summary statistics about the data** 
  - The app dashboard includes at least three summary statistics about the data, such as:
    - *Total Stocks, Average Price, and Lowest Price of stocks currently displayed.*
- [x] **A search bar allows the user to search for an item in the fetched data**
  - The search bar **correctly** filters items in the list, only displaying items matching the search query
  - The list of results dynamically updates as the user types into the search bar
- [x] **An additional filter allows the user to restrict displayed items by specified categories**
  - The filter restricts items in the list using a **different attribute** than the search bar 
  - The filter **correctly** filters items in the list, only displaying items matching the filter attribute in the dashboard
  - The dashboard list dynamically updates as the user adjusts the filter

The following **optional** features are implemented:

- [x] Multiple filters can be applied simultaneously
- [x] Filters use different input types
  - e.g., as a text input, a dropdown or radio selection, and/or a slider
- [x] The user can enter specific bounds for filter values

The following **additional** features are implemented:

* [x] List anything else that you added to improve the site's functionality!
    Added dynamic colors to the price of each stock, so that they appear green if the current price is greater than or equal to the previous closing price, or red if it is less than it.
1
## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='Proj5_GFortunato.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with LICECap

## Notes

I initially tried to use a different API for stock data called MarketStack.  It mentioned 100 API calls per month free, however I soon realized that each API call was per Ticker symbol.  So when working on my app, I ended up using 60 of my API calls before finishing the required features, since I was working with 10 ticker symbols at a time.  I also struggled with pulling specific stocks using Finnhub's API, and ended up hard-coding the names/tickers of the 10 I wanted to display, and instead opted to fetch information regarding these using the API key.

## License

    Copyright [2026] [Glenn Fortunato]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
