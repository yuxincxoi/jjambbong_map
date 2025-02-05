import connectDB from "./connection";
import User from "./models/User.model";

const testDatabase = async () => {
  try {
    // 데이터베이스 연결
    await connectDB();

    // 샘플 데이터 생성
    const newUser = new User({
      name: "Alice",
      password: "securepassword",
      likePlace: [
        {
          place: "Central Park",
          address: "New York, NY",
        },
      ],
    });

    // 데이터 저장
    const savedUser = await newUser.save();

    // 데이터 조회
    const users = await User.find();

    // 데이터베이스 종료
    process.exit(0);
  } catch (error) {
    console.error("테스트 중 오류 발생:", error);
    process.exit(1);
  }
};

testDatabase();
