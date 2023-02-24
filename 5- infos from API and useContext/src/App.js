/* 1- Bu projede jsonplaceholder isimli bir web adresinden veri cekecegiz.
 -- Bu verileri component icerisinde State degil ayri bir klasör ve belgede context icerisine tanimalayacagiz. 
-- Context iceriisnde tanimladigimiz veriyi App icerisinden cekip kullanacagiz. Ayni yöntemle bu veriler istenilen componentte cagrilabilir.
*/

/* 2
-- npm i boostrap (react-bootstrap / reactstrap / metarialUI olabilir) ayrica <link ... > de index.html dosyasina eklenmeli. Veya bootstrap css dosyasi index.js dosyasinda import edilmeli.

-- API olarak kullanacagimiz adres https://jsonplaceholder.typicode.com/posts adresidir.
 */

import './App.css';
import React, { useContext } from "react";
import { DataContext } from './Context/dataContext';


function App() {

  //3 - dataContext.js => verilerle ilgili islemler icin bu dosyaya gidin.
 
//5A - 3B ile olusturulan degisken ve useContext import edilir. 
//5B - Context icerisinde elde edilen ve value ile gönderilen veri istenilen komponente bu sekilde cekilir. Artik kullanima hazir. Aciklamasi cekmesinden uzun.
const {data,setData} = useContext(DataContext)
  
  
  return (
    <div className="App">
      {/* 6 Baslik atilir ve Bootstrapten sablon secilir */}
      <h1 className='my-4'>Json Server'dan Veri Cekme</h1>
      <div className='row'>
      {/* 7
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
              <p className="card-text">{item.body}</p>
              <a href="#" className="card-link">{item.title}</a>
              <a href="#" className="card-link">{item.id}</a>
            </div>
          </div>
      </div>
        ))}

      {/* 8
      -- {} arasindaki kisim bir component olarak ayri bir belgeye yazilabilir. 
      -- Daha sonra export ve import edilerek örnegin <CardComponent /> olarak kullanilabilir. 
      */}import { useContext } from 'react';


        <h3>map sonrasinda yine istenilen html yazilmaya devam edilir</h3>

        
      </div>
    </div>
  );
}

export default App;
