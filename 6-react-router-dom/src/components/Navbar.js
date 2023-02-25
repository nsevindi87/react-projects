//4A - Navlink import edilir. 

import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>

      {/* 
      4B - Buton tanimlamasi ve hangi butona tiklandiginda hangi URL'e gidilmesi gerektigi belirtilir.
       -- Ilgili URL ye gidildiginde de hangi komponenetin cagrilacagini index.js de belirtildigini daha önce belirtmistik.
       -- Navlink import et ve kullan. 
       --to kismina ilgili URL yazilmali
      */}
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/users'>Users</NavLink>
      <NavLink to='/categories'>Categories</NavLink>
      <NavLink to='/admin-panel'>Admin Panel</NavLink>
      <NavLink to='/login'>Login</NavLink>
    </div>
  );

  // 5- Artik aldigimiz datalari ekrana yazdima kismi geldi. Devami icin users.js belgesine gidiniz.
};

export default Navbar;
