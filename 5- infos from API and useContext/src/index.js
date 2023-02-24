import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DataContextProvider from "./Context/dataContext"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 
    4A
    -- 3C de yazilan fonksiyon öncelikle import edilir.
    -- Fonksiyon <App/> 'e sarmalanir. Böylecek bütün komponenetlerde bu veriler kullanilabilir hale gelir.

    5- Alinan verilerin komponenet icine cekilmesi ve kullanilmasi icin APP.js belgesine gidiniz.
    */}
    <DataContextProvider>
      <App />
    </DataContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
