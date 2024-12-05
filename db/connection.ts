import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const MONGODB_URI = process.env.REACT_APP_MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI가 .env.local 파일에 정의되어 있지 않습니다.");
}

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      // 최신 mongoose 연결 옵션
      serverSelectionTimeoutMS: 5000,
      retryWrites: true,
      w: "majority",
    });
    console.log("MongoDB 연결 성공");
  } catch (error) {
    console.error("MongoDB 연결 실패:", error);
    process.exit(1);
  }
};

mongoose.connection.on("connected", () => {
  console.log("Mongoose가 MongoDB에 연결되었습니다.");
});

mongoose.connection.on("error", (err) => {
  console.error("MongoDB 연결 중 오류 발생:", err);
});

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB 연결이 끊어졌습니다.");
});

export default connectDB;
