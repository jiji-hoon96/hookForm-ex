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
        <button>중복검사</button>

        {errors.phoneNumber && (
          <p style={{ color: "red" }}>{errors.phoneNumber.message}</p>
        )}
      </section>

      <section>
        <RadioGroup {...register("selectOption")} row>
          <FormControlLabel
            value='option1'
            control={<Radio />}
            label='option1'
          />
          <FormControlLabel
            value='option2'
            control={<Radio />}
            label='option2'
          />
          <FormControlLabel
            value='option3'
            control={<Radio />}
            label='option3'
          />
        </RadioGroup>
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
        <button type='reset'>리셋</button>
        <button type='submit'>제출</button>
      </section>
    </form>
  );
}

export default App;
