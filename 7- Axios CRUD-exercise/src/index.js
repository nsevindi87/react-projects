import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

/* 
-- Verileri alabilecegimiz bir json-server kurulmali (3. projede detayli anlatilmaktadir)
-- Bootstrap ve axios yüklenmelidir.
-- Axios fetch yerine kullanilacaktir. 

--Projede sirasiyla
Veriler CEKILECEK (User Dashboard)
Veriler liste olarak yazdirilacak (User Dashboard)
Listaye kisi EKLENECEK (Add User)
Listeden kisi SILINECEK (User Dashboard)
Listedeki kisi UPDATE edilecek (Update USer)

TOPLAM 17 Madde
*/