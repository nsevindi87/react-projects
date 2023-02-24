/* 1- Bu projede jsonplaceholder isimli bir web adresinden veri cekecegiz.
Json server ile ilgili projeden daha sade bir proje olacak. Cunkü kendimiz bir server kurmayacagiz. Hazir olan bir serverdan veri cekecegiz.
*/

/* 2
-- npm i boostrap (react-bootstrap / reactstrap / metarialUI olabilir) ayrica <link ... > de index.html dosyasina eklenmeli. Veya bootstrap css dosyasi index.js dosyasinda import edilmeli.

-- API olarak kullanacagimiz adres https://jsonplaceholder.typicode.com/posts adresidir.
 */

import './App.css';
import React, { useState, useEffect } from "react";


function App() {

  //3- state olusturulur ve bos bir array tanimlanir
  const [data, setData] = useState([]);

  //4 -  URL den datalari alabilmek icin bir fonksiyon yazacagiz. Bu fonksiyon API verilerini almak icin yazilir. Bu nedenle ÖNEMLIDIR. MANTIGINI IYI KAVRAMAK LAZIM DEVAMLI BU FONKSIYON YAZILACAK!!!!
  const getData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const infos = await response.json();
      // Burada infos isimli degiskene verilerin kullanilabilir hali tanimlandi. Bir sonraki adimda bu verileri kendi degiskenimize tanimlayacagiz 
      setData(infos);
    } catch (error) {
      console.log(error.message);
    }
  };

  //5 Uygulamanin ilk baslangicinda verilerin  cekilerek hazir hale getirilmesi icin useEffect kullanilir. Bütün verilerin devamli degil de bir kez cekilerek diger adimlar icin hazir hale getirmek icin [] kullanmamiz gerekir.
  useEffect(() => {
    getData();
  }, []);

  
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
      */}

        <h3>map sonrasinda yine istenilen html yazilmaya devam edilir</h3>

        
      </div>
    </div>
  );
}

export default App;
