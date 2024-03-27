import { jwtDecode } from "jwt-decode";
export const decodeJwtToken = (token: string) => {
  if (!token) {
    return;
  }
  return jwtDecode(token);
};
