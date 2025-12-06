import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { InputPassword } from "@/components/atoms/input-password";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginForm as TLoginForm } from "@/types/auth";
import { useLogin } from "@/hooks/auth/useLogin";

interface LoginFormProps extends React.ComponentPropsWithoutRef<"form"> {
  handleToggle: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export function LoginForm({
  handleToggle,
  className,
  ...props
}: LoginFormProps) {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TLoginForm>();

  const { isLoading, loginFormSubmit } = useLogin();

  const onSubmit: SubmitHandler<TLoginForm> = (data) => {
    loginFormSubmit(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cn("flex flex-col gap-6", className)} {...props}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Login to your account</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Enter your email below to login to your account
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="email_login">Email</FieldLabel>
          <Input
            id="email_login"
            type="text"
            placeholder="m@example.com"
            errorMessage={errors.email?.message}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email format"
              }
            })}
          />
        </Field>
        <Field>
          <div className="flex items-center">
            <FieldLabel htmlFor="password_login">Password</FieldLabel>
            {/* <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </a> */}
          </div>
          <InputPassword
            id="password_login"
            errorMessage={errors.password?.message}
            {...register("password", {
              required: "Password is required",
            })}
          />
        </Field>
        <Field>
          <Button type="submit" disabled={isLoading}>Login</Button>
        </Field>
        <Field>
          <FieldDescription className="text-center">
            Don&apos;t have an account?{" "}
            <a href="#" onClick={handleToggle} className="underline underline-offset-4">
              Sign up
            </a>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  )
}
