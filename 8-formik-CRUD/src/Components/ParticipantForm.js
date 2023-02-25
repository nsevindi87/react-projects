import React from 'react'

const ParticipantForm = ({formik, isEditing, setIsEditing}) => {
  return (
    <div>
      <form onSubmit={(e)=>{
        e.preventDefault()
        formik.handleSubmit()    
      }}>
        <h1>Add Participant</h1>
        <div className='mb-3'>
            <label htmlFor="nameInput" className='form-label'>First Name</label>
            <input type="text"
                    className='form-control'
                    id='nameInput'
                    name='first_name'
                    value={formik.values.first_name}
                    onChange={formik.handleChange}
                    />
        </div>
        <div className='mb-3'>
            <label htmlFor="lastnameInput" className='form-label'>Last Name</label>
            <input type="text"
                    className='form-control'
                    id='lastnameInput'
                    name='last_name'
                    value={formik.values.last_name}
                    onChange={formik.handleChange}/>
        </div>
        <div className='mb-3'>
            <label htmlFor="emailInput" className='form-label'>E-mail</label>
            <input type="email"
                    className='form-control'
                    id='emailInput'
                    name='email'
                    value={formik.values.email}
                    onChange={formik.handleChange}/>
        </div>
        <button type='submit' className='btn btn-success w-100'>
            {!isEditing ? "submit" : "update"}
        </button>
        {isEditing && <button type="button" onClick={()=>{setIsEditing(false); formik.resetForm()}}className='btn btn-danger my-2 w-100'>Cancel</button>}
      </form>
    </div>
  )
}

export default ParticipantForm
