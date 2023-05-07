import React, { useState, useEffect } from "react";
import "./App.css";
import MainApp from "./components/mainApp";
import {
  BrowserRouter,
  Routes,
  Route,
  HashRouter,
  Navigate,
} from "react-router-dom";
import { NotFoundPage } from "./components/404notfound/Notfound";
const App = () => {
  return (
    <>
      {/* <h1>{t("title")}</h1>
      <select onChange={changeLang}>
        <option value="en">English</option>
        <option value="vi">Vietnamese</option>
      </select> */}
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<MainApp />}></Route>
          <Route path="*" element={<NotFoundPage />} />
          {/* <Route path="/" element={<MainApp />}></Route> */}
        </Routes>
      </HashRouter>
      {/* <MainApp /> */}
    </>
  );
};

export default App;
