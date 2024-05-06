import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { PatientFormSchema, patientFormSchema } from "./test2Schema";
import { useForm, SubmitHandler } from "react-hook-form";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import JustEnInput from "./JustEnInput";
import CustomSelect from "./CustomSelect";

function Test2HJ() {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    control,
    formState: { errors },
  } = useForm<PatientFormSchema>({ resolver: zodResolver(patientFormSchema) });

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

  const onSubmit: SubmitHandler<PatientFormSchema> = (data) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <section>
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
                  {...register("billableOption")}
                />
                <FormControlLabel
                  value="Medicare HMO"
                  control={<Radio />}
                  label="Medicare HMO"
                  {...register("billableOption")}
                />
              </RadioGroup>
              <input type="radio" {...register("billableOption")} />
            </FormControl>

            <InputLabel htmlFor="startDate">Effective Start Date</InputLabel>
            <Input id="startDate" type="date" />

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
        </section> */}

        <section>
          <div
            style={{
              display: "flex",
              borderBottom: "1px solid #a1a1a1",
            }}
          >
            <p>Patient profile</p>
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="LTC" />
            </FormGroup>
          </div>

          <CustomSelect
            menuItems={facilityOption}
            name="facility"
            label="facility"
            control={control}
          />

          <FormControl>
            <InputLabel htmlFor="selectRoomNumber">Room No *</InputLabel>
            <Select
              labelId="selectRoomNumber"
              {...register("selectRoomNumber")}
              displayEmpty
            >
              <MenuItem disabled style={{ display: "none" }}>
                <p>select...</p>
              </MenuItem>
              {selectRoomNumberOption.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <InputLabel htmlFor="roomNumber">Room No *</InputLabel>
          <Input id="roomNumber" type="text" />

          <InputLabel htmlFor="clinicBranch">Clinic branch</InputLabel>
          <Select
            labelId="clinicBranch"
            {...register("clinicBranch")}
            displayEmpty
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

          <div>
            <InputLabel htmlFor="lastName" />
            Last Name *
            <JustEnInput control={control} name="lastName" id="lastName" />
            <InputLabel htmlFor="firstName" />
            First Name *
            <JustEnInput id="firstName" name="firstName" control={control} />
            <InputLabel htmlFor="middleName" />
            Middle Name
            <JustEnInput id="middleName" name="middleName" control={control} />
            <FormControl>
              <InputLabel htmlFor="suffix">Suffix</InputLabel>
              <Select labelId="suffix" {...register("suffix")} displayEmpty>
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
              <Select labelId="gender" {...register("gender")} displayEmpty>
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
            <Input id="birth" type="date" {...register("birth")} />
            <InputLabel htmlFor="height">Height</InputLabel>
            <Input id="height" type="text" {...register("height")} />
            <FormControl>
              <InputLabel htmlFor="language">Primary Language</InputLabel>
              <Select labelId="language" {...register("language")} displayEmpty>
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
              <InputLabel htmlFor="primaryPhysician">
                Primary Physician *
              </InputLabel>
              <Select
                labelId="primaryPhysician"
                {...register("primaryPhysician")}
                displayEmpty
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
                {...register("conditions")}
                displayEmpty
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

        {/* <section>
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
          
        </section> */}
        <Button variant="contained" type="submit">
          Save
        </Button>
      </form>
    </>
  );
}

export default Test2HJ;
