import { useEffect } from "react";
import "./App.css";
// import States from "./components/States";
// import Crud from "./components/Crud";
import Crudapp from "./curd1/crudapp";
// import Exe from "./Exe";
import Exe from "../src/curd1/Exe";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Crud2 from "./components/crud2/crud2";
import UserListing from "./components/crud2/userListing";
import Test from "./curd1/Test";
import Example from "./curd1/Example";
import Crud from "./example/Crud";
// import AddInput from "./curd1/AddInput";

// import Todo from "./components/Todo";

function App() {
  const props = [
    { id: 1, name: "Hai", age: 24 },
    { id: 2, name: "Helo", age: 94 },
  ];

  useEffect(() => {});
  return (
    <div>
      {/* <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Exe />} />
          <Route path="/crud2" element={<Crud2 />} />
          <Route path="/update/:id" element={<Crud2 />} />

          <Route path="/user-listing" element={<UserListing />} />
        </Routes>
      </BrowserRouter> */}
      {/* <States props={props} /> */}
      {/* <Crudapp /> */}
      {/* <Crud /> */}
      {/* <Exe /> */}
      {/* <Test /> */}
      {/* <Example /> */}
      {/* <AddInput /> */}
      <Crud />
    </div>
  );
}

export default App;
