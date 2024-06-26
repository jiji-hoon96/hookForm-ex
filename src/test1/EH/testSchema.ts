import { z } from "zod";

export type PatientSchemaType = z.infer<typeof patientSchema>;

const phoneNumberRegex = /^010\d{8}$/;
const nameRegex = /^[A-Za-z]+$/;

export const patientSchema = z.object({
  phoneNumber: z
    .string()
    .min(1, "필수 입력사항입니다")
    .refine(
      (value) => phoneNumberRegex.test(value),
      "010으로 시작하는 11자리 숫자를 입력해주세요"
    ),

  selectOption: z.enum(["option1", "option2", "option3"], {
    invalid_type_error: "필수 입력사항입니다",
  }),

  // date: z.string().min(1, "필수 입력사항입니다").date(),
  date: z.coerce.date(),

  selectBox: z.enum(["box1", "box2", "box3", "defaultValue"], {
    required_error: "필수 입력사항입니다",
  }),

  name: z
    .string()
    .min(1, "필수 입력사항입니다")
    .refine((value) => nameRegex.test(value), "영문으로 입력해주세요"),
});
