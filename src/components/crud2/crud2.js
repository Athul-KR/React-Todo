import { isEmpty } from "lodash";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Crud2() {
  const [formDetails, setFormDetails] = useState({});
  const [userData, setUserData] = useState([]);
  const [error, setError] = useState({});

  const navigate = useNavigate();

  const { id } = useParams();
  useEffect(() => {
    if (!isEmpty(id)) {
      const userDetails = localStorage.getItem("userDetails");
      const detail = JSON.parse(userDetails);
      console.log(detail);
      console.log(id);
      const userDatas = detail.find((item) => item.id === id);
      console.log(">>>>", userDatas);
      setFormDetails(userDatas);
    }
  }, [id]);
  const handleChange = (e, key) => {
    delete error[key];
    formDetails[key] = e.target.value;
    setFormDetails({ ...formDetails });
  };

  const handleSave = async () => {
    const form = { ...formDetails, id: Date.now() };
    const userDetails = localStorage.getItem("userDetails");
    const detail = JSON.parse(userDetails) || [];
    // setUserData(JSON.parse(userDetails));
    const details = [...detail, form];
    setFormDetails({ title: "", fname: "", lname: "", address: "" });
    await localStorage.setItem("userDetails", JSON.stringify(details));
    navigate("/user-listing");
  };

  console.log("data", userData);
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
        <button onClick={handleSave}>{true ? "Add" : "Update"}</button>
      </div>
    </div>
  );
}

export default Crud2;
