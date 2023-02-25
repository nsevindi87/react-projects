
  //======= BASE_URL ===============================
  const BASE_URL = 'http://dev.hicoders.cloud/playground/api/v1/User'


//!======= GET Participant =================================
export const getParticipants = async () => {
  try {
    const response = await fetch(BASE_URL);
    const json = await response.json()
    if(response.ok){
      return json
    }else{
      throw new Error(response.message)
    }
  } catch (error) {
    throw error
  }
}

//!======= CREATE Participant =================================
export const createParticipant = async (pParticipant) => {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    body: JSON.stringify(pParticipant),
    headers: { 'Content-Type': 'application/json'},
  });
  const json = await response.json();
  if(response.ok){
    return json
  }else{
    throw new Error(response.message)
  }
}

//!======= DELETE Participant =================================
export const deleteParticipant = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
    });
    const json = await response.json();
    console.log("tiklandi")
    if(response.ok){
      return json
    }else{
      throw new Error(response.message)
    }
  }catch(error){
    throw error
  }
}

//!======= UPDATE Participant =================================
export const updateParticipant = async (pId, pUpdatedParticipant) => {
  try {
    const response = await fetch(`${BASE_URL}/${pId}`,{
      method: "PUT",
      body: JSON.stringify(pUpdatedParticipant),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json();
    if (response.ok) {
      return json;
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    throw error;
  }
}