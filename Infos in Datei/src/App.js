import './App.css';
import React, { useState } from "react";
/* 2
-- Daha önce olusturdugumuz db.json isimli belgeden verileri import ediyoruz.
-- Bu veriler array icerisinde objeler olarak yazilir.
-- export edilmez direkt istenilen isimle import edilir.
 */
import infos from "./db.json"


function App() {

  //1- state olusturulur
  //3- import edilen state baslangic degeri olarak useState icine tanimlanir.
  const [data, setData] = useState(infos);

  return (
    <div className="App">
      {/* 4 Baslik atilir ve Bootstrapten sablon secilir */}
      <h1 className='my-4'>useState'den Veri Cekme</h1>
      <div className='row'>
      {/* 5
      -- data bir array oldugu icin map methodu ile verileri tek tek yazdiriyoruz
      -- her bir veriyi bootstrapten cektigimiz sablon ile özellestirip yazdiriyoruz.
      -- key={index} yazilmak zorunda
      -- ilgili yerlere {} icerisine item. ve devaminda objenin icerisindeki basliklardan biri yazilmali
      -- 
    */}

        {data.map((item, index) => (
    <div className='col-3' key={index}>
          <div className="card"  style={{width: 18 + "rem"}}>
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{item.category}</h6>
              <p className="card-text">{item.title}</p>
              <a href="#" className="card-link">{item.color}</a>
              <a href="#" className="card-link">{item.id}</a>
            </div>
          </div>
      </div>
        ))}

      {/* 6
      -- {} arasindaki kisim bir component olarak ayri bir belgeye yazilabilir. 
      -- Daha sonra export ve import edilerek örnegin <CardComponent /> olarak kullanilabilir. 
      */}

        <h3>map sonrasinda yine istenilen html yazilmaya devam edilir</h3>

        
      </div>
    </div>
  );
}

export default App;
