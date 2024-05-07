import { z } from "zod";

// 핸드폰 번호 유효성 검사 정규식 ( 0으로 시작해야 하고 2-3자리 숫자 , 두번째 입력은 3-4자리 0~9 숫자, 세번째 입력은 4자리 0~9 숫자)
const phoneRegex = /^0\d{1,3}-?([0-9]{3,4})-?([0-9]{4})$/;
const onlyAlphabetRegex = /^[a-zA-Z]+$/;

const customErrorMap: z.ZodErrorMap = (issue, ctx) => {
  if (issue.code === z.ZodIssueCode.invalid_string) {
    return { message: "This field is required." };
  }
  if (issue.code === z.ZodIssueCode.too_small) {
    return { message: "This field is required." };
  }
  return { message: ctx.defaultError };
};

z.setErrorMap(customErrorMap);
z.string({ errorMap: customErrorMap });

export const patientFormSchema = z.object({
  billableOption: z.string(),
  medicareNumber: z.string(),
  facility: z.string().min(1),
  selectRoomNumber: z.string().min(1),
  clinicBranch: z.string().min(1),
  lastName: z.string().regex(onlyAlphabetRegex),
  firstName: z.string().regex(onlyAlphabetRegex),
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
  // dxCode: z.string({
  //   required_error: "This field is required",
  // }),
  primaryPhysician: z.string().min(1),
  patientMedication: z.string().optional(),
  conditions: z.string().optional(),
  phone: z.string().optional(),
});

export type PatientFormSchema = z.infer<typeof patientFormSchema>;
