import { Controller } from "react-hook-form";
import { IMaskInput } from "react-imask";
import { TextField, InputLabel } from "@mui/material";

const MaskedTextField = ({ control, errors, register, name, label, mask }) => {
  return (
    <div>
      <InputLabel>{label}</InputLabel>
      <Controller
        name={name}
        control={control}
        defaultValue=''
        render={({ field: { ref, ...field } }) => (
          <IMaskInput
            {...field}
            mask={mask}
            lazy={false}
            unmask={true} // get raw value
            inputRef={ref}
            Component={TextField}
            variant='standard'
            helperText={errors[name]?.message}
            FormHelperTextProps={{ sx: { color: "red" } }}
          />
        )}
      />
    </div>
  );
};

export default MaskedTextField;
