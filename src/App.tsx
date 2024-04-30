import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Input from "@mui/material/Input";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const medicareAdvantageOption = ["Clover", "HealthNet", "AUnicare"];

function App() {
  const [BillableValue, setBillableValue] = useState("ppo");

  // 핸드폰 번호 유효성 검사 정규식 ( 0으로 시작해야 하고 , 두번째 입력은 3-4자리 0~9 숫자, 세번째 입력은 4자리 0~9 숫자)
  const phoneRegex = new RegExp(/^0-?([0-9]{3,4})-?([0-9]{4})$/);

  const userSchema = z.object({
    name: z
      .string()
      .min(2, { message: "이름은 최소 2자리 이상이어야 합니다." }),
    phone: z
      .string()
      .regex(phoneRegex, "핸드폰 번호 형식이 아닙니다.")
      .min(8, { message: "핸드폰 번호는 최소 8자리 이상이어야 합니다." }),
    born: z.string(),
    billableOption: z.string(),
    medicareAdvantage: z.string(),
  });

  const handleChangeBill = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBillableValue((event.target as HTMLInputElement).value);
  };

  const [medicareAdvantage, setMedicareAdvantage] = useState<string[]>([]);

  const handleChangeMedicareOption = (
    event: SelectChangeEvent<typeof medicareAdvantage>
  ) => {
    const {
      target: { value },
    } = event;
    setMedicareAdvantage(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <>
      <div>
        <Input type="number" />
        <Input type="number" />
        <Input type="number" />
      </div>
      <div>
        <FormControl>
          <FormLabel>Billable Option</FormLabel>
          <RadioGroup value={BillableValue} onChange={handleChangeBill}>
            <FormControlLabel
              value="ppo"
              control={<Radio />}
              label="Billable PPO"
            />
            <FormControlLabel
              value="hmo"
              control={<Radio />}
              label="Medicare HMO"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker />
        </LocalizationProvider>
      </div>
      <div>
        <FormControl>
          <Select
            multiple
            displayEmpty
            value={medicareAdvantage}
            onChange={handleChangeMedicareOption}
            input={<OutlinedInput />}
            renderValue={(selected) => {
              if (selected.length === 0) {
                return <em>select...</em>;
              }

              return selected.join(", ");
            }}
            inputProps={{ "aria-label": "Without label" }}
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
        <Input type="text" />
      </div>
      <div>
        <button type="submit">제출</button>
      </div>
    </>
  );
}

export default App;
