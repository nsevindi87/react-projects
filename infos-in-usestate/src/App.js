import './App.css';
import React, { useState } from "react";


function App() {

  //1- state olusturulur ve data girilir
  const [data, setData] = useState([
    {
      "userId": 1,
      "id": 1,
      "title": "quidem molestiae enim",
      "category": "computer",
      "color": "black"
    },
    {
      "userId": 2,
      "id": 2,
      "title": "sunt qui excepturi placeat culpa",
      "category": "phone",
      "color": "green"
    },
    {
      "userId": 3,
      "id": 3,
      "title": "omnis laborum odio",
      "category": "laptop",
      "color": "red"
    },
    {
      "userId": 4,
      "id": 4,
      "title": "non esse culpa molestiae omnis sed optio",
      "category": "camera",
      "color": "orange"
    }
  ]);







  return (
    <div className="App">
      {/* 2 Baslik atilir ve Bootstrapten sablon secilir */}
      <h1>useState'den Veri Cekme</h1>
      <div className='row'>
      <div className='col-4'>
      {/* 
      -- data bir array oldugu icin map methodu ile verileri tek tek yazdiriyoruz
      -- her bir veriyi bootstrapten cektigimiz sablon ile özellestirip yazdiriyoruz.
      -- 
       */}
        {data.map((item, index) => (
          <div className="card" key={index} style={{width: 18 + "rem"}}>
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{item.category}</h6>
              <p className="card-text">{item.title}</p>
              <a href="#" className="card-link">{item.color}</a>
              <a href="#" className="card-link">{item.id}</a>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default App;
