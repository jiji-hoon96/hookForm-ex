import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import Input from "@mui/material/Input";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { UserFormSchema, userFormSchema } from "./testSchma";

const medicareAdvantageOption = ["Clover", "HealthNet", "Unicare"];

function TestHj() {
  const [BillableValue, setBillableValue] = useState<string>("Billable PPO");
  const [medicareAdvantage, setMedicareAdvantage] = useState<string>("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<UserFormSchema>({ resolver: zodResolver(userFormSchema) });
  console.log(watch("birth"));

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

  const handleChangeDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    const day = event.target.value.toString().split("-");
    const formatDay = `${day[1]}/${day[2]}/${day[0]}`;
    console.log(formatDay);
  };

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const regExp = /[^a-zA-Z]/g;
    const ele = event.target;
    if (regExp.test(ele.value)) {
      ele.value = ele.value.replace(regExp, "");
    }
  };

  const onSubmit: SubmitHandler<UserFormSchema> = (data) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input
            type="any"
            {...register("phone", { required: "필수 입력값입니다" })}
          />
          {errors.phone?.type === "required" && <p>{errors.phone.message}</p>}
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
          <input
            type="date"
            {...register("birth", { onChange: handleChangeDate })}
          />
        </div>
        <div>
          <FormControl>
            <Select
              value={medicareAdvantage}
              {...register("medicareAdvantage")}
              onChange={handleChangeMedicareOption}
              input={<OutlinedInput />}
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
            onChange={handleChangeName}
          />
          {errors.name?.type === "required" && <p>{errors.name.message}</p>}
        </div>
        <div>
          <button type="submit">제출</button>
        </div>
      </form>
    </>
  );
}

export default TestHj;
