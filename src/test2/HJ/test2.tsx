import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { PatientFormSchema, patientFormSchema } from "./test2Schema";
import {
  useForm,
  SubmitHandler,
  FieldPath,
  Control,
  Controller,
} from "react-hook-form";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import JustEnInput from "./JustEnInput";
import CustomSelect from "./CustomSelect";
import JustNumInput from "./JustNumInput";
import {
  FormControl,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

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

  console.log(errors);

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
            <Controller
              name="medicareNumber"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  {...field}
                  id="medicareNumber"
                  type="text"
                  onChange={(e) => {
                    field.onChange(
                      e.target.value
                        .replace(/[^\dA-Za-z가-힣]/g, "") // 숫자, 영어, 한글 이외의 문자 제거
                        .replace(
                          /^([\dA-Za-z가-힣]{0,3})([\dA-Za-z가-힣]{0,4})([\dA-Za-z가-힣]{0,4})$/,
                          (_, a, b, c) => {
                            const parts = [a, b, c];
                            const filteredParts = parts.filter(
                              (part) => part !== ""
                            );
                            return filteredParts.join("-");
                          }
                        )
                        .replace(/(-{1,2})$/, "")
                    );
                  }}
                />
              )}
            />

            <FormControl>
              <FormLabel>Billable Option</FormLabel>
              <RadioGroup>
                <FormControlLabel
                  value="Billable PPO"
                  control={<Radio defaultChecked />}
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
              <FormControlLabel control={<Checkbox />} label="LTC" />
            </FormGroup>
          </div>

          <CustomSelect
            menuItems={facilityOption}
            name="facility"
            label="Facility *"
            control={control}
          />
          <p style={{ color: "#ff0000" }}>{errors.facility?.message}</p>

          <CustomSelect
            menuItems={selectRoomNumberOption}
            name="selectRoomNumber"
            label="Room No *"
            control={control}
          />
          <p style={{ color: "#ff0000" }}>{errors.selectRoomNumber?.message}</p>

          <InputLabel htmlFor="roomNumber">Room No *</InputLabel>
          <Input id="roomNumber" type="text" />

          <CustomSelect
            menuItems={clinicBranchOption}
            name="clinicBranch"
            label="Clinic Branch *"
            control={control}
          />
          <p style={{ color: "#ff0000" }}>{errors.clinicBranch?.message}</p>

          <div>
            <FormControl>
              <label htmlFor="lastName">Last Name *</label>
              <JustEnInput control={control} name="lastName" id="lastName" />
              <FormHelperText>daf</FormHelperText>
              <p style={{ color: "#ff0000" }}>{errors.lastName?.message}</p>
            </FormControl>

            <InputLabel htmlFor="firstName">First Name *</InputLabel>
            <JustEnInput id="firstName" name="firstName" control={control} />
            <p style={{ color: "#ff0000" }}>{errors.firstName?.message}</p>
            <InputLabel htmlFor="middleName">Middle Name</InputLabel>
            <JustEnInput id="middleName" name="middleName" control={control} />
            <CustomSelect
              menuItems={suffixOption}
              name="suffix"
              label="Suffix"
              control={control}
            />
            <CustomSelect
              menuItems={genderOption}
              name="gender"
              label="Gender *"
              control={control}
            />
            <p style={{ color: "#ff0000" }}>{errors.gender?.message}</p>

            <InputLabel htmlFor="birth">Date of Birth *</InputLabel>
            <Controller
              name="birth"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  {...field}
                  id="birth"
                  type="date"
                  onChange={(e) => {
                    field.onChange(e.target.value);
                  }}
                />
              )}
            />
            <p style={{ color: "#ff0000" }}>{errors.birth?.message}</p>

            <InputLabel htmlFor="height"> Height</InputLabel>
            <JustNumInput id="height" name="height" control={control} />
            <CustomSelect
              menuItems={languageOption}
              name="language"
              label="Primary Language"
              control={control}
            />
            <InputLabel htmlFor="ehrId">EHR ID</InputLabel>
            <Input id="ehrId" type="text" {...register("ehrId")} />
            <p style={{ color: "#ff0000" }}>{errors.ehrId?.message}</p>
            <Button variant="contained">EHR ID Check</Button>
            <CustomSelect
              menuItems={physicianOption}
              name="primaryPhysician"
              label="Primary Physician *"
              control={control}
            />
            <p style={{ color: "#ff0000" }}>
              {errors.primaryPhysician?.message}
            </p>
            <InputLabel htmlFor="patientMedication">
              Patient Medication
            </InputLabel>
            <TextField
              id="patientMedication"
              variant="outlined"
              {...register("patientMedication")}
            />
            <CustomSelect
              menuItems={conditionsOption}
              name="conditions"
              label="Conditions"
              control={control}
            />
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
            <InputLabel htmlFor="phone">phone *</InputLabel>
            <Controller
              name="phone"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  {...field}
                  id="phone"
                  type="text"
                  onChange={(e) => {
                    field.onChange(
                      e.target.value
                        .replace(/[^\d]/g, "")
                        .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
                        .replace(/(-{1,2})$/g, "")
                    );
                  }}
                />
              )}
            />

            <InputLabel htmlFor="email">Email Address *</InputLabel>
            <Input id="email" type="text" {...register("email")} />

            <label htmlFor="emergencyContacts">Emergency Contacts</label>
            <JustEnInput
              control={control}
              name="emergencyContactsLast"
              id="emergencyContacts"
              placeholder="Name(last)"
            />
            <JustEnInput
              control={control}
              name="emergencyContactsFirst"
              id="emergencyContactsFirst"
              placeholder="Name(first)"
            />
            <JustEnInput
              control={control}
              name="emergencyContactsMiddle"
              id="emergencyContactsMiddle"
              placeholder="Name(middle)"
            />

            <Controller
              name="relationship"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  {...field}
                  id="relationship"
                  type="text"
                  placeholder="Contact Number"
                  onChange={(e) => {
                    field.onChange(
                      e.target.value
                        .replace(/[^\d]/g, "")
                        .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
                        .replace(/(-{1,2})$/g, "")
                    );
                  }}
                />
              )}
            />
          </div>
        </section>
        <Button variant="contained" type="submit">
          Save
        </Button>
      </form>
    </>
  );
}

export default Test2HJ;
