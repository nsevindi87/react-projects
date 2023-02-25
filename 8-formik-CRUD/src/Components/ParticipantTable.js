import React from 'react'
import {confirmDialog} from "../ConfirmDialog"
import { deleteParticipant } from '../Service/service'
import Swal from 'sweetalert2'

const ParticipantTable = ({ participants, getData, handleEdit }) => {

    //==========DELETE============================
    const handleDelete = async(pId) => {
        if (await confirmDialog()){
            try {
                await deleteParticipant(pId)
                getData()
            } catch (error) {
                console.log(error)
            }
            await Swal.fire("Deleted!", "the user has been deleted.", "success")
        }
    }

    return (
        <div>
            <table className=" table table-dark table-hover table-bg table-bordered  table-responsive" >
                <thead>
                    <tr>
                        <th>Sira</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        participants.map((particip, index) => (
                            <tr key={index}>
                                <th>{index+1}</th>
                                <td>{particip.first_name}</td>
                                <td>{particip.last_name}</td>
                                <td>{particip.email}</td>
                                <td>
                                    <button className="btn btn-danger mx-2" onClick={()=>handleDelete(particip.id)} aria-label="delete user">
                                        DELETE
                                    </button>
                                    <button className="btn btn-primary mx-2" 
                                    aria-label="edit user" onClick={() => handleEdit(particip)}>
                                        EDIT
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    )
}

export default ParticipantTable
