import React from 'react'
import axios from "axios"
import { useState } from 'react';

const AddUser = () => {
    //STATES====================
    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        email: "",
        password: "",
    })

    //ADD PERSON====================
    const handleFormSubmit = async (e) => {
        await axios.post("http://localhost:5000/posts", formData)
        setFormData({
            name: "",
            mobile: "",
            email: "",
            password: "",
        })
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-5'>
                    <h1 className='text-center'>Add User Form</h1>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                    <input
                        type="email"
                        class="form-control"
                        id="exampleFormControlInput1"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Mobil No.</label>
                    <input
                        type="number"
                        class="form-control"
                        id="exampleFormControlInput1"
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input
                        type="email"
                        class="form-control"
                        id="exampleFormControlInput1"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Password</label>
                    <input
                        type="password"
                        class="form-control"
                        id="exampleFormControlInput1"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    />
                </div>
                <div class="mb-3">
                    <button onClick={handleFormSubmit} className='btn btn-success'>Add User</button>
                </div>
            </div>
        </div>
    )
}

export default AddUser  