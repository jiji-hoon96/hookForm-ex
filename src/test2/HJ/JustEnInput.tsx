import { Control, Controller, FieldPath } from "react-hook-form";
import { PatientFormSchema } from "./test2Schema";
import { Input } from "@mui/material";

interface Props {
  id: string;
  name: FieldPath<PatientFormSchema>;
  control: Control<PatientFormSchema>;
}

const JustEnInput = ({ id, name, control }: Props) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <Input
          {...field}
          id={id}
          onChange={(e) => {
            field.onChange(e.target.value.replace(/[^A-Za-z]/gi, ""));
          }}
        />
      )}
    />
  );
};

export default JustEnInput;
