    import axios from "axios"

    const api = axios.create({
        baseURL :"http://localhost:8000"
    });

    export const getPost =() =>{
        return api.get("/clients")
    }

    // delete mate method
    export const deletePost =(_id) =>{
        return api.delete(`/clients/${_id}`);
    }


  // post mate
  export const postData =(post)=>{
    return api.post("/clients",post)
  }

  export const updatePostData =(_id,post)=>{
        return api.patch(`/clients/${_id}`, post);

  }
