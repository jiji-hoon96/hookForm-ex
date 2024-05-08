import { z } from "zod";

const customErrorMap: z.ZodErrorMap = (issue, ctx) => {
  if (issue.code === z.ZodIssueCode.invalid_string) {
    return { message: "This field is required." };
  }
  if (issue.code === z.ZodIssueCode.too_small) {
    return { message: "This field is required." };
  }
  if (issue.code === z.ZodIssueCode.invalid_type) {
    return { message: "Please format correctly" };
  }
  return { message: ctx.defaultError };
};

z.setErrorMap(customErrorMap);
z.string({ errorMap: customErrorMap });

export const patientFormSchema = z.object({
  billableOptionPPO: z.string(),
  billableOptionHMO: z.string(),
  medicareNumber: z.string().min(1),
  facility: z.string().min(1),
  selectRoomNumber: z.string().min(1),
  roomNumber: z.string().min(1),
  clinicBranch: z.string().min(1),
  lastName: z.string().min(1),
  firstName: z.string().min(1),
  middleName: z.string().optional(),
  suffix: z.string().optional(),
  gender: z.string().min(1),
  birth: z.string().date(),
  height: z.string().optional(),
  language: z.string().optional(),
  primaryLanguage: z.string().optional(),
  ehrId: z.string({
    required_error: "This field is required",
  }),
  primaryPhysician: z.string().min(1),
  patientMedication: z.string().optional(),
  conditions: z.string().optional(),
  phone: z.string().optional(),
  email: z
    .string()
    .min(1, { message: "This field is required" })
    .email({ message: "이메일 형식을 맞춰주세요" }),
  emergencyContactsLast: z.string().optional(),
  emergencyContactsFirst: z.string().optional(),
  emergencyContactsMiddle: z.string().optional(),
  relationship: z.string().optional(),
});

export type PatientFormSchema = z.infer<typeof patientFormSchema>;
