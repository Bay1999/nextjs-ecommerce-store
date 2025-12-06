import { getUserDataCookie } from "@/lib/services/authService";
import { User } from "@/types/user";
import { useEffect, useState } from "react"

export const useLoginData = () => {
  const [loginData, setLoginData] = useState<User | null>(null);

  const getUserData = async () => {
    const data = await getUserDataCookie();
    setLoginData(data);
  }

  useEffect(() => {
    getUserData();
  }, []);

  return {
    loginData,
    getUserData
  }
}