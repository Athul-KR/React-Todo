import React, { useState } from "react";

const Exe = () => {
  const [formDetails, setFormDetails] = useState({});
  const [inputDatas, setInputDatas] = useState([]);

  const handleChange = (e, index) => {
    formDetails[index] = e.target.value;
    setFormDetails({ ...formDetails });
    // console.log(formDetails);
  };

  const handleSave = () => {
    const userdetails = { ...formDetails, id: Date.now() };
    const newdata = [...inputDatas, userdetails];
    setInputDatas(newdata);
    console.log(newdata);
  };

  const handleEdit = (id) => {
    // const =
  };
  return (
    <div>
      <div>
        <label htmlFor="">Name</label>
        <input
          type="text"
          name="Name"
          value={formDetails?.Name}
          onChange={(e) => handleChange(e, "Name")}
        />
      </div>
      <div>
        <label htmlFor="">Address</label>
        <input
          type="text"
          name="Address"
          value={formDetails?.Address}
          onChange={(e) => handleChange(e, "Address")}
        />
      </div>
      <div>
        <label htmlFor="">Phone</label>
        <input
          type="text"
          name="Phone"
          value={formDetails?.Phone}
          onChange={(e) => handleChange(e, "Phone")}
        />
      </div>
      <div>
        <label htmlFor="">Email</label>
        <input
          type="text"
          name="Email"
          value={formDetails?.Email}
          onChange={(e) => handleChange(e, "Email")}
        />
      </div>
      <div>
        <button onClick={handleSave}>Save</button>
      </div>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          {inputDatas.map((data, i) => (
            <tr key={i}>
              <td>{data.Name}</td>
              <td>{data.Address}</td>
              <td>{data.Phone}</td>
              <td>{data.Email}</td>
              <td>
                <button onClick={() => handleEdit(data.id)}>Edit</button>
              </td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Exe;
