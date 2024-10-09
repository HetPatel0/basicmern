import { useEffect, useState } from "react";
import { postData, updatePostData } from "../api/PostApi";

export const Form = ({ data, setData, updateData, setUpdateData }) => {
    const [addData, setAddData] = useState({
        client_name: "",
        amount_ac: 0,
        acc_no: 0,
    });

    const isEmpty = Object.keys(updateData).length === 0;

    // Get the updated data and add it into the input field
    useEffect(() => {
        if (updateData && Object.keys(updateData).length > 0) {
            setAddData({
                client_name: updateData.client_name || "",
                amount_ac: updateData.amount_ac|| 0,
                acc_no: updateData.acc_no || 0,
            });
        }
    }, [updateData]);

    const handle = (e) => {
        const name = e.target.name;
        const value = name === "amount_ac" || name === "acc_no" ? +e.target.value : e.target.value;

        setAddData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const addPostData = async () => {
        try {
            const res = await postData(addData);
            if (res && res.status === 201) {
                setData((prev) => [...prev, res.data]); // Append new data

                resetForm();
            }
        } catch (error) {
            console.error("Error posting data:", error);
        }
    };

    // Update post data
    const updateDataWork = async () => {
        try {
            const res = await updatePostData(updateData._id, addData); // Make sure to use _id
            setData((prev) =>
                prev.map((currEle) => (currEle._id === res.data._id ? res.data : currEle))
            );
            resetForm();
        } catch (error) {
            console.error("Error updating data:", error);
        }
    };

    const resetForm = () => {
        setAddData({
            client_name: "",
            amount_ac: 0,
            acc_no: 0,
        });
        setUpdateData({});
    };

    const submition = (e) => {
        e.preventDefault();
        if (isEmpty) {
            addPostData();
        } else {
            updateDataWork();
        }
    };

    return (
        <form onSubmit={submition} className="d-flex flex-row p-3 m-5 border border-dark w-50 text-white bg-success rounded">
            <div className="d-flex flex-row bg-success ">
                <label className="form-label m-1 bg-success">Client Name</label>
                <input
                    type="text"
                    className="form-control w-50"
                    name="client_name"
                    value={addData.client_name}
                    onChange={handle}
                />
            </div>
            <div className="d-flex flex-row bg-success">
                <label className="form-label m-1 bg-success">Account No</label>
                <input
                    type="number"
                    className="form-control w-50"
                    name="acc_no"
                    value={addData.acc_no}
                    onChange={handle}
                />
            </div>
            <div className="d-flex flex-row bg-success">
                <label className="form-label m-1 bg-success">Amount</label>
                <input
                    type="number"
                    className="form-control w-50"
                    name="amount_ac"
                    value={addData.amount_ac}
                    onChange={handle}
                />
            </div>

            <button type="submit" className="btn btn-primary me-2">
                {isEmpty ? <i className="fas fa-plus "></i> :  <i className="fas fa-pen-to-square x"></i>}
            </button>
        </form>
    );
};
