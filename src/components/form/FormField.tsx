import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UseFormRegisterReturn } from "react-hook-form";

interface FormFieldProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  register: UseFormRegisterReturn;
  required?: boolean;
  error?: string;
}

export default function FormField({
  id,
  label,
  type = "text",
  placeholder,
  register,
  required = false,
  error,
}: FormFieldProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-dark font-medium">
        {label}
      </Label>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        {...register}
        className={`border-dark/20 focus:ring-accent focus:border-accent ${
          error ? "border-red-500" : ""
        }`}
        required={required}
      />
      {error && (
        <p className="text-sm text-red-500 mt-1" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
