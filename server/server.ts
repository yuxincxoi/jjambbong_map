// server/server.ts
import express from "express";
import path from "path";

const app = express();
const PORT = process.env.PORT || 4000;

// JSON 파싱 미들웨어
app.use(express.json());

// 클라이언트 빌드 파일을 서빙 (React 빌드 결과물)
app.use(express.static(path.join(__dirname, "../dist")));

// React 앱의 index.html을 서빙 (클라이언트 라우팅 처리)
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../dist", "index.html"));
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});