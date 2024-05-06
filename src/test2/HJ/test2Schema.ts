import { z } from "zod";

// 핸드폰 번호 유효성 검사 정규식 ( 0으로 시작해야 하고 2-3자리 숫자 , 두번째 입력은 3-4자리 0~9 숫자, 세번째 입력은 4자리 0~9 숫자)
const phoneRegex = /^0\d{1,3}-?([0-9]{3,4})-?([0-9]{4})$/;
const onlyAlphabetRegex = /^[a-zA-Z]+$/;

export const patientFormSchema = z.object({
  facility: z.string({
    required_error: "This field is required.",
  }),
  selectRoomNumber: z.string({
    required_error: "This field is required.",
  }),
  clinicBranch: z.string({
    required_error: "This field is required.",
  }),
  lastName: z
    .string({
      required_error: "This field is required.",
      invalid_type_error: "Last Name must be a string",
    })
    .regex(onlyAlphabetRegex),
  firstName: z
    .string({
      required_error: "This field is required",
      invalid_type_error: "First Name must be a string",
    })
    .regex(onlyAlphabetRegex),
  middleName: z.string().regex(onlyAlphabetRegex).optional(),
  suffix: z.string().optional(),
  gender: z.string({
    required_error: "This field is required",
  }),
  birth: z.string({
    required_error: "This field is required",
  }),
  height: z.string().optional(),
  language: z.string().optional(),
  primaryLanguage: z.string().optional(),
  ehrId: z.string({
    required_error: "This field is required",
  }),
  dxCode: z.string({
    required_error: "This field is required",
  }),
  primaryPhysician: z.string({
    required_error: "This field is required",
  }),
  patientMedication: z.string().optional(),
  conditions: z.string().optional(),
});

export type PatientFormSchema = z.infer<typeof patientFormSchema>;
