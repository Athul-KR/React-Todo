import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function UserListing() {
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const userDetails = localStorage.getItem("userDetails");
    setUserData(JSON.parse(userDetails));
  }, []);

  const handleUpdate = (id) => {
    navigate(`/update/${id}`);
  };
  const handleDelete = (id) => {
    const DeletedUserDetails = userData.filter((item) => item.id !== id);
    localStorage.setItem("userDetails", JSON.stringify(DeletedUserDetails));
    console.log("id", DeletedUserDetails);
    setUserData([...DeletedUserDetails]);
  };
  return (
    <div>
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
  );
}

export default UserListing;
