/* 1
-- Daha önce olusturdugumuz db.json isimli belgeyi server haline getirip buradan URL ile veri cekecegiz. 
-- Ilk iki projede veriler sabitti. Sadece bu verileri Card template ile ekrana yazdirabiliyorduk.
-- bu sefer URL'den veri sildigimizde ve ekledigimizde db.json dosyamizdaki verilerin de degistigini görebiliriz.
-- gercek API uygulamasina yakindir.
-- db.json dosyasi object olmali ve  endpoint olmali. Benimkinde bu datas olarak belirtildi. 
*/

/* 2
-- npm i boostrap (react-bootstrap / reactstrap / metarialUI olabilir) ayrica <link ... > de index.html dosyasina eklenmeli. Veya bootstrap css dosyasi index.js dosyasinda import edilmeli.

-- npm i json-server 
package.json dosyasina "script" kismina asagidaki kod eklenmeli
    "server": "json-server --watch src/db.json -p 3002"
Hangi dosyayi server olarak kullanmak istiyorsaniz o dosya adi yukaridaki watch kismindan sonrasina yazilacak. Ayrica npm start ile baslattigimiz projeden baska bir portta serverin calismasi icin port eklenmeli. Ben -p 3002 yazdim. Burasi herhangi bir sayi olabilir.
-- serveri baslatmak icin terminale = npm run server yazilir.
-- Resources olarak cikan URL bizim API adresimiz olacaktir.
Benim adresim = http://localhost:3002/datas
 */

import './App.css';
import React, { useState, useEffect } from "react";


function App() {

  //3- state olusturulur ve bos bir array tanimlanir
  const [data, setData] = useState([]);

  //4 - olusturdugumuz URL den datalarimizi alabilmek icin bir fonksiyon yazacagiz. Bu fonksiyon hem simdiki verilerimizi almak icin hem de gercek internet API verilerini almak icin yazilir. Bu nedenle ÖNEMLIDIR. MANRIGINI IYI KAVRAMAK LAZIM DEVAMLI BU FONKSIYON YAZILACAK!!!!
  const getData = async () => {
    try {
      const response = await fetch('http://localhost:3002/datas');
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
              <p className="card-text">{item.title}</p>
              <a href="#" className="card-link">{item.color}</a>
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
