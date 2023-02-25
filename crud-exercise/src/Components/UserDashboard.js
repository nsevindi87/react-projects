import React, { useState, useEffect } from 'react'
import axios from 'axios'
import UpdateUser from './UpdateUser'

const UserDashboard = () => {
    //STATES====================
    const [data, setData] = useState([{}])
    const [updateData, setUpdateData] = useState({
        name: "",
        mobile: "",
        email: "",
        password: "",
        id:""
    })

    //GET DATA ====================
    const getData = async () => {
        await axios
            .get("http://localhost:5000/posts")
            .then((res) => setData(res.data))
    }

    //DELETE PERSON ====================
    const handleDelete = async (id) => {
        await axios.delete("http://localhost:5000/posts/" + id)
        getData()
    }
    
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
                    {data && data.map((user) => (
                        <tr>
                            <th scope="row">{user.id}</th>
                            <td>{user.name}</td>
                            <td>{user.mobile}</td>
                            <td>{user.email}</td>
                            <td style={{ display: "flex", justifyContent: "space-evenly" }}>
                                <button className='btn btn-info' data-bs-toggle="modal" data-bs-target="#exampleModal"
                                onClick={()=>setUpdateData({
                                    name:user.name,
                                    mobile:user.mobile,
                                    email:user.email,
                                    password:user.password,
                                    id:user.id
                                })}>Edit</button>
                                <button className='btn btn-danger' onClick={() => handleDelete(user.id)}>Delete</button>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

        <UpdateUser getData={getData} setUpdateData={setUpdateData} updateData={updateData}/>
        </div>
    )
}

export default UserDashboard