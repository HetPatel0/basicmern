import {getPost} from "../api/PostApi.jsx";
import {useEffect, useState} from "react";

export const Users = () => {

    const [data, setData] = useState([]);

    const getPostData = async () => {
        try {
            const res = await getPost();
            console.log("Response Data:", res.data);  // Check if data is received correctly
            if (Array.isArray(res.data)) {
                setData(res.data);
            } else {
                console.error("Data is not an array:", res.data);
            }
        } catch (error) {
            console.error("Error fetching post data:", error);
        }
    };

    useEffect(() => {
        getPostData();
    }, []);

    return (
        <div className="container m-5">
            <div className="row">
                {
                    data.length > 0 ? (
                        data.map((ele) => {
                            const { amount_ac, acc_no, client_name, _id } = ele;
                            return (
                                <div key={_id} className="col-md-3 col-sm-6 mb-4"> {/* 4 columns per row on medium screens, 2 on small screens */}
                                    <div className="card">
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">Name: {client_name}</li>
                                            <li className="list-group-item">Account No: {acc_no}</li>
                                            <li className="list-group-item">Amount: ₹{amount_ac}</li>
                                        </ul>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <p>No data available</p>
                    )
                }
            </div>
        </div>
    );
};
