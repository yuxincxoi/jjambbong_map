export const validateSignupFields = (
  name: string,
  id: string,
  password: string,
  confirmPassword: string
) => {
  if (!name || !id || !password || !confirmPassword) {
    return false; // 하나라도 빈칸이 있으면 false
  }

  return true; // 모든 필드가 채워져 있으면 true
};
