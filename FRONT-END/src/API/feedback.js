export const GetFeedback = async () => {
 try {
   const response = await fetch(`http://127.0.0.1:8000/api/feedback`, {
    method: "GET",
    headers: {
        "Content-Type" : "application/json"
    }
   });

   if(!response.ok){
     console.log('could not fetch any feedback')
   }

   const data = await response.json()
   console.log('fetch', data)
   return data;

 } catch (error) {
    console.log(error.message)
 }
}

export const GetFeedbackByStatus = async (status) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/feedback?status=${status}`);
      const data = await response.json()
      console.log('fetch', data)
      return data;
   
    } catch (error) {
       console.log(error.message)
    }
   }

export const PostFeedback = async (FormData) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/feedback`, {
       method: "POST",
       body: FormData
      });
   
      if(!response.ok){
        console.log('could not post the feedback')
      }
   
      const data = await response.json()
      console.log('it is posted successuffly', data)
      return data;
   
    } catch (error) {
       console.log(error.message)
    }
}

export const UpdateFeedback = async (id) => {
  try {
     const response = await fetch(`http://127.0.0.1:8000/api/feedback/${id}`, {
        method: "PUT"
     });

     const data = await response.json();
     console.log('it is updated successuffly', data)
     return data;

  } catch (error) {
    console.log(error.message)
  }
}

export const DestroyFeedback = async (id) => {
    try {
       const response = await fetch(`http://127.0.0.1:8000/api/feedback/${id}`, {
          method: "DELETE"
       });
  
       const data = await response.json();
       console.log('it is deleted successuffly', data)
       return data;
  
    } catch (error) {
      console.log(error.message)
    }
}