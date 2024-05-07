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
    control,
    formState: { errors },
  } = useForm<PatientFormSchema>({ resolver: zodResolver(patientFormSchema) });

  const [isLTC, setIsLTC] = useState<boolean>(false);
  const [selectRoomNumber, setSelectRoomNumber] = useState<string>("");

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
  console.log(isLTC);

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
            <p style={{ color: "#ff0000" }}>{errors.medicareNumber?.message}</p>
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

            <FormControlLabel
              control={
                <Checkbox
                  value={isLTC}
                  onChange={(e) => setIsLTC(e.target.checked)}
                />
              }
              label="LTC"
            />
          </div>
          {isLTC ? (
            <div style={{ display: "flex" }}>
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
                itemValue={selectRoomNumber}
              />
              <p style={{ color: "#ff0000" }}>
                {errors.selectRoomNumber?.message}
              </p>
              {selectRoomNumber == "Enter the Room No" ? (
                <>
                  <InputLabel htmlFor="roomNumber">Room No *</InputLabel>
                  <Input id="roomNumber" type="text" />
                  <p style={{ color: "#ff0000" }}>
                    {errors.roomNumber?.message}
                  </p>
                </>
              ) : null}
              <FormControl>
                <label htmlFor="roomNumber">Room No *</label>
                <Input id="roomNumber" type="text" />
                <p style={{ color: "#ff0000" }}>{errors.roomNumber?.message}</p>
              </FormControl>
            </div>
          ) : null}

          <div>
            <div style={{ display: "flex" }}>
              <CustomSelect
                menuItems={clinicBranchOption}
                name="clinicBranch"
                label="Clinic Branch *"
                control={control}
              />
              <p style={{ color: "#ff0000" }}>{errors.clinicBranch?.message}</p>

              <FormControl>
                <label htmlFor="lastName">Last Name *</label>
                <JustEnInput control={control} name="lastName" id="lastName" />
                {errors.lastName?.message ? (
                  <FormHelperText style={{ color: "#ff0000" }}>
                    This field is required.
                  </FormHelperText>
                ) : null}
              </FormControl>
              <FormControl>
                <label htmlFor="firstName">First Name *</label>
                <JustEnInput
                  control={control}
                  name="firstName"
                  id="firstName"
                />
                {errors.firstName?.message ? (
                  <FormHelperText style={{ color: "#ff0000" }}>
                    This field is required.
                  </FormHelperText>
                ) : null}
              </FormControl>
              <FormControl>
                <label htmlFor="middleName">Middle Name</label>
                <JustEnInput
                  control={control}
                  name="middleName"
                  id="middleName"
                />
                {errors.firstName?.message ? (
                  <FormHelperText style={{ color: "#ff0000" }}>
                    This field is required.
                  </FormHelperText>
                ) : null}
              </FormControl>

              <CustomSelect
                menuItems={suffixOption}
                name="suffix"
                label="Suffix"
                control={control}
              />
            </div>
            <div style={{ display: "flex" }}>
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
            </div>
            <div style={{ display: "flex" }}>
              <FormControl>
                <label htmlFor="ehrId">EHR ID</label>
                <div style={{ display: "flex" }}>
                  <JustEnInput control={control} name="ehrId" id="ehrId" />
                  <p style={{ color: "#ff0000" }}>{errors.ehrId?.message}</p>
                  <Button
                    variant="contained"
                    sx={{ width: "150px", fontSize: "10px" }}
                  >
                    EHR ID Check
                  </Button>
                </div>
              </FormControl>

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
            <p style={{ color: "#ff0000" }}>{errors.phone?.message}</p>
            <InputLabel htmlFor="email">Email Address *</InputLabel>
            <Input id="email" type="text" {...register("email")} />
            <p style={{ color: "#ff0000" }}>{errors.email?.message}</p>
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
