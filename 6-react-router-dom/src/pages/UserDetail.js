import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
//9A - import islemi yapilmalidir
import { useParams } from 'react-router-dom';

const UserDetail = () => {

  //9B - state olusuturulmus ve bos obj atanmistir. Datanin tamami bir array olsa da buradaki durumda user bilgileri birer obj olarak tanimlanmistir.
  const [user, setUser] = useState({});

  //9C users/ devamina gelen her sey useParams tarafindan id olarak tanimlanir. Burada bu veri id degiskenine ataniyor.
  const id = useParams().id;
  
  //9D Belli bir kullanicinin detayli bilgilerine ulasmak icin yazilan fonksiyonda daha önce tanimlanan id kullanilir.
  // BU datalar da state'e gönderilir.
  const getUser = async (pUserId) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${pUserId}`
    );
    const data = await response.json();
    setUser(data);
  };


  useEffect(() => {
    getUser(id);
  }, []);

  return (
    <>
      <Navbar />

      {/* State de yer alan kullanici bilgileri ekrana yazdirilir.
      Böylece her kullanici icin teker teker sayfa tanimlamak zorunda kalmayiz. Sayfalar otomatik tanimlanir.
      */}
      <div>{user.name}</div>
      <div>{user.username}</div>
      <div>{user.email}</div>
      <div>{user.phone}</div>
      <div>{user.website}</div>
    </>
  );
};

export default UserDetail;
