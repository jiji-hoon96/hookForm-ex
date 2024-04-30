import { PatientSchemaType, patientSchema } from "./Shema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input, MenuItem, Select } from "@mui/material";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PatientSchemaType>({
    resolver: zodResolver(patientSchema),
  });

  return (
    <div>
      <Input />
      <Select>
        <MenuItem>box1</MenuItem>
        <MenuItem>box2</MenuItem>
        <MenuItem>box3</MenuItem>
      </Select>
    </div>
  );
}

export default App;
