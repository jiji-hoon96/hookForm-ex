import { Control, Controller, FieldPath } from "react-hook-form";
import { PatientFormSchema } from "./addPatientSchema";
import Input from "@mui/material/Input";

interface Props {
  id: string;
  placeholder?: string;
  name: FieldPath<PatientFormSchema>;
  control: Control<PatientFormSchema>;
  length?: number;
}

const JustNumInput = ({ id, name, control, placeholder }: Props) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <Input
          {...field}
          id={id}
          placeholder={placeholder}
          onChange={(e) => {
            field.onChange(e.target.value.replace(/[^\d]/g, ""));
          }}
        />
      )}
    />
  );
};

export default JustNumInput;
