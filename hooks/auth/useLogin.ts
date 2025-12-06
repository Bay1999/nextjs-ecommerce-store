import { LoginForm } from "@/types/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function useLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const loginFormSubmit = async (data: LoginForm) => {
    setIsLoading(true);
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    setIsLoading(false);
    
    const responseData = await response.json();

    if (!response.ok) {
      const errorMessage = responseData.message ?? "Failed to login";
      toast.error(errorMessage);
      throw new Error(errorMessage);
    }

    const message = responseData.message ?? "Login success";
    toast.success(message);
    
    setTimeout(() => {
      router.push("/admin/dashboard");
    }, 1000);
  }

  return {
    isLoading,
    loginFormSubmit,
  }
}