import React, { useState, useEffect } from 'react'
import axios from 'axios'
import UpdateUser from './UpdateUser'

const UserDashboard = () => {
    //!STATES====================
    //1- Bütün datalarin yer alacagi bir state olustur
    const [data, setData] = useState([{}])
    const [updateData, setUpdateData] = useState({
        name: "",
        mobile: "",
        email: "",
        password: "",
        id:""
    })

    //!GET DATA ====================
    //2- axios.get ile ilgili API dan veri cekilir ve State'e tanimlanir
    const getData = async () => {
        await axios
            .get("http://localhost:5000/posts")
            .then((res) => setData(res.data))
    }

    //!DELETE PERSON ====================
    //6- Tanimlanan fonksiyonda axios.delete ile parametre ID üzerinden silme islemi yapilir.
    //7-Ekleme islemi icin AddUser.js belgesine gidiniz.
    const handleDelete = async (id) => {
        await axios.delete("http://localhost:5000/posts/" + id)
        getData()
    }
    
    //3- Alinan data render edilir. Ayrica data state'i her degistiginde tekrar render edilir.
    useEffect(() => {
        getData()
    }, [data])


    return (
        <div>
            <div className='container mt-5'>
            <hr/>
            <h1>User Dashboard</h1>
            <table className="table table-dark table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* 4- State icerisindeki veriler map ile yazdirilir. */}
                    {data && data.map((user) => (
                        <tr>
                            <th scope="row">{user.id}</th>
                            <td>{user.name}</td>
                            <td>{user.mobile}</td>
                            <td>{user.email}</td>
                            <td style={{ display: "flex", justifyContent: "space-evenly" }}>

                                {/* 11-Edit Butonuna bir fonksiyon tanimlanir. Bu fonksiyonda kullanici bilgileri STATE'e  alinir.  */}
                                <button className='btn btn-info' data-bs-toggle="modal" data-bs-target="#exampleModal"
                                onClick={()=>setUpdateData({
                                    name:user.name,
                                    mobile:user.mobile,
                                    email:user.email,
                                    password:user.password,
                                    id:user.id
                                })}>Edit</button>
                                {/* 5- DELETE butonuna fonksiyon atanir ve ID parametre olarak gönderilir */}
                                <button className='btn btn-danger' onClick={() => handleDelete(user.id)}>Delete</button>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
         {/* 12- Update icin bir acilir pencere tanimlanir ve import edilir. Daha önce STATE icine alinan veriler yeni acilan acilir pencereye gönderilir.
         13--Devami icin UpdateUser.js belgesine */}                       
        <UpdateUser getData={getData} setUpdateData={setUpdateData} updateData={updateData}/>
        </div>
    )
}

export default UserDashboard