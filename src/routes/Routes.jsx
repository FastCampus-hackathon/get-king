import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles";
import GlobalStyle from "../styles/globalStyle";
import Scrap from "./Scrap";
import Compare from "./Compare";
import CompareList from "./CompareList";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/scrap" element={<Scrap />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/login" element={<Login />} />
            <Route path="/compare-list" element={<CompareList />} />
          </Routes>
          <GlobalStyle />
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
};

export default Router;
