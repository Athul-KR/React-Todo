import React, { useEffect, useState } from "react";

const Test = () => {
  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
  });
  const [userDetails, setUserDetails] = useState([]);
  const [editId, setEditId] = useState(null);

  const handleChange = (e, key) => {
    setFormDetails({ ...formDetails, [key]: e.target.value });
    // console.log(formDetails);
  };

  // const handleSave = () => {
  // const user = { ...formDetails, id: Date.now() };
  // const newdata = [...userDetails, user];
  // setUserDetails(newdata);
  // setUserDetails([...userDetails, { ...formDetails, id: Date.now() }]);
  // setFormDetails({ name: "", email: "" });
  // console.log(userDetails);
  // };
  const handleSave = () => {
    if (editId) {
      setUserDetails(
        userDetails.map((item) =>
          item.id === editId ? { ...formDetails, id: editId } : item
        )
      );
      setEditId(null);
    } else {
      setUserDetails([...userDetails, { ...formDetails, id: Date.now() }]);
      // console.log(userDetails);
    }
    setFormDetails({ name: "", email: "" });
  };

  const handleUpdate = (id) => {
    setFormDetails(userDetails.find((item) => item.id === id));
    // setFormDetails(userDetails);
    // console.log(formDetails);
    // const user = userDetails.find((item) => item.id === id);
    // setFormDetails({ ...user });
    setEditId(id);
  };

  const handleDelete = (id) => {
    setUserDetails(userDetails.filter((item) => item.id !== id));
    console.log(userDetails);
  };
  // useEffect(() => {
  //   console.log(formDetails);
  // }, [formDetails]);

  return (
    <div>
      <div>
        Name
        <input
          type="text"
          name="name"
          id=""
          value={formDetails.name}
          onChange={(e) => handleChange(e, "name")}
        />
      </div>
      <div>
        Email
        <input
          type="text"
          name="email"
          value={formDetails.email}
          onChange={(e) => handleChange(e, "email")}
        />
      </div>
      <div>
        <button onClick={handleSave}>Save</button>
      </div>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
        {userDetails.map((item) => (
          <tr>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>
              <button onClick={() => handleUpdate(item?.id)}>Update</button>
            </td>
            <td>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Test;
