import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  InputContainer,
  MainContainer,
  SectionContainer,
  RedText,
  BlueText,
} from "./test2.styled";

import {
  Input,
  MenuItem,
  RadioGroup,
  Select,
  InputLabel,
  Button,
  TextField,
  Checkbox,
  FormHelperText,
  FormControlLabel,
  Radio,
  FormControl,
} from "@mui/material";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { SelectChangeEvent } from "@mui/material/Select";

interface InputProps {
  medicareNumber: string;
  billableOption: "Medicare PPO" | "Medicare HMO";
  startDate: Date;
}

const MedicareAdvantageData = [
  "아이템1",
  "아이템2",
  "아이템3",
  "아이템4",
  "아이템5",
  "아이템6",
  "아이템7",
];

function Test2JH() {
  const [patientData, setPatientData] = useState();
  const [medicareAdvantage, setMedicareAdvantage] = useState("");
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // resolver: zodResolver(),
  });

  const onSubmit: SubmitHandler<InputProps | FieldValues> = (data) =>
    setPatientData(data);

  const handleChange = (event: SelectChangeEvent) => {
    setMedicareAdvantage(event.target.value);
  };

  console.log(watch());
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <MainContainer>
          <BlueText>Insurance</BlueText>
          <RedText>* required field</RedText>
        </MainContainer>
        <SectionContainer>
          <InputContainer>
            <InputLabel style={{ display: "flex", alignItems: "center" }}>
              Medicare Number <RedText>*</RedText>
            </InputLabel>
            <Input type="text" {...register("medicareNumber")} />
            <Button variant="contained">Medicare Check</Button>
          </InputContainer>

          <InputContainer>
            <InputLabel>Billable Option*</InputLabel>
            <RadioGroup row defaultValue="Medicare PPO">
              <FormControlLabel
                value="Medicare PPO"
                control={<Radio />}
                label="Medicare PPO"
                {...register("billableOption")}
              />
              <FormControlLabel
                value="Medicare HMO"
                control={<Radio />}
                label="Medicare HMO"
                {...register("billableOption")}
              />
            </RadioGroup>
          </InputContainer>

          <InputContainer>
            <InputLabel>Effective Start Date</InputLabel>
            <Input type="text" {...register("startDate")} />
          </InputContainer>
        </SectionContainer>
        <SectionContainer>
          <InputContainer>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
              <InputLabel>Medicare Advantage</InputLabel>
              <Select
                value={medicareAdvantage}
                label="select..."
                {...register("medicareAdvantage")}
                onChange={handleChange}
              >
                {MedicareAdvantageData.map((value, index) => (
                  <MenuItem key={index} value={value}>
                    {value}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </InputContainer>

          <InputContainer>
            <InputLabel>Medicare Advantage group number</InputLabel>
            <Input type="text" disabled {...register("groupNumber")} />
          </InputContainer>

          <InputContainer>
            <InputLabel>Medicare Advantage individual number</InputLabel>
            <Input type="text" disabled {...register("individualNumber")} />
          </InputContainer>

          <InputContainer>
            <InputLabel>Medi-CAL Number</InputLabel>
            <Input type="text" {...register("medicalNumber")} />
            <Button variant="contained">Medi-CAL Check</Button>
          </InputContainer>
        </SectionContainer>
      </div>

      <Button type="submit">SAVE</Button>
    </form>
  );
}

export default Test2JH;
