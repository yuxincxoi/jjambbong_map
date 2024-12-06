import User from "../../db/models/User.model";

// 회원정보 수정
export const updateUser = async (userId: string, updateData: any) => {
  const user = await User.findById(userId);
  if (!user) {
    throw new Error("사용자를 찾을 수 없습니다.");
  }

  // 업데이트 수행
  Object.keys(updateData).forEach((key) => {
    // user[key] = updateData[key];
  });

  return await user.save();
};
