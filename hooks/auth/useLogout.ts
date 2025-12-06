import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export const useLogout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  
  const logout = async () => {
    setIsLoading(true);

    const response = await fetch("/api/auth/logout", {
      method: "POST",
    });

    
    const responseData = await response.json();
    
    if (!response.ok) {
      setIsLoading(false);
      const errorMessage = responseData.message ?? "Failed to logout";
      toast.error(errorMessage);
      throw new Error(errorMessage);
    }

    const message = responseData.message ?? "Logout success";
    toast.success(message);
    
    setTimeout(() => {
      router.push("/login");
    }, 1000);
  }

  return {
    isLoading,
    logout,
  }
}