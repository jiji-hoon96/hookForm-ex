import { z } from "zod";

// 핸드폰 번호 유효성 검사 정규식 ( 0으로 시작해야 하고 2-3자리 숫자 , 두번째 입력은 3-4자리 0~9 숫자, 세번째 입력은 4자리 0~9 숫자)
const phoneRegex = /^0\d{1,3}-?([0-9]{3,4})-?([0-9]{4})$/;
const onlyAlphabetRegex = /^[a-zA-Z]+$/;

export const patientFormSchema = z.object({
  phone: z
    .string()
    .regex(phoneRegex, "핸드폰 번호 형식이 아닙니다.")
    .min(9, {
      message: "0으로 시작하는 최소 9자리 이상의 숫자를 입력해주세요.",
    })
    .max(11, { message: "11자리 이하로 입력해주세요." }),

  billableOption: z.string(),
  medicareAdvantage: z.string().min(2),
  facility: z.string({ message: "This field is required." }).min(1),
  selectRoomNumber: z.string({ message: "This field is required." }).min(1),
  clinicBranch: z.string().min(1, { message: "This field is required." }),
  lastName: z
    .string({ message: "This field is required." })
    .min(1)
    .regex(onlyAlphabetRegex, { message: "영문자만 입력해주세요." }),
  firstName: z
    .string({ message: "This field is required." })
    .min(1)
    .regex(onlyAlphabetRegex, { message: "영문자만 입력해주세요." }),
  middleName: z
    .string()
    .regex(onlyAlphabetRegex, { message: "영문자만 입력해주세요." })
    .min(1)
    .optional(),
  suffix: z.string().optional(),
  gender: z.string({ message: "This field is required." }),
  birth: z.string({ message: "This field is required." }),
  height: z.number({ message: "height must be a number." }).optional(),
  language: z.string().optional(),
  primaryLanguage: z.string().optional(),
  ehrId: z.string({ message: "This field is required." }).min(1),
  physician: z.string({ message: "This field is required." }).min(1),
  dxCode: z.string({ message: "This field is required." }).min(1),
  primaryPhysician: z.string({ message: "This field is required." }).min(1),
  patientMedication: z.string().optional(),
  conditions: z.string().optional(),
});

export type PatientFormSchema = z.infer<typeof patientFormSchema>;
