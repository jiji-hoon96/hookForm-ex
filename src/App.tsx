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
    <form
      onSubmit={handleSubmit((data: PatientSchemaType) => console.log(data))}
    >
      <section>
        <Input
          {...register("phoneNumber", {
            setValueAs: (value) => {
              value === "" ? undefined : value;
            },
          })}
        />

        {errors.phoneNumber && (
          <p style={{ color: "red" }}>{errors.phoneNumber.message}</p>
        )}
      </section>

      <section>
        <Select
          {...register("selectOption", {
            setValueAs: (value) => {
              value === "" ? undefined : value;
            },
          })}
        >
          <MenuItem value='option1'>option1</MenuItem>
          <MenuItem value='option2'>option2</MenuItem>
          <MenuItem value='option3'>option3</MenuItem>
        </Select>
        {errors.selectOption && (
          <p style={{ color: "red " }}>{errors.selectOption.message}</p>
        )}
      </section>

      <section>
        <Input
          type='date'
          {...register("date", {
            setValueAs: (value) => {
              value === "" ? undefined : value;
            },
          })}
        />
        {errors.date && <p style={{ color: "red" }}>{errors.date.message}</p>}
      </section>

      <section>
        <Select
          {...register("selectBox", {
            setValueAs: (value) => {
              value === "" ? undefined : value;
            },
          })}
        >
          <MenuItem value='box1'>box1</MenuItem>
          <MenuItem value='box2'>box2</MenuItem>
          <MenuItem value='box3'>box3</MenuItem>
        </Select>
        {errors.selectBox && (
          <p style={{ color: "red" }}>{errors.selectBox.message}</p>
        )}
      </section>

      <section>
        <Input
          {...register("name", {
            setValueAs: (value) => {
              value === "" ? undefined : value;
            },
          })}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
      </section>

      <section>
        <button type='submit'>제출</button>
      </section>
    </form>
  );
}

export default App;
