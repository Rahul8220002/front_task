import { lazy } from "react";
import "./App.css";
import CreateUser from "./Components/CreateUser";
const ListUser = lazy(() => import("./Components/ListUser"));

import { BrowserRouter, Route, Routes } from "react-router-dom";
import UpdateUser from "./Components/UpdateUser";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListUser />} />
          <Route path="/createUser" element={<CreateUser />} />
          <Route path="/updateUser/:id" element={<UpdateUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
