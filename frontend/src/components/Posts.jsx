import    { useEffect, useState } from 'react';
import { deletePost, getPost } from '../api/PostApi';
import { Form } from './Form';

export const Posts = () => {
  const [data,setData] = useState([]);
  const [updateData, setUpdateData] = useState({});

  const getPostData = async () => {
    const res = await getPost();
    console.log(res.data);
    setData(res.data);
  };

  //finction to delete post
  const handleDeletePost = async (_id) => {
    try {
      const res = await deletePost(_id); // Make sure to pass the correct `id`

      if (res.status === 200) {
        const updatedData = data.filter((post) => post._id !== _id);
        setData(updatedData); // Update the state to remove the deleted post
        console.log('Post deleted successfully',res.status);
      } else {
        console.log('Failed to delete post', res.status);
      }
    } catch (err) {
      console.error('Error deleting post:', err);
    }
  };

  //handle update
 const  handleUpdatePost = (currEle)=>{
        setUpdateData(currEle);
  }



  useEffect(() => {
    getPostData().then();


  }, []);

  return (
    <>
    <div >
       <Form data={data} setData={setData} updateData={updateData} setUpdateData={setUpdateData} />
    </div>
    <div className="container-fluid mt-3">
    <div className="row">
      {data.map((currEle) => {
        const { amount_ac, acc_no, client_name, _id } = currEle;

        return (
          <div className="col-md-2 mb-3 align-center " key={_id}>
            <div className="card border border-2 border-white rounded  " >
              <ul className="list-group list-group-flush">
                <li className="list-group-item fw-bold bg-dark text-white  rounded">
                  <div>Name: {client_name}</div>
                  <div>Amount: {amount_ac}</div>
                  <div>Account No: {acc_no}</div>

                    <button onClick={() => handleUpdatePost(currEle)} className="btn btn-secondary me-2 mt-2"><i
                        className="fas fa-pen-to-square x"></i></button>
                    <button className="btn btn-danger mt-2"
                            onClick={() => {
                                console.log(_id);
                                handleDeletePost(_id)
                            }}><i className="fas fa-trash x"></i></button>

                </li>
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  </div>
  </>
  );
};
