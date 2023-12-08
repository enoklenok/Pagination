//react
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//styled-components
import { ThemeProvider } from "styled-components";
import { theme } from "./style/theme";

//components
import { Header } from "./layout/Header";
import { Sidebar } from "./layout/Sidebar";
import { Footer } from "./layout/Footer";
import { Main } from "./pages/Main";

//css
import { GlobalStyles } from "./style/GlobalStyles";
import "tailwindcss/tailwind.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Router>
      <Header />
      {/* <Sidebar /> */}
      <Routes>
        <Route path="/" element={<Main />}></Route>
      </Routes>
      <Footer />
    </Router>
  </ThemeProvider>
);
