import { RegisterForm } from "@/types/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function useRegister() {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const registerFormSubmit = async (data: RegisterForm) => {
    setIsLoading(true);
    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    setIsLoading(false);
    
    const responseData = await response.json();

    if (!response.ok) {
      const errorMessage = responseData.message ?? "Failed to register";
      toast.error(errorMessage);
      throw new Error(errorMessage);
    }

    const message = responseData.message ?? "Register success";
    toast.success(message);
    
    setTimeout(() => {
      if (responseData.isAdmin) {
        router.push("admin/dashboard");
      } else {
        router.push("/");
      }
    }, 1000);
  }

  return {
    isLoading,
    registerFormSubmit
  }
}