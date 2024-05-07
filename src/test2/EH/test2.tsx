import { useState } from "react";
import {
  Radio,
  FormControlLabel,
  Input,
  MenuItem,
  RadioGroup,
  Select,
  InputLabel,
  Button,
  TextField,
  Checkbox,
  FormHelperText,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { InsuranceSchemaType, insuranceSchema } from "./Schema/InsuranceSchema";

const BillableOptionValue = ["Medicare PPO", "Medicare HMO"];
const MedicareAdvantageValue = ["box1", "box2", "box3"];
const FacilityValue = ["box1", "box2", "box3"];
const RoomNoValue = ["box1", "box2", "box3"];
const ClinicBranchValue = ["box1", "box2", "box3"];
const SuffixValue = ["box1", "box2", "box3"];
const GenderValue = ["male", "female", "X"];
const PrimaryLanguageValue = ["Korean", "English", "Spanish"];
const DXCodeValue = ["box1", "box2", "box3"];
const PrimaryPhysicianValue = ["box1", "box2", "box3"];
const ConditionValue = ["box1", "box2", "box3"];
const PhoneTypeValue = ["Home", "Work", "Mobile"];
const RelationshipValue = ["box1", "box2", "box3"];

function Test2EH() {
  const {
    register,
    trigger,
    control,
    watch,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<InsuranceSchemaType>({
    resolver: zodResolver(insuranceSchema),
  });

  const [isMedicareValid, setIsMedicareValid] = useState(false);
  const medicareButtonHandler = () => {
    setIsMedicareValid(true);
  };

  console.log(watch());
  return (
    <form
      onSubmit={handleSubmit(
        (data: InsuranceSchemaType) =>
          isMedicareValid && alert(JSON.stringify(data))
      )}
    >
      <section style={{ display: "flex" }}>
        <p>Insurance</p>
        <p>*required field</p>
      </section>

      <section style={{ display: "flex" }}>
        <div>
          <InputLabel>Medicare Number*</InputLabel>
          <TextField
            variant='standard'
            helperText={errors.medicareNumber?.message}
            FormHelperTextProps={{ sx: { color: "red" } }}
            {...register("medicareNumber")}
          />

          <Button
            variant='contained'
            disabled={!isDirty}
            onClick={() => {
              trigger("medicareNumber");
              medicareButtonHandler();
            }}
          >
            Medicare Check
          </Button>
        </div>

        <div>
          <InputLabel>Billable Option*</InputLabel>
          <RadioGroup defaultValue={"Medicare PPO"} row>
            {BillableOptionValue.map((value, index) => (
              <FormControlLabel
                key={index}
                value={value}
                control={<Radio />}
                label={value}
                {...register("billableOption")}
              />
            ))}
          </RadioGroup>
        </div>

        <div>
          <InputLabel>Effective Start Date</InputLabel>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Controller
              control={control}
              name='date'
              render={({ field: { onChange, value } }) => (
                <DatePicker
                  onChange={(date) =>
                    onChange(dayjs(date).format("YYYY-MM-DD"))
                  }
                  value={value ? dayjs(value) : null}
                />
              )}
            />
          </LocalizationProvider>
        </div>
      </section>

      <section style={{ display: "flex" }}>
        <div>
          <InputLabel>Medicare Advantage</InputLabel>
          <Select
            defaultValue='defaultValue'
            {...register("medicareAdvantage")}
          >
            <MenuItem disabled value='defaultValue'>
              Select...
            </MenuItem>
            {MedicareAdvantageValue.map((value, index) => (
              <MenuItem key={index} value={value}>
                {value}
              </MenuItem>
            ))}
          </Select>
        </div>

        <div>
          <InputLabel>Medicare Advantage group number</InputLabel>
          <TextField variant='standard' disabled />
        </div>

        <div>
          <InputLabel>Medicare Advantage individual number</InputLabel>
          <TextField variant='standard' disabled />
        </div>

        <div>
          <InputLabel>Medi-CAL Number</InputLabel>
          <Input />
          <Button>Medi-CAL Check</Button>
        </div>
      </section>

      <section style={{ display: "flex" }}>
        <div>
          <InputLabel>Facility*</InputLabel>
          <Select defaultValue='defaultValue' {...register("facility")}>
            <MenuItem disabled value='defaultValue'>
              Select...
            </MenuItem>
            {FacilityValue.map((value, index) => (
              <MenuItem key={index} value={value}>
                {value}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText sx={{ color: "red" }}>
            {errors.facility?.message}
          </FormHelperText>
        </div>

        <div>
          <InputLabel>Room No*</InputLabel>
          <Select defaultValue='defaultValue' {...register("roomNo")}>
            <MenuItem disabled value='defaultValue'>
              Select...
            </MenuItem>
            {RoomNoValue.map((value, index) => (
              <MenuItem key={index} value={value}>
                {value}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText sx={{ color: "red" }}>
            {errors.roomNo?.message}
          </FormHelperText>
        </div>
      </section>

      <section style={{ display: "flex" }}>
        <div>
          <InputLabel>Clinic Branch*</InputLabel>
          <Select defaultValue='defaultValue' {...register("clinicBranch")}>
            <MenuItem disabled value='defaultValue'>
              Select...
            </MenuItem>
            {ClinicBranchValue.map((value, index) => (
              <MenuItem key={index} value={value}>
                {value}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText sx={{ color: "red" }}>
            {errors.clinicBranch?.message}
          </FormHelperText>
        </div>

        <div>
          <InputLabel>Last Name*</InputLabel>
          <TextField
            variant='standard'
            helperText={errors.lastName?.message}
            FormHelperTextProps={{ sx: { color: "red" } }}
            {...register("lastName")}
          />
        </div>

        <div>
          <InputLabel>First Name*</InputLabel>
          <TextField
            variant='standard'
            helperText={errors.firstName?.message}
            FormHelperTextProps={{ sx: { color: "red" } }}
            {...register("firstName")}
          />
        </div>

        <div>
          <InputLabel>Middle Name</InputLabel>
          <Input />
        </div>

        <div>
          <InputLabel>Suffix</InputLabel>
          <Select defaultValue='defaultValue'>
            <MenuItem disabled value='defaultValue'>
              Select...
            </MenuItem>
            {SuffixValue.map((value, index) => (
              <MenuItem key={index} value={value}>
                {value}
              </MenuItem>
            ))}
          </Select>
        </div>
      </section>

      <section style={{ display: "flex" }}>
        <div>
          <InputLabel>Gender*</InputLabel>
          <Select defaultValue='defaultValue' {...register("gender")}>
            <MenuItem disabled value='defaultValue'>
              Select...
            </MenuItem>
            {GenderValue.map((value, index) => (
              <MenuItem key={index} value={value}>
                {value}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText sx={{ color: "red" }}>
            {errors.gender?.message}
          </FormHelperText>
        </div>

        <div>
          <InputLabel>Date of Birth*</InputLabel>
          <Input type='date' />
        </div>

        <div>
          <InputLabel>Height</InputLabel>
          <TextField
            variant='standard'
            FormHelperTextProps={{ sx: { color: "red" } }}
          />
        </div>

        <div>
          <InputLabel>Primary Language</InputLabel>
          <Select defaultValue='defaultValue'>
            <MenuItem disabled value='defaultValue'>
              Select...
            </MenuItem>
            {PrimaryLanguageValue.map((value, index) => (
              <MenuItem key={index} value={value}>
                {value}
              </MenuItem>
            ))}
          </Select>
        </div>
      </section>

      <section style={{ display: "flex" }}>
        <div>
          <InputLabel>EHR ID*</InputLabel>
          <TextField
            variant='standard'
            helperText={errors.ehrID?.message}
            FormHelperTextProps={{ sx: { color: "red" } }}
            {...register("ehrID")}
          />
          <Button>EHR ID Check</Button>
        </div>

        <div>
          <InputLabel>DX code(ICD-10s)*</InputLabel>
          <Select defaultValue='defaultValue' {...register("dXCode")}>
            <MenuItem disabled value='defaultValue'>
              Search For ICD-10s
            </MenuItem>
            {DXCodeValue.map((value, index) => (
              <MenuItem key={index} value={value}>
                {value}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText sx={{ color: "red" }}>
            {errors.dXCode?.message}
          </FormHelperText>
        </div>

        <div>
          <InputLabel>Primary Physician*</InputLabel>
          <Select defaultValue='defaultValue' {...register("primaryPhysician")}>
            <MenuItem disabled value='defaultValue'>
              Select...
            </MenuItem>
            {PrimaryPhysicianValue.map((value, index) => (
              <MenuItem key={index} value={value}>
                {value}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText sx={{ color: "red" }}>
            {errors.primaryPhysician?.message}
          </FormHelperText>
        </div>

        <div>
          <InputLabel>Patient Medication</InputLabel>
          <TextField multiline />
        </div>

        <div>
          <InputLabel>Conditions</InputLabel>
          <Select defaultValue='defaultValue'>
            <MenuItem disabled value='defaultValue'>
              Select...
            </MenuItem>
            {ConditionValue.map((value, index) => (
              <MenuItem key={index} value={value}>
                {value}
              </MenuItem>
            ))}
          </Select>
        </div>
      </section>

      <section style={{ display: "flex" }}>
        <div>
          <InputLabel>Phone Type*</InputLabel>
          <Select defaultValue='defaultValue' {...register("phoneType")}>
            <MenuItem disabled value='defaultValue'>
              Select...
            </MenuItem>
            {PhoneTypeValue.map((value, index) => (
              <MenuItem key={index} value={value}>
                {value}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText sx={{ color: "red" }}>
            {errors.phoneType?.message}
          </FormHelperText>
        </div>

        <div>
          <InputLabel>Phone Number*</InputLabel>
          <TextField
            variant='standard'
            helperText={errors.phoneNumber?.message}
            FormHelperTextProps={{ sx: { color: "red" } }}
            {...register("phoneNumber")}
          />
          <Button>Phone Check</Button>
        </div>

        <div>
          <InputLabel>Email Address*</InputLabel>
          <TextField
            variant='standard'
            helperText={
              <>
                <Checkbox />
                Patient does not have email
                {errors.emailAddress?.message}
              </>
            }
            {...register("emailAddress")}
          />
          <Button>Email Check</Button>
        </div>
      </section>

      <section style={{ display: "flex" }}>
        <div>
          <InputLabel>Emergency Contacts</InputLabel>
          <Input placeholder='Name(last)' />
        </div>

        <div>
          <Input placeholder='Name(first)' />
        </div>

        <div>
          <Input placeholder='Name(middle)' />
        </div>

        <div>
          <Select defaultValue='defaultValue'>
            <MenuItem disabled value='defaultValue'>
              Relationship
            </MenuItem>
            {RelationshipValue.map((value, index) => (
              <MenuItem key={index} value={value}>
                {value}
              </MenuItem>
            ))}
          </Select>
        </div>

        <div>
          <Input placeholder='Contact Number' />
        </div>
      </section>

      <section style={{ display: "flex" }}>
        <div>
          <InputLabel>Street Address</InputLabel>
          <Input />
        </div>

        <div>
          <InputLabel>Apt, suite, etc.(optional)</InputLabel>
          <Input />
        </div>

        <div>
          <InputLabel>City</InputLabel>
          <Input />
        </div>

        <div>
          <InputLabel>State / Province</InputLabel>
          <Input />
        </div>

        <div>
          <InputLabel>ZIP / Postal</InputLabel>
          <Input />
        </div>
      </section>

      <Button type='submit'>SAVE</Button>
    </form>
  );
}

export default Test2EH;
