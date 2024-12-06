import User from "../../db/models/User.model";

// 로그인
export const loginUser = async (email: string, password: string) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("사용자를 찾을 수 없습니다.");
  }
};

// 회원가입
export const registerUser = async (userData: any) => {
  const { email, password, name } = userData;

  // 중복 이메일 확인
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error("이미 존재하는 이메일입니다.");
  }

  // 사용자 생성
  const newUser = new User({
    email,
    password,
    name,
  });

  return await newUser.save();
};
