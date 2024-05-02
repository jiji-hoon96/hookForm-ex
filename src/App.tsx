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

const selectValue = ["box1", "box2", "box3"];
const radioValue = ["option1", "option2", "option3"];
function App() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<PatientSchemaType>({
    resolver: zodResolver(patientSchema),
  });

  console.log(watch());

  return (
    <form
      onSubmit={handleSubmit((data: PatientSchemaType) => console.log(data))}
    >
      <section>
        <Input
          {...register("phoneNumber")}
          onChange={(e) => (e.target.value = e.target.value.replace(/\D/g, ""))}
        />
        <button>중복검사</button>

        {errors.phoneNumber && (
          <p style={{ color: "red" }}>{errors.phoneNumber.message}</p>
        )}
      </section>

      <section>
        <RadioGroup row>
          {radioValue.map((value, index) => (
            <FormControlLabel
              key={index}
              value={value}
              control={<Radio />}
              label={value}
              {...register("selectOption")}
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
          defaultValue='defaultValue'
        >
          <MenuItem disabled value='defaultValue'>
            선택해주세요
          </MenuItem>
          {selectValue.map((value, index) => (
            <MenuItem key={index} value={value}>
              {value}
            </MenuItem>
          ))}
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
