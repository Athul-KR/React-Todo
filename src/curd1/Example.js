import React, { useState } from "react";

const Example = () => {
  const [formDetails, setFormDetails] = useState({ name: "", email: "" });
  const [userDetails, setUserDetails] = useState([]);
  const [editID, setEditID] = useState(null);
  const [hiddenID, setHiddenID] = useState(null);

  const onhandleChange = (e, key) => {
    setFormDetails({ ...formDetails, [key]: e.target.value });
    // console.log(formDetails);
  };
  const onSave = () => {
    if (!editID) {
      setUserDetails([...userDetails, { ...formDetails, id: Date.now() }]);
    } else {
      setUserDetails(
        userDetails.map((user) =>
          user.id === editID ? { ...formDetails, id: editID } : user
        )
      );
      console.log(userDetails);
      setEditID(null);
      setHiddenID(null);
    }
    setFormDetails({ name: "", email: "" });
  };
  const handleDelete = (id) => {
    setUserDetails(userDetails.filter((user) => user.id !== id));
  };
  const handleUpdate = (id) => {
    setFormDetails(userDetails.find((user) => user.id === id));
    setEditID(id);
    setHiddenID(id);
    console.log(userDetails);
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        value={formDetails.name}
        placeholder="Enter  Name"
        onChange={(e) => onhandleChange(e, "name")}
      />
      <input
        type="text"
        name="emial"
        value={formDetails.email}
        placeholder="Enter Email"
        onChange={(e) => onhandleChange(e, "email")}
      />
      <button onClick={onSave}>Save</button>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
        {userDetails.map(
          (user) =>
            user.id !== hiddenID && (
              <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button onClick={() => handleUpdate(user.id)}>Update</button>
                </td>
                <td>
                  <button onClick={() => handleDelete(user.id)}>Delete</button>
                </td>
              </tr>
            )
        )}
      </table>
    </div>
  );
};

export default Example;
