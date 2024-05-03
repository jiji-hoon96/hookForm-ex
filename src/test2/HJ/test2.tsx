import { useState } from "react";

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
  const [BillableValue, setBillableValue] = useState<string>("Billable PPO");
  const [medicareAdvantage, setMedicareAdvantage] = useState<string>("");
  const [clinicBranch, setClinicBranch] = useState<string>("");
  const [suffix, setSuffix] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [language, setLanguage] = useState<string>("");
  const [physician, setPhysician] = useState<string>("");
  const [conditions, setConditions] = useState<string>("");
  const [phoneType, setPhoneType] = useState<string>("");
  const [relationship, setRelationship] = useState<string>("");

  const medicareAdvantageOption = ["Clover", "HealthNet", "Unicare"];

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

  return (
    <>
      <section>
        <p>Insurance</p>
        <p>* required field</p>
        <div>
          <InputLabel htmlFor="medicareNumber">Medicare Number *</InputLabel>
          <Input id="medicareNumber" type="text" />
          <Button>Medicare Check</Button>

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
          <Button>Medi-CAL Check</Button>
        </div>
      </section>

      <section>
        <p>Patient profile</p>{" "}
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="LTC" />
        </FormGroup>
        <FormControl>
          <InputLabel htmlFor="clinicBranch">Clinic branch</InputLabel>
          <Select
            labelId="clinicBranch"
            value={clinicBranch}
            // {...register("medicareAdvantage")}
            onChange={handleChangeClinicBranch}
            // input={<OutlinedInput label="Clinic branch" />}
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
            <TextField variant="standard" type="text" id="lastName" />
          </InputLabel>
          <InputLabel htmlFor="firstName">
            First Name *
            <TextField variant="standard" type="text" id="firstName" />
          </InputLabel>
          <InputLabel htmlFor="middleName">
            Middle Name
            <TextField variant="standard" type="text" id="middleName" />
          </InputLabel>

          <FormControl>
            <InputLabel htmlFor="suffix">Suffix</InputLabel>
            <Select
              labelId="suffix"
              value={suffix}
              // {...register("medicareAdvantage")}
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
              // {...register("medicareAdvantage")}
              onChange={handleChangeGender}
              // input={<OutlinedInput label="Clinic branch" />}
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
          <Input id="birth" type="date"></Input>

          <InputLabel htmlFor="height">Height</InputLabel>
          <Input id="height" type="text"></Input>

          <FormControl>
            <InputLabel htmlFor="language">Primary Language</InputLabel>
            <Select
              labelId="language"
              value={language}
              // {...register("medicareAdvantage")}
              onChange={handleChangeLanguage}
              // input={<OutlinedInput label="Language" />}
              displayEmpty
              renderValue={language !== "" ? undefined : () => <p>Select...</p>}
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
          <Input id="ehrId" type="text"></Input>
          <Button>EHR ID Check</Button>

          <FormControl>
            <InputLabel htmlFor="physician">Primary Physician *</InputLabel>
            <Select
              labelId="physician"
              value={physician}
              // {...register("medicareAdvantage")}
              onChange={handleChangePhysician}
              // input={<OutlinedInput label="physician" />}
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
          <TextField id="patientMedication" variant="outlined" />

          <FormControl>
            <InputLabel htmlFor="conditions">Conditions</InputLabel>
            <Select
              labelId="conditions"
              value={conditions}
              // {...register("medicareAdvantage")}
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
        <p>Contact</p>
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
          <Button>Phone Check</Button>

          <FormGroup>
            <InputLabel htmlFor="email">Email Address *</InputLabel>
            <Input id="email" type="email"></Input>
            <FormControlLabel
              control={<Checkbox />}
              label="patient does not have email"
            />
            <Button>Email Check</Button>
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
        <Button type="submit">Save</Button>
      </section>
    </>
  );
}

export default Test2HJ;
