import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FieldPath, Control, Controller } from "react-hook-form";
import { PatientFormSchema } from "./test2Schema";

interface Props {
  name: FieldPath<PatientFormSchema>;
  control: Control<PatientFormSchema>;
  menuItems: string[];
  label: string;
}

export default function CustomSelect({
  menuItems,
  name,
  label,
  control,
}: Props) {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
      <label id={label} onClick={handleOpen}>
        {label}
      </label>
      <Controller
        name={name}
        defaultValue=""
        control={control}
        render={({ field }) => (
          <Select
            displayEmpty
            labelId={label}
            open={open}
            onOpen={handleOpen}
            onClose={handleClose}
            {...field}
          >
            <MenuItem value="" disabled style={{ display: "none" }}>
              Select...
            </MenuItem>
            {menuItems.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        )}
      />
    </FormControl>
  );
}
