import { Control, Controller, FieldPath } from "react-hook-form";
import { PatientFormSchema } from "./test2Schema";
import Input from "@mui/material/Input";

interface Props {
  id: string;
  name: FieldPath<PatientFormSchema>;
  control: Control<PatientFormSchema>;
}

const JustNumInput = ({ id, name, control }: Props) => {
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
            field.onChange(e.target.value.replace(/[^\d]/g, ""));
          }}
        />
      )}
    />
  );
};

export default JustNumInput;
