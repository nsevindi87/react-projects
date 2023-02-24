//3A import islemleri
import { createContext, useState, useEffect } from "react";

//3B - createContext kullanilarak bir degisken olusturulur ve export edilir. 
export const DataContext = createContext("");

//3C - State ve bu statelerin kullanimi icin fonksiyon olustur.
// children parametresi verinin bütün komponentlerde kullanilmasi icin ÖNEMLIDIR!!!

const DataContextProvider = ({ children }) => {

//3D - Stateler tanimlanir ve baslangic degeri olarak bos array atanabilir.
  const [data, setData] = useState([]);

// 3E -  URL den datalari alabilmek icin bir fonksiyon yazacagiz. Bu fonksiyon API verilerini almak icin yazilir. Bu nedenle ÖNEMLIDIR. MANTIGINI IYI KAVRAMAK LAZIM DEVAMLI BU FONKSIYON YAZILACAK!!!!
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

  // 3F - Uygulamanin ilk baslangicinda verilerin  cekilerek hazir hale getirilmesi icin useEffect kullanilir. Bütün verilerin devamli degil de bir kez cekilerek diger adimlar icin hazir hale getirmek icin [] kullanmamiz gerekir.
  useEffect(() => {
    getData();
  }, []);


  //3G - 3B de olusturulan degisken .Provider ile return edilir. 
  //3H - value olarak olusturulan stateler tanimlanir.
  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );

  //4- Verilerin tüm komponenetlerde kullanilabilmesi islemleri icin  index.js belgesine gidiniz.
};

export default DataContextProvider;
