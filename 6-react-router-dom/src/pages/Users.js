import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const Users = () => {

  //5A - Burada daha önceki projelerde de gördügümüz - verinin API dan cekilmesi - State icine konulmasi ve useEffect ile bir defa calistirilarak app baslangicinda hazir hale getirilmesi mevcuttur.
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);


  //6 Bu kisimda array olan bilgilerin map ile gezdirilerek bunun bir degiskene atanmasi vardir. Bu degisken de return kisminda kullanilmaktadir.
  //7 Link to => kisminda {user.name}'e tiklandiginda URL de ne yazacagi belirtilmistir. Map döngüsünde url devamina kullanici id verilmistir.
  //8 URL'e tanimlanan bu id userDetails.js belgesinde useParams kulanilarak cekilecektir. Böylelikle her isme tiklandiginda o isme ait detay ayri bir sayfada görüntülenebilecektir.
  //9 => devami icin userDetails.js dosyasina gidiniz.
  const userList = users.map((user) => (
    <li>
      <Link to={`/users/${user.id}`}>{user.name}</Link>
    </li>
  ));

  return (
    <>
      <Navbar />
      <ul>{userList}</ul>
    </>
  );
};

export default Users;
