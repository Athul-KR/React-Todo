import { isEmpty } from "lodash";
import React, { useState } from "react";

function Crudapp() {
  const [formDetails, setFormDetails] = useState({});
  const [userData, setUserData] = useState([]);
  const [status, setStatus] = useState(true);
  const [id, setId] = useState("");
  const [error, setError] = useState({});

  const handleChange = (e, key) => {
    delete error[key];
    formDetails[key] = e.target.value;
    setFormDetails({ ...formDetails });
  };

  const handleSave = async () => {
    const err = await handleValidate();
    if (isEmpty(err)) {
      if (status) {
        const form = { ...formDetails, id: Date.now() };
        const details = [...userData, form];
        setUserData([...details]);
        setFormDetails({ title: "", fname: "", lname: "", address: "" });
      } else {
        const UpdatedUserdetails = userData.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              title: formDetails.title,
              fname: formDetails.fname,
              lname: formDetails.lname,
              address: formDetails.address,
            };
          }
          return item;
        });
        setUserData([...UpdatedUserdetails]);
        setFormDetails({ title: "", fname: "", lname: "", address: "" });
        setStatus(true);
      }
    } else {
      setError(err);
    }
  };

  const handleDelete = (id) => {
    const DeletedUserDetails = userData.filter((item) => item.id !== id);
    console.log("id", DeletedUserDetails);
    setUserData([...DeletedUserDetails]);
  };
  const handleUpdate = (id) => {
    const userDatas = userData.find((item) => item.id === id);
    console.log(userDatas);
    setFormDetails({ ...userDatas });
    setStatus(false);
    setId(id);
  };

  const handleValidate = () => {
    let err = {};
    if (isEmpty(formDetails?.title)) {
      err.title = "Title is required";
    }
    return err;
  };
  return (
    <div>
      <div>
        {" "}
        Title
        <input
          value={formDetails?.title}
          type="text"
          name="title"
          onChange={(e) => handleChange(e, "title")}
        />
      </div>
      <span style={{ color: "red" }}>{error?.title}</span>
      <div>
        {" "}
        First Name
        <input
          value={formDetails?.fname}
          type="text"
          name="fname"
          onChange={(e) => handleChange(e, "fname")}
        />
      </div>
      <div>
        Last Name
        <input
          value={formDetails?.lname}
          type="text"
          name="lname"
          onChange={(e) => handleChange(e, "lname")}
        />
      </div>
      <div>
        Address
        <input
          value={formDetails?.address}
          type="text"
          name="address"
          onChange={(e) => handleChange(e, "address")}
        />
      </div>
      <div>
        <button onClick={handleSave}>{status ? "Add" : "Update"}</button>

        <table>
          <tr>
            <th>Title</th>
            <th>First Name</th>
            <th>Second Name</th>
            <th>Address</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>

          {userData?.map((item, i) => (
            <tr key={i}>
              <td>{item.title}</td>
              <td>{item.fname}</td>
              <td>{item.lname}</td>
              <td>{item.address}</td>
              <td>
                <button onClick={() => handleUpdate(item?.id)}>Update</button>
              </td>
              <td>
                <button onClick={() => handleDelete(item?.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default Crudapp;
