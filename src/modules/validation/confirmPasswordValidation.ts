export const validateConfirmPassword = (
  password: string,
  confirmPassword: string
) => {
  if (password !== confirmPassword) {
    return false;
  }

  return true;
};
