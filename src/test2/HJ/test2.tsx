import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { PatientFormSchema, patientFormSchema } from "./test2Schema";
import { useForm, SubmitHandler } from "react-hook-form";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";

function Test2HJ() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<PatientFormSchema>({ resolver: zodResolver(patientFormSchema) });
  console.log(watch("gender"));

  const [BillableValue, setBillableValue] = useState<string>("Billable PPO");
  const [medicareAdvantage, setMedicareAdvantage] = useState<string>("");
  const [checkedLTC, setCheckedLTC] = useState<boolean>(false);
  const [facility, setFacility] = useState<string>("");
  const [selectRoomNumber, setSelectRoomNumber] = useState<string>("");
  const [clinicBranch, setClinicBranch] = useState<string>("");
  const [suffix, setSuffix] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [language, setLanguage] = useState<string>("");
  const [physician, setPhysician] = useState<string>("");
  const [conditions, setConditions] = useState<string>("");
  const [phoneType, setPhoneType] = useState<string>("");
  const [relationship, setRelationship] = useState<string>("");

  const medicareAdvantageOption = ["Clover", "HealthNet", "Unicare"];
  const facilityOption = ["the one of my world", "facilityT", "bbb", "test"];
  const selectRoomNumberOption = ["Enter the Room No", "000", "123", "abc"];
  const clinicBranchOption = [
    "HicareNet",
    "hicarenetBrance",
    "Text Hicare Branch",
  ];
  const suffixOption = [
    "JR Junior",
    "SR Junior",
    "first",
    "second",
    "third",
    "fourth",
    "fifth",
    "sixth",
    "seventh",
  ];
  const genderOption = ["Male", "Female", "X"];
  const languageOption = ["English", "Spanish", "Korean"];
  const physicianOption = ["Testu, Ser", "Abx, Aaa", "Teee, St", "Hhh, H"];
  const conditionsOption = ["Alzheimer", "Bariatrics", "Cancer", "Dementia"];
  const phoneTypeOption = ["Home", "Mobile", "Work", "Other"];
  const relationshipOption = [
    "Spouse",
    "Family Member",
    "Other Relative",
    "Other relationship",
  ];

  const handleChangeMedicareOption = (
    event: SelectChangeEvent<typeof medicareAdvantage>
  ) => {
    const {
      target: { value },
    } = event;
    setMedicareAdvantage(value);
  };

  const handleChangeBill = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBillableValue(event.target.value);
  };

  const handleChangeLTC = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { checked },
    } = event;
    setCheckedLTC(checked);
  };
  const handleChangeFacility = (event: SelectChangeEvent<typeof facility>) => {
    const {
      target: { value },
    } = event;
    setFacility(value);
    setSelectRoomNumber("");
  };

  const handleChangeSelectRoomNumber = (
    event: SelectChangeEvent<typeof selectRoomNumber>
  ) => {
    const {
      target: { value },
    } = event;
    setSelectRoomNumber(value);
  };

  const handleChangeClinicBranch = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const {
      target: { value },
    } = event;
    setClinicBranch(value);
  };

  const handleChangeSuffix = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setSuffix(value);
  };

  const handleChangeGender = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setGender(value);
  };

  const handleChangeLanguage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setLanguage(value);
  };

  const handleChangePhysician = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const {
      target: { value },
    } = event;
    setPhysician(value);
  };

  const handleChangeConditions = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const {
      target: { value },
    } = event;
    setConditions(value);
  };

  const handleChangePhoneType = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const {
      target: { value },
    } = event;
    setPhoneType(value);
  };

  const handleChangeRelationship = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const {
      target: { value },
    } = event;
    setRelationship(value);
  };
  const handleChangeDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    const day = event.target.value.toString().split("-");
    const formatDay = `${day[1]}/${day[2]}/${day[0]}`;
    console.log(formatDay);
  };

  const onSubmit: SubmitHandler<PatientFormSchema> = (data) =>
    console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px solid #a1a1a1",
            }}
          >
            <p>Insurance</p>
            <p>* required field</p>
          </div>
          <div>
            <InputLabel htmlFor="medicareNumber">Medicare Number *</InputLabel>
            <Input id="medicareNumber" type="text" />
            <Button variant="contained">Medicare Check</Button>

            <FormControl>
              <FormLabel>Billable Option</FormLabel>
              <RadioGroup value={BillableValue} onChange={handleChangeBill}>
                <FormControlLabel
                  value="Billable PPO"
                  control={<Radio />}
                  label="Billable PPO"
                  // {...register("billableOption")}
                />
                <FormControlLabel
                  value="Medicare HMO"
                  control={<Radio />}
                  label="Medicare HMO"
                  // {...register("billableOption")}
                />
              </RadioGroup>
            </FormControl>

            <InputLabel htmlFor="startDate">Effective Start Date</InputLabel>
            <Input id="startDate" type="date" />

            <FormControl>
              <Select
                value={medicareAdvantage}
                // {...register("medicareAdvantage")}
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
            <InputLabel htmlFor="medicareAdvantageGroupNumber">
              Medicare Advantage group number
            </InputLabel>
            <Input id="medicareAdvantageGroupNumber" type="text" />

            <InputLabel htmlFor="medicareAdvantageIndividualNumber">
              Medicare Advantage individual number
            </InputLabel>
            <Input id="medicareAdvantageIndividualNumber" type="text" />

            <InputLabel htmlFor="medicalNumber">Medi-CAL Number</InputLabel>
            <Input id="medicalNumber" type="text" />
            <Button variant="contained">Medi-CAL Check</Button>
          </div>
        </section>

        <section>
          <div
            style={{
              display: "flex",
              borderBottom: "1px solid #a1a1a1",
            }}
          >
            <p>Patient profile</p>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox onChange={handleChangeLTC} />}
                label="LTC"
              />
            </FormGroup>
          </div>
          {checkedLTC ? (
            <>
              <FormControl>
                <InputLabel htmlFor="facility">Facility *</InputLabel>
                <Select
                  labelId="facility"
                  value={facility}
                  {...register("facility")}
                  onChange={handleChangeFacility}
                  displayEmpty
                  renderValue={
                    facility !== "" ? undefined : () => <p>Select...</p>
                  }
                >
                  <MenuItem value="" disabled style={{ display: "none" }}>
                    <p>select...</p>
                  </MenuItem>
                  {facilityOption.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl>
                <InputLabel htmlFor="selectRoomNumber">Room No *</InputLabel>
                <Select
                  labelId="selectRoomNumber"
                  value={selectRoomNumber}
                  {...register("selectRoomNumber")}
                  onChange={handleChangeSelectRoomNumber}
                  displayEmpty
                  renderValue={
                    selectRoomNumber !== "" ? undefined : () => <p>Select...</p>
                  }
                >
                  <MenuItem value="" disabled style={{ display: "none" }}>
                    <p>select...</p>
                  </MenuItem>
                  {selectRoomNumberOption.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              {selectRoomNumber == "Enter the Room No" ? (
                <>
                  <InputLabel htmlFor="roomNumber">Room No *</InputLabel>
                  <Input id="roomNumber" type="text" />
                </>
              ) : null}
            </>
          ) : null}

          <FormControl>
            <InputLabel htmlFor="clinicBranch">Clinic branch</InputLabel>
            <Select
              labelId="clinicBranch"
              value={clinicBranch}
              {...register("clinicBranch")}
              onChange={handleChangeClinicBranch}
              displayEmpty
              renderValue={
                clinicBranch !== "" ? undefined : () => <p>Select...</p>
              }
            >
              <MenuItem value="" disabled style={{ display: "none" }}>
                <p>placeholder</p>
              </MenuItem>
              {clinicBranchOption.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <div>
            <InputLabel htmlFor="lastName">
              Last Name *
              <TextField
                variant="standard"
                type="text"
                id="lastName"
                {...register("lastName")}
              />
            </InputLabel>
            <InputLabel htmlFor="firstName">
              First Name *
              <TextField
                variant="standard"
                type="text"
                id="firstName"
                {...register("firstName")}
              />
            </InputLabel>
            <InputLabel htmlFor="middleName">
              Middle Name
              <TextField
                variant="standard"
                type="text"
                id="middleName"
                {...register("middleName")}
              />
            </InputLabel>

            <FormControl>
              <InputLabel htmlFor="suffix">Suffix</InputLabel>
              <Select
                labelId="suffix"
                value={suffix}
                {...register("suffix")}
                onChange={handleChangeSuffix}
                displayEmpty
                renderValue={suffix !== "" ? undefined : () => <p>Select...</p>}
              >
                <MenuItem value="" disabled style={{ display: "none" }}>
                  <p>placeholder</p>
                </MenuItem>
                {suffixOption.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl>
              <InputLabel htmlFor="gender">Gender *</InputLabel>
              <Select
                labelId="gender"
                value={gender}
                {...register("gender")}
                onChange={handleChangeGender}
                displayEmpty
                renderValue={gender !== "" ? undefined : () => <p>Select...</p>}
              >
                <MenuItem value="" disabled style={{ display: "none" }}>
                  <p>Select...</p>
                </MenuItem>
                {genderOption.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <InputLabel htmlFor="birth">Date Of Birth</InputLabel>
            <Input
              id="birth"
              type="date"
              {...register("birth", { onChange: handleChangeDate })}
            ></Input>

            <InputLabel htmlFor="height">Height</InputLabel>
            <Input id="height" type="text" {...register("height")}></Input>

            <FormControl>
              <InputLabel htmlFor="language">Primary Language</InputLabel>
              <Select
                labelId="language"
                value={language}
                {...register("language")}
                onChange={handleChangeLanguage}
                displayEmpty
                renderValue={
                  language !== "" ? undefined : () => <p>Select...</p>
                }
              >
                <MenuItem value="" disabled style={{ display: "none" }}>
                  <p>Select...</p>
                </MenuItem>
                {languageOption.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <InputLabel htmlFor="ehrId">EHR ID</InputLabel>
            <Input id="ehrId" type="text" {...register("ehrId")} />
            <Button variant="contained">EHR ID Check</Button>

            <FormControl>
              <InputLabel htmlFor="physician">Primary Physician *</InputLabel>
              <Select
                labelId="physician"
                value={physician}
                {...register("physician")}
                onChange={handleChangePhysician}
                displayEmpty
                renderValue={
                  physician !== "" ? undefined : () => <p>Select...</p>
                }
              >
                <MenuItem value="" disabled style={{ display: "none" }}>
                  <p>Select...</p>
                </MenuItem>
                {physicianOption.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <InputLabel htmlFor="patientMedication">
              Patient Medication
            </InputLabel>
            <TextField
              id="patientMedication"
              variant="outlined"
              {...register("patientMedication")}
            />

            <FormControl>
              <InputLabel htmlFor="conditions">Conditions</InputLabel>
              <Select
                labelId="conditions"
                value={conditions}
                {...register("conditions")}
                onChange={handleChangeConditions}
                // input={<OutlinedInput label="physician" />}
                displayEmpty
                renderValue={
                  conditions !== "" ? undefined : () => <p>Select...</p>
                }
              >
                <MenuItem value="" disabled style={{ display: "none" }}>
                  <p>Select...</p>
                </MenuItem>
                {conditionsOption.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </section>

        <section>
          <div
            style={{
              display: "flex",
              borderBottom: "1px solid #a1a1a1",
            }}
          >
            <p>Contact</p>
          </div>

          <div>
            <FormControl>
              <InputLabel htmlFor="phoneType">Phone Type *</InputLabel>
              <Select
                labelId="phoneType"
                value={phoneType}
                // {...register("medicareAdvantage")}
                onChange={handleChangePhoneType}
                // input={<OutlinedInput label="phoneType" />}
                displayEmpty
                renderValue={
                  phoneType !== "" ? undefined : () => <p>Select...</p>
                }
              >
                <MenuItem value="" disabled style={{ display: "none" }}>
                  <p>Select...</p>
                </MenuItem>
                {phoneTypeOption.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <InputLabel htmlFor="phoneNumber">Phone Number *</InputLabel>
            <Input id="phoneNumber" type="text"></Input>
            <Button variant="contained">Phone Check</Button>

            <FormGroup>
              <InputLabel htmlFor="email">Email Address *</InputLabel>
              <Input id="email" type="email"></Input>
              <FormControlLabel
                control={<Checkbox />}
                label="patient does not have email"
              />
              <Button variant="contained">Email Check</Button>
            </FormGroup>

            <InputLabel htmlFor="emergencyContacts">
              Emergency Contacts
            </InputLabel>
            <Input id="emergencyContacts" placeholder="Name(last)" />
            <Input id="emergencyContacts" placeholder="Name(first)" />
            <Input id="emergencyContacts" placeholder="Name(middle)" />

            <FormControl>
              <Select
                labelId="relationship"
                value={relationship}
                // {...register("relationship")}
                onChange={handleChangeRelationship}
                // input={<OutlinedInput label="relationship" />}
                displayEmpty
                renderValue={
                  relationship !== "" ? undefined : () => <p>Relationship</p>
                }
              >
                <MenuItem value="" disabled style={{ display: "none" }}>
                  <p>Select...</p>
                </MenuItem>
                {relationshipOption.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <Input id="relationship" placeholder="Contact Number"></Input>

            <InputLabel htmlFor="streetAddress">Street Address</InputLabel>
            <Input id="streetAddress" />
            <InputLabel htmlFor="apt">Apt, suite, etc.(optional)</InputLabel>
            <Input id="apt" />
            <InputLabel htmlFor="city">City</InputLabel>
            <Input id="city" />
            <InputLabel htmlFor="state">State / Province</InputLabel>
            <Input id="state" />
            <InputLabel htmlFor="zip">ZIP / Postal</InputLabel>
            <Input id="zip" />
          </div>
          <Button variant="contained" type="submit">
            Save
          </Button>
        </section>
      </form>
    </>
  );
}

export default Test2HJ;
