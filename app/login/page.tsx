"use client"
import { GalleryVerticalEnd } from "lucide-react"

import { LoginForm } from "@/components/organisms/auth/login-form"
import Image from "next/image"
import { RegisterForm } from "@/components/organisms/auth/register-form"
import { useToogle } from "@/hooks/useToogle"
import { Toaster } from "@/components/ui/sonner"

export default function LoginPage() {

  const { isOpen, toggle } = useToogle();

  const handleToggleForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    toggle();
  };

  return (
    <>
      <Toaster position="top-center" />
      <div className="grid h-svh lg:grid-cols-2 overflow-hidden">
        <div className={`flex flex-col gap-4 p-6 md:p-10`}>
          <div className="flex justify-center gap-2 md:justify-end">
            <a href="#" className="flex items-center gap-2 font-medium">
              <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
                <GalleryVerticalEnd className="size-4" />
              </div>
              xStore.
            </a>
          </div>
          <div className="flex flex-col flex-1 items-center justify-center relative">
            <div className={`${isOpen ? "top-1/2 z-10 opacity-100" : "top-0 z-0 opacity-0"} w-full max-w-xs absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500`}>
              <LoginForm handleToggle={handleToggleForm} />
            </div>
            <div className={`${!isOpen ? "top-1/2 z-10 opacity-100" : "top-full z-0 opacity-0"} w-full max-w-md absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500`}>
              <RegisterForm handleToggle={handleToggleForm} />
            </div>
          </div>
        </div>
        <div className="bg-muted relative hidden lg:block">
          <Image
            width={720}
            height={720}
            src="/placeholder.svg"
            alt="login-image"
            className="w-full object-fit"
            loading="eager"
          />
        </div>
      </div>
    </>
  )
}
