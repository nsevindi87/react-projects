import React, {useState} from 'react';
import axios from 'axios'

const UpdateUser = ({getData, setUpdateData,updateData}) => {


    //UPDATE PERSON ====================
    //16- Bu fonksiyon ile ilgili id'ye güncellenen veri axios.put ile güncellenir. Ve güncel data tekrar cagrilir.
    const handleUpdate = async(id)=>{
        await axios.put(`http://localhost:5000/posts/${updateData.id}`, updateData)
        getData()
    }

  return (
    <div>
        {/* 13- Gönderilen veriler value ile input icerisine yazdirilir.
        14- Input icerisindeki veriler onChange ile degistirilir. */}
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">User Update</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                        <input
                            type="email"
                            class="form-control"
                            id="exampleFormControlInput1"
                            value={updateData.name}
                            onChange={(e) => setUpdateData({ ...updateData, name: e.target.value })}
                        />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Mobil No.</label>
                        <input
                            type="number"
                            class="form-control"
                            id="exampleFormControlInput1"
                            value={updateData.mobile}
                            onChange={(e) => setUpdateData({ ...updateData, mobile: e.target.value })}
                        />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input
                            type="email"
                            class="form-control"
                            id="exampleFormControlInput1"
                            value={updateData.email}
                            onChange={(e) => setUpdateData({ ...updateData, email: e.target.value })}
                        />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Password</label>
                        <input
                            type="password"
                            class="form-control"
                            id="exampleFormControlInput1"
                            value={updateData.password}
                            onChange={(e) => setUpdateData({ ...updateData, password: e.target.value })}
                        />
                    </div>
                </div>
                <div class="modal-footer">
                    {/* 17- Iptal islemi icin  data-bs-dismiss="modal" kullanilmali*/}
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    {/* 15- Gerekli güncellemeler yapildiktan sonra butona yeni bir fonksiyon tanimlanir.  */}
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={()=>handleUpdate()}>Update User</button>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default UpdateUser