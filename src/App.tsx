import { useState } from "react";
// import { zodResolver } from "@hookform/resolvers/zod";
import { userFormSchema, type UserFormSchema } from "./lib/zod/userSchema";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import Input from "@mui/material/Input";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const medicareAdvantageOption = ["Clover", "HealthNet", "Unicare"];

function App() {
  const [BillableValue, setBillableValue] = useState<string>("Billable PPO");
  const [medicareAdvantage, setMedicareAdvantage] = useState<string>();
  const [dateValue, setDateValue] = useState<Dayjs | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormSchema>();

  const handleChangeBill = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBillableValue((event.target as HTMLInputElement).value);
  };

  const handleChangeMedicareOption = (
    event: SelectChangeEvent<typeof medicareAdvantage>
  ) => {
    const {
      target: { value },
    } = event;
    setMedicareAdvantage(value);
  };

  const handleChangeDate = (newDateValue: Dayjs) => {
    console.log(newDateValue);
    // if (dateValue) {
    //   const dayjsDate = dateValue as Dayjs;
    //   console.log(dayjsDate);
    //   setDateValue(dayjsDate);
    // } else {
    //   setDateValue(null);
    // }
  };

  const onSubmit: SubmitHandler<UserFormSchema> = (data) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input
            type="number"
            {...register("phone", { required: "필수 입력값입니다" })}
          />
          {errors.phone?.type === "required" && (
            <p role="alert">{errors.phone.message}</p>
          )}
        </div>
        <div>
          <FormControl>
            <FormLabel>Billable Option</FormLabel>
            <RadioGroup value={BillableValue} onChange={handleChangeBill}>
              <FormControlLabel
                value="Billable PPO"
                control={<Radio />}
                label="Billable PPO"
                {...register("billableOption")}
              />
              <FormControlLabel
                value="Medicare HMO"
                control={<Radio />}
                label="Medicare HMO"
                {...register("billableOption")}
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              value={dateValue}
              {...register("born")}
              // onChange={handleChangeDate(newDateValue)}
            />
            {errors.born?.type === "akr"}
          </LocalizationProvider>
        </div>
        <div>
          <FormControl>
            <Select
              value={medicareAdvantage}
              {...register("medicareAdvantage")}
              onChange={handleChangeMedicareOption}
              input={<OutlinedInput />}
              renderValue={(selected) => {
                if (selected.length === 0) {
                  return <em>select...</em>;
                }

                return selected;
              }}
            >
              {medicareAdvantageOption.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div>
          <Input
            type="text"
            {...register("name", { required: "필수 입력값입니다" })}
          />
          {errors.name?.type === "required" && (
            <p role="alert">{errors.name.message}</p>
          )}
        </div>
        <div>
          <button type="submit">제출</button>
        </div>
      </form>
    </>
  );
}

export default App;
