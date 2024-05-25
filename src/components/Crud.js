import React, { useState } from "react";

const Crud = () => {
  const [input, setInput] = useState({});
  const [value, setValue] = useState([{ title: "HTML" }]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const onAdd = (title) => {
    // value.push({ title: input });
    // setValue([...value]);
    const newTask = [...value, { title: input }];
    // console.log(input);
    setValue([...newTask]);
  };
  return (
    <div style={{ display: "flex" }}>
      Title
      <input type="text" name="title" onChange={handleChange} />
      First Name <input type="text" name="fname" />
      Last Name
      <input type="text" name="lname" />
      Address
      <input type="text" name="address" />
      <button onClick={onAdd}>Add</button>
      {value.map((item) => (
        <div>
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Crud;
