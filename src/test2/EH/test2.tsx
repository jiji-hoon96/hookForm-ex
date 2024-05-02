import { zodResolver } from "@hookform/resolvers/zod";
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
} from "@mui/material";
import { useForm } from "react-hook-form";
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
const PhoneTypeValue = ["box1", "box2", "box3"];

const RelationshipValue = ["box1", "box2", "box3"];

function Test2EH() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<InsuranceSchemaType>({
    resolver: zodResolver(insuranceSchema),
  });

  console.log(watch());
  return (
    <>
      <section style={{ display: "flex" }}>
        <p>Insurance</p>
        <p>*required field</p>
      </section>
      <section style={{ display: "flex" }}>
        <div>
          <InputLabel>Medicare Number*</InputLabel>
          <Input required />
          <Button variant='filled'>Medicare Check</Button>
        </div>

        <div>
          <InputLabel>Billable Option*</InputLabel>
          <RadioGroup row>
            {BillableOptionValue.map((value, index) => (
              <FormControlLabel
                key={index}
                value={value}
                control={<Radio />}
                label={value}
              />
            ))}
          </RadioGroup>
        </div>

        <div>
          <InputLabel>Effective Start Date</InputLabel>
          <Input type='date' />
        </div>
      </section>
      <section style={{ display: "flex" }}>
        <div>
          <InputLabel>Medicare Advantage</InputLabel>
          <Select defaultValue='defaultValue'>
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
          <Input />
        </div>

        <div>
          <InputLabel>Medicare Advantage individual number</InputLabel>
          <Input />
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
          <Select defaultValue='defaultValue'>
            <MenuItem disabled value='defaultValue'>
              Select...
            </MenuItem>
            {FacilityValue.map((value, index) => (
              <MenuItem key={index} value={value}>
                {value}
              </MenuItem>
            ))}
          </Select>
        </div>

        <div>
          <InputLabel>Room No*</InputLabel>
          <Select defaultValue='defaultValue'>
            <MenuItem disabled value='defaultValue'>
              Select...
            </MenuItem>
            {RoomNoValue.map((value, index) => (
              <MenuItem key={index} value={value}>
                {value}
              </MenuItem>
            ))}
          </Select>
        </div>
      </section>

      <section style={{ display: "flex" }}>
        <div>
          <InputLabel>Clinic Branch*</InputLabel>
          <Select defaultValue='defaultValue'>
            <MenuItem disabled value='defaultValue'>
              Select...
            </MenuItem>
            {ClinicBranchValue.map((value, index) => (
              <MenuItem key={index} value={value}>
                {value}
              </MenuItem>
            ))}
          </Select>
        </div>

        <div>
          <InputLabel>Last Name*</InputLabel>
          <Input />
        </div>

        <div>
          <InputLabel>First Name*</InputLabel>
          <Input />
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
          <Select defaultValue='defaultValue'>
            <MenuItem disabled value='defaultValue'>
              Select...
            </MenuItem>
            {GenderValue.map((value, index) => (
              <MenuItem key={index} value={value}>
                {value}
              </MenuItem>
            ))}
          </Select>
        </div>

        <div>
          <InputLabel>Date of Birth*</InputLabel>
          <Input type='date' />
        </div>

        <div>
          <InputLabel>Height</InputLabel>
          <Input />
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
          <Input />
          <Button>EHR ID Check</Button>
        </div>

        <div>
          <InputLabel>DX code(ICD-10s)*</InputLabel>
          <Select defaultValue='defaultValue'>
            <MenuItem disabled value='defaultValue'>
              Select...
            </MenuItem>
            {DXCodeValue.map((value, index) => (
              <MenuItem key={index} value={value}>
                {value}
              </MenuItem>
            ))}
          </Select>
        </div>

        <div>
          <InputLabel>Primary Physician*</InputLabel>
          <Select defaultValue='defaultValue'>
            <MenuItem disabled value='defaultValue'>
              Select...
            </MenuItem>
            {PrimaryPhysicianValue.map((value, index) => (
              <MenuItem key={index} value={value}>
                {value}
              </MenuItem>
            ))}
          </Select>
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
          <Select defaultValue='defaultValue'>
            <MenuItem disabled value='defaultValue'>
              Select...
            </MenuItem>
            {PhoneTypeValue.map((value, index) => (
              <MenuItem key={index} value={value}>
                {value}
              </MenuItem>
            ))}
          </Select>
        </div>

        <div>
          <InputLabel>Phone Number*</InputLabel>
          <Input />
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
              </>
            }
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

      <Button>SAVE</Button>
      {/* <form
        onSubmit={handleSubmit((data: InsuranceSchemaType) =>
          console.log(data)
        )}
      >
        <section>
          <Input
            {...register("phoneNumber")}
            onChange={(e) =>
              (e.target.value = e.target.value.replace(/\D/g, ""))
            }
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
        </section>

        <section>
        
          {errors.selectBox && (
            <p style={{ color: "red" }}>{errors.selectBox.message}</p>
          )}
        </section>

        <section>
          <Input
            {...register("name")}
            onChange={(e) => {
              e.target.value = e.target.value.replace(/[^A-Za-z]/g, "");
            }}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
        </section>

        <section>
          <button type='reset'>리셋</button>
          <button type='submit'>제출</button>
        </section>
      </form> */}
    </>
  );
}

export default Test2EH;
