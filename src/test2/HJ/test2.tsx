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
    getValues,
    watch,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<PatientFormSchema>({ resolver: zodResolver(patientFormSchema) });

  const [isLTC, setIsLTC] = useState<boolean>(false);
  const [selectRoomNumber, setSelectRoomNumber] = useState<string>("");
  const [isValidationStatus, setIsValidationStatus] = useState({
    ehrId: false,
    email: false,
    medicalNo: false,
  });
  const [disableEhrIdMessage, setDisableEhrIdMessage] = useState<boolean>(true);
  const [disableEmailErrMessage, setDisableEmailErrMessage] =
    useState<boolean>(true);
  const [disabledMedicalNoErrMessage, setDisabledMedicalNoErrMessage] =
    useState<boolean>(true);

  const medicareAdvantageOption = ["Clover", "HealthNet", "Unicare"];
  const billableOption = ["Medicare PPO", "Medicare HMO"];
  const facilityOption = ["the one of my world", "facilityT", "bbb", "test"];
  const selectRoomNumberOption = ["Enter the Room No", "000", "123", "abc"];
  const clinicBranchOption = [
    "HicareNet",
    "hicarenetBrance",
    "Text Hicare Branch",
  ];
  const phoneTypeOption = ["Mobile", "Home", "Work"];
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
  const relationshipOption = [
    "Spouse",
    "Family Member",
    "Other Relative",
    "Other relationship",
  ];

  const ehrIdMockData = ["Asdf", "Qwer"];
  const emailMockData = [
    "asdf@naver.com",
    "ysk30430@hicare.net",
    "qwer@naver.com",
  ];

  const isAllTrue = Object.values(isValidationStatus).every(
    (status) => status === true
  );

  const onSubmit: SubmitHandler<PatientFormSchema> = (data) => {
    if (isAllTrue === true) {
      console.log(data);
    } else {
      console.log("checking button");
    }
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
            <div style={{ display: "flex" }}>
              <div>
                <InputLabel htmlFor="medicareNumber">
                  Medicare Number *
                </InputLabel>
                <Controller
                  name="medicareNumber"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Input
                      {...field}
                      id="medicareNumber"
                      type="text"
                      inputProps={{ maxLength: 13 }}
                      onChange={(e) => {
                        field.onChange(
                          e.target.value
                            .replace(/[^\dA-Za-z가-힣]/g, "")
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
                <p style={{ color: "#ff0000" }}>
                  {errors.medicareNumber?.message}
                </p>
              </div>
              <div>
                <InputLabel>Billable Option *</InputLabel>
                <RadioGroup defaultValue={"Medicare PPO"} row>
                  {billableOption.map((value, index) => (
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
                <InputLabel htmlFor="startDate">
                  Effective Start Date
                </InputLabel>
                <Controller
                  name="startDate"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Input
                      {...field}
                      id="startDate"
                      type="date"
                      onChange={(e) => {
                        field.onChange(e.target.value);
                      }}
                    />
                  )}
                />
              </div>

              <div>
                <CustomSelect
                  name="medicareAdvantage"
                  label="Medicare Advantage"
                  control={control}
                  menuItems={medicareAdvantageOption}
                />
              </div>

              <div>
                <div>
                  <label htmlFor="MediAdGroupNo">
                    Medicare Advantage group number
                  </label>
                  <JustEnInput
                    control={control}
                    name="MediAdGroupNo"
                    id="MediAdGroupNo"
                  />
                </div>

                <div>
                  <label htmlFor="MediAdIndiNo">
                    Medicare Advantage individual number
                  </label>
                  <JustEnInput
                    control={control}
                    name="MediAdIndiNo"
                    id="MediAdIndiNo"
                  />
                </div>

                <FormControl>
                  <label htmlFor="MediCALNo"> Medi-CAL Number</label>
                  <div style={{ display: "flex" }}>
                    <JustEnInput
                      control={control}
                      name="MediCALNo"
                      id="MediCALNo"
                    />
                    <p style={{ color: "#ff0000" }}>
                      {errors.MediCALNo?.message}
                    </p>
                    <Button
                      variant="contained"
                      sx={{ width: "150px", fontSize: "10px" }}
                      onClick={() => {
                        const value = getValues("MediCALNo");
                        if (value === "") {
                          setDisabledMedicalNoErrMessage(true);
                          setIsValidationStatus((prevStatus) => ({
                            ...prevStatus,
                            medicalNo: false,
                          }));
                        } else {
                          setIsValidationStatus((prevStatus) => ({
                            ...prevStatus,
                            medicalNo: true,
                          }));
                          setDisabledMedicalNoErrMessage(false);
                        }
                      }}
                    >
                      Medi-CAL Check
                    </Button>

                    {isValidationStatus.medicalNo === false ? (
                      <p
                        style={{
                          color: "#ff0000",
                          display: disabledMedicalNoErrMessage
                            ? "none"
                            : "block",
                        }}
                      >
                        This account already exists
                      </p>
                    ) : null}
                  </div>
                </FormControl>
              </div>
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

              <FormControl>
                <label htmlFor="roomNumber">Room No *</label>
                <Input
                  id="roomNumber"
                  type="text"
                  {...register("roomNumber")}
                />
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

              <div>
                <InputLabel htmlFor="first">Date of Birth *</InputLabel>
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
              </div>
              <div>
                <InputLabel htmlFor="height"> Height</InputLabel>
                <JustNumInput id="height" name="height" control={control} />
              </div>
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
                    onClick={() => {
                      const value = getValues("ehrId");
                      if (value === "") {
                        setDisableEhrIdMessage(true);
                        setIsValidationStatus((prevStatus) => ({
                          ...prevStatus,
                          ehrId: false,
                        }));
                      } else if (ehrIdMockData.includes(value)) {
                        setIsValidationStatus((prevStatus) => ({
                          ...prevStatus,
                          ehrId: false,
                        }));
                        setDisableEhrIdMessage(false);
                      } else {
                        setIsValidationStatus((prevStatus) => ({
                          ...prevStatus,
                          ehrId: true,
                        }));
                        setDisableEhrIdMessage(true);
                      }
                    }}
                  >
                    EHR ID Check
                  </Button>

                  {isValidationStatus.ehrId === false ? (
                    <p
                      style={{
                        color: "#ff0000",
                        display: disableEhrIdMessage ? "none" : "block",
                      }}
                    >
                      This account already exists
                    </p>
                  ) : null}
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
              <div>
                <InputLabel htmlFor="patientMedication">
                  Patient Medication
                </InputLabel>
                <TextField
                  id="patientMedication"
                  variant="outlined"
                  {...register("patientMedication")}
                />
              </div>
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
            <div>
              <CustomSelect
                menuItems={phoneTypeOption}
                name="phoneType"
                label="Phone Type *"
                control={control}
              />
            </div>
            <div style={{ display: "flex" }}>
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
                    inputProps={{ maxLength: 13 }}
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
              <div style={{ display: "flex" }}>
                <Input id="email" type="text" {...register("email")} />
                <p style={{ color: "#ff0000" }}>{errors.email?.message}</p>
                <Button
                  variant="contained"
                  sx={{ width: "150px", fontSize: "10px" }}
                  onClick={() => {
                    const value = getValues("email");
                    if (value === "") {
                      setDisableEmailErrMessage(true);
                      setIsValidationStatus((prevStatus) => ({
                        ...prevStatus,
                        email: false,
                      }));
                    } else if (emailMockData.includes(value)) {
                      setIsValidationStatus((prevStatus) => ({
                        ...prevStatus,
                        email: false,
                      }));
                      setDisableEmailErrMessage(false);
                    } else {
                      setIsValidationStatus((prevStatus) => ({
                        ...prevStatus,
                        email: true,
                      }));
                      setDisableEmailErrMessage(true);
                    }
                  }}
                >
                  Email Check
                </Button>
                {isValidationStatus.email === false ? (
                  <p
                    style={{
                      color: "#ff0000",
                      display: disableEmailErrMessage ? "none" : "block",
                    }}
                  >
                    This account already exists
                  </p>
                ) : null}
              </div>
            </div>
            <div>
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
              <div>
                <CustomSelect
                  menuItems={relationshipOption}
                  name="relationship"
                  control={control}
                  label="relationship"
                />
              </div>
              <Controller
                name="contactNumber"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Input
                    {...field}
                    id="contactNumber"
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
              <JustEnInput
                control={control}
                name="streetAddress"
                id="streetAddress"
                placeholder="Street Address"
              />
              <JustEnInput
                control={control}
                name="apt"
                id="apt"
                placeholder="Apt,suite,etc.(optional)"
              />
              <JustEnInput
                control={control}
                name="city"
                id="city"
                placeholder="City"
              />
              <JustEnInput
                control={control}
                name="state"
                id="state"
                placeholder="State / Province"
              />
              <JustEnInput
                control={control}
                name="zip"
                id="zip"
                placeholder="ZIP / Postal"
              />
            </div>
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
