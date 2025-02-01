import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IndexPage from "./pages/indexPage";
import SignupPage from "./pages/signupPage";
import MainPage from "./pages/mainPage";
import LikePage from "./pages/likePage";
import MyPage from "./pages/myPage";
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        {/* 공개 라우트 */}
        <Route path="/" element={<IndexPage />} />
        <Route path="/signupPage" element={<SignupPage />} />

        {/* 보호된 라우트 */}
        <Route
          path="/mainPage"
          element={
            <ProtectedRoute>
              <MainPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/likePage"
          element={
            <ProtectedRoute>
              <LikePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/myPage"
          element={
            <ProtectedRoute>
              <MyPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
