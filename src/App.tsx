import { PatientSchemaType, patientSchema } from "./Shema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Radio,
  FormControlLabel,
  Input,
  MenuItem,
  RadioGroup,
  Select,
} from "@mui/material";
import { useForm } from "react-hook-form";

const radioValue = ["option1", "option2", "option3"];

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
        <Input {...register("phoneNumber")} />
        <button>중복검사</button>

        {errors.phoneNumber && (
          <p style={{ color: "red" }}>{errors.phoneNumber.message}</p>
        )}
      </section>

      <section>
        <RadioGroup row>
          {radioValue.map((value) => (
            <FormControlLabel
              {...register("selectOption")}
              value={value}
              control={<Radio />}
              label={value}
            />
          ))}
        </RadioGroup>
        {errors.selectOption && (
          <p style={{ color: "red " }}>{errors.selectOption.message}</p>
        )}
      </section>

      <section>
        <Input type='date' {...register("date")} />
        {errors.date && <p style={{ color: "red" }}>{errors.date.message}</p>}
      </section>

      <section>
        <Select
          {...register("selectBox", {
            setValueAs: (value) => {
              value === "" ? undefined : value;
            },
          })}
          defaultValue='box4'
        >
          <MenuItem disabled value='box4'>
            선택해주세요
          </MenuItem>
          <MenuItem value='box1'>box1</MenuItem>
          <MenuItem value='box2'>box2</MenuItem>
          <MenuItem value='box3'>box3</MenuItem>
        </Select>
        {errors.selectBox && (
          <p style={{ color: "red" }}>{errors.selectBox.message}</p>
        )}
      </section>

      <section>
        <Input {...register("name")} />
        {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
      </section>

      <section>
        <button type='reset'>리셋</button>
        <button type='submit'>제출</button>
      </section>
    </form>
  );
}

export default App;
