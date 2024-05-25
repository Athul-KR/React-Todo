import React, { useState } from "react";

const Crud = () => {
  const [formData, setFormData] = useState({ fname: "", lname: "" });
  const [userData, setUserData] = useState([]);
  const [editId, setEditID] = useState(null);

  const handleChange = (e, key) => {
    setFormData({ ...formData, [key]: e.target.value });

    // console.log(formData);
  };

  const handleSave = () => {
    if (!editId) {
      setUserData([...userData, { ...formData, id: Date.now() }]);
      // console.log(userData);
    } else {
      setUserData(
        userData.map((user) =>
          user.id === editId ? { ...formData, id: editId } : user
        )
      );
      console.log(userData);
      setEditID(null);
    }
    setFormData({ fname: "", lname: "" });
  };

  const handleDelete = (id) => {
    setUserData(userData.filter((user) => user.id !== id));
    // console.log(id);
  };
  const handleUpdate = (id) => {
    setFormData(userData.find((user) => user.id === id));
    // console.log(formData);
    setEditID(id);
  };
  return (
    <div>
      <div>
        First name
        <p></p>
        <input
          type="text"
          value={formData.fname}
          onChange={(e) => handleChange(e, "fname")}
        />
      </div>
      <div>
        Second Name
        <p></p>
        <input
          type="text"
          value={formData.lname}
          onChange={(e) => handleChange(e, "lname")}
        />
      </div>
      <div>
        <button onClick={handleSave}>Save</button>
      </div>
      <table>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
        {userData.map((user) => (
          <tr>
            <td>{user.fname}</td>
            <td>{user.lname}</td>
            <td>
              <button onClick={() => handleUpdate(user.id)}>Update</button>
            </td>
            <td>
              <button onClick={() => handleDelete(user.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Crud;
