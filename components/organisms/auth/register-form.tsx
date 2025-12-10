import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { SubmitHandler, useForm } from "react-hook-form"
import { useRegister } from "@/hooks/auth/useRegister"
import { RegisterForm as TRegisterForm } from "@/types/auth";
import InputPassword from "@/components/atoms/inputPassword"

interface RegisterFormProps extends React.ComponentPropsWithoutRef<"form"> {
  handleToggle: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const RegisterForm = ({
  handleToggle,
  className,
  ...props
}: RegisterFormProps) => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<TRegisterForm>();

  const { isLoading, registerFormSubmit } = useRegister();
  const onSubmit: SubmitHandler<TRegisterForm> = (data) => {
    registerFormSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cn("flex flex-col gap-6", className)} {...props}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Create your account</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Fill in the form below to create your account
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="name">Full Name</FieldLabel>
          <Input
            id="name"
            type="text"
            placeholder="John Doe"
            errorMessage={errors.name?.message}
            {...register("name", { required: "Full Name is required" })} />
        </Field>
        <div className="flex gap-5">
          <Field>
            <FieldLabel htmlFor="email_register">Email</FieldLabel>
            <Input
              id="email_register"
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
            <FieldLabel htmlFor="phone_register">Phone</FieldLabel>
            <Input
              id="phone_register"
              type="text"
              placeholder="+62 12312 91823"
              errorMessage={errors.phone_number?.message}
              {...register("phone_number", {
                required: "Phone number is required",
                pattern: {
                  value: /^\+?[1-9]\d{1,14}$/,
                  message: "Invalid phone number format"
                }
              })} />
          </Field>
        </div>
        <div className="flex gap-5">
          <Field>
            <FieldLabel htmlFor="password_register">Password</FieldLabel>
            <InputPassword
              id="password_register"
              errorMessage={errors.password?.message}
              {...register("password",
                {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters long"
                  },
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
                  }
                },
              )}
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="password_confirmation_register">Confirm Password</FieldLabel>
            <InputPassword
              id="password_confirmation_register"
              errorMessage={errors.password_confirmation?.message}
              {...register("password_confirmation", {
                required: "Confirm Password is required",
                validate: (value) => value === watch("password") || "Passwords do not match"
              })}
            />
          </Field>
        </div>
        <Field>
          <Button
            type="submit"
            disabled={isLoading}
          >Create Account</Button>
        </Field>
        <Field>
          <FieldDescription className="text-center">
            Already have an account? <a href="#" onClick={handleToggle}>Sign in</a>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  )
}

export default RegisterForm;
