import { z } from "zod";

// 핸드폰 번호 유효성 검사 정규식 ( 0으로 시작해야 하고 2-3자리 숫자 , 두번째 입력은 3-4자리 0~9 숫자, 세번째 입력은 4자리 0~9 숫자)
const phoneRegex = /^0\d{1,3}-?([0-9]{3,4})-?([0-9]{4})$/;
const onlyAlphabetRegex = /^[a-zA-Z]+$/;

export const patientFormSchema = z.object({
  facility: z.string({
    required_error: "Name is required",
    invalid_type_error: "Name must be a string",
  }),
  selectRoomNumber: z.string(),
  clinicBranch: z.string({
    required_error: "Name is required",
    invalid_type_error: "Name must be a string",
  }),
  lastName: z
    .string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    })
    .regex(onlyAlphabetRegex, { message: "영문자만 입력해주세요." }),
  firstName: z
    .string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    })
    .regex(onlyAlphabetRegex, { message: "영문자만 입력해주세요." }),
  middleName: z
    .string()
    .regex(onlyAlphabetRegex, { message: "영문자만 입력해주세요." })
    .optional(),
  suffix: z.string().optional(),
  gender: z.string({
    required_error: "Name is required",
    invalid_type_error: "Name must be a string",
  }),
  birth: z.string({
    required_error: "Name is required",
    invalid_type_error: "Name must be a string",
  }),
  height: z.string().optional(),
  language: z.string().optional(),
  primaryLanguage: z.string().optional(),
  ehrId: z.string({
    required_error: "Name is required",
    invalid_type_error: "Name must be a string",
  }),
  dxCode: z.string({
    required_error: "Name is required",
    invalid_type_error: "Name must be a string",
  }),
  primaryPhysician: z.string({
    required_error: "Name is required",
    invalid_type_error: "Name must be a string",
  }),
  patientMedication: z.string().optional(),
  conditions: z.string().optional(),
});

export type PatientFormSchema = z.infer<typeof patientFormSchema>;
