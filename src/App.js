import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Blank from "./pages/Blank";
import MainLayout from "./layout/MainLayout";

import "./scss/App.scss";

function App() {
  return (
    <BrowserRouter>
      {/* <div className="App h-[100vh] grid overflow-hidden">
        <Sidebar /> */}
        {/* <div className="content w-[50%]"> */}
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="orders" element={<Blank />} />
              <Route path="customers" element={<Blank />} />
              <Route path="employees" element={<Blank />} />
              <Route path="logout" element={<Blank />} />
            </Route>
          </Routes>
        {/* </div> */}
      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;
