
import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/* 
1- React router dom ile farkli sayfalar arasinda gecis nasil yapilir.
 -- react-dom ve react.router-dom npm ile yüklenmeli
 -- createRoot, createBrowserRouter, RouterProvider import edilmeli
*/
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './pages/About';
import Users from './pages/Users';
import Categories from './pages/Categories';
import AdminPanel from './pages/AdminPanel';
import UserDetail from './pages/UserDetail';

//2- createBrowserRouter ile yeni bir router tanimayacagiz. 
// RouterProvider ile routeri gönderecegiz. Artik index.js icerisinde App cagirmaya gerek kalmayacak.
// Burada sadece URL belirlemesi yapacagiz. Hangi URL de hangi komponent gelecegini belirtecegiz.
// Navbar sayfasinda da hangi butona tikladigimizda hangi URL'ye gidilecegi belirtilir.

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'about',
    element: <About />,
  },
  {
    path: 'users',
    element: <Users />,
  },
  {
    path: 'categories',
    element: <Categories />,
  },
  {
    path: 'admin-panel',
    element: <AdminPanel />,
  },
  {
    path: 'users/:id',
    element: <UserDetail />,
  },
]);

createRoot(document.getElementById('root')).render(
  //3 - Provider ile daha önce olusturdugumuz router gönderilecek.
  //4- Devami icin components/Navbar.js componenetine gidiniz.
  <RouterProvider router={router} />
);



reportWebVitals();
