import './App.css';
import ParticipantForm from './Components/ParticipantForm';
import ParticipantTable from './Components/ParticipantTable';
import { useState } from 'react';
import { useEffect } from 'react';
import { createParticipant, getParticipants, updateParticipant } from './Service/service';
import { useFormik } from "formik";
import { alertWithMessage } from "./AlertWithMessage"

function App() {
  //======= STATES =================================
  const [participants, setParticipants] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [userId, setUserId] = useState(null);
  
  
  //======= GetData =================================
  const getData = async () => {
    try {
      const participantsData = await getParticipants();
      setParticipants(participantsData)
    } catch (error) {
      setError(error)
    }
  }
  
  
  //======= USEEFFECT =================================
  useEffect(()=>{
    try {
      setLoading(true)
      getData()
    } catch (error) {
      console.log(error)
    }finally {
      setLoading(false)
    }
  },[])

  //=======UPDATE-1 Verileri inputa getir =================================
  const handleEdit = (pParticipant) => {
    setIsEditing(true)
    setUserId(pParticipant.id)
    formik.setValues({
      first_name: pParticipant.first_name,
      last_name: pParticipant.last_name,
      email: pParticipant.email,
    })
  }

  //===== UPDATE-2 Verileri düzelt ve yeni olustur=====
  const handleUserUpdate = async (pValues) => {
    const updatedParticipant = {
        first_name: pValues.first_name,
        last_name: pValues.last_name,
        email: pValues.email,
      };
      try {
        await updateParticipant(userId, updatedParticipant)
        getData();
        alertWithMessage("Participant edited successfully")
        
      } catch (error) {
        setError(error)
      }
      setIsEditing(false)
    }
  
  //======= Yeni Kullanici verisini alma ve olusturma
  const handleSubmit = async (pValues) => {
    const newParticipant = {
      first_name: pValues.first_name,
      last_name: pValues.last_name,
      email: pValues.email,
    };
    
    try {
      await createParticipant(newParticipant);
      alertWithMessage("Participant added successfully.")
      getData()
    } catch (error) {
      setError(error)
    }
  }

  //======= FORMIK =================================
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name:"",
      email:""
    },
    
    onSubmit: (values, {resetForm})=>{
      if(!isEditing){
        handleSubmit(values);
      }else{
        handleUserUpdate(values);
      }
      resetForm()
    }

  })
  
  //======= LOADING and ERROR =================================
  if(loading) return <p style={{color:"white"}}>Loading...</p>
  if(error) return <p style={{color:"white"}}>An error occured: {error.message}</p>



  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-12 text-start">
            <ParticipantForm 
            formik={formik}
            isEditing={isEditing}
            setIsEditing={setIsEditing}/>
          </div>
          <div className="col-lg-7 col-12">
            <ParticipantTable 
            participants={participants}
            getData={getData}
            handleEdit={handleEdit}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
