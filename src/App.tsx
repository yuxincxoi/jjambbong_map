import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IndexPage from "./pages/indexPage";
import SignupPage from "./pages/signupPage";
import MainPage from "./pages/mainPage";
import LikePage from "./pages/likePage";
import MyPage from "./pages/myPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/signupPage" element={<SignupPage />} />
        <Route path="/mainPage" element={<MainPage />} />
        <Route path="/likePage" element={<LikePage />} />
        <Route path="/myPage" element={<MyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
