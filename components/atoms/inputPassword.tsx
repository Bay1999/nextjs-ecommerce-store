import { Eye, EyeClosed } from "lucide-react";
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@/components/ui/input-group"
import { useState } from "react";

const InputPassword = ({
  errorMessage,
  ...props
}: {
  errorMessage?: string;
} & React.ComponentPropsWithoutRef<"input">) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-full">
      <InputGroup>
        <InputGroupInput
          {...props}
          type={showPassword ? "text" : "password"}
        />

        <InputGroupAddon align="inline-end">
          <InputGroupButton
            tabIndex={-1}
            aria-label="Toggle Password Visibility"
            title="Toggle Password Visibility"
            size="icon-xs"
            onClick={togglePassword}
          >
            {showPassword ? <EyeClosed /> : <Eye />}
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <small className="text-red-500">{errorMessage}</small>
    </div>
  )
}

export default InputPassword