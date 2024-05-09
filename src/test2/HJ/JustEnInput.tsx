import { Control, Controller, FieldPath } from "react-hook-form";
import { PatientFormSchema } from "./addPatientSchema";
import Input from "@mui/material/Input";

interface Props {
  id: string;
  placeholder?: string;
  name: FieldPath<PatientFormSchema>;
  control: Control<PatientFormSchema>;
}

const JustEnInput = ({ id, name, control, placeholder }: Props) => {
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
            field.onChange(
              e.target.value.replace(/[^A-Za-z]/gi, "")[0].toUpperCase() +
                e.target.value
                  .replace(/[^A-Za-z]/gi, "")
                  .slice(1, e.target.value.replace(/[^A-Za-z]/gi, "").length)
            );
          }}
        />
      )}
    />
  );
};

export default JustEnInput;
