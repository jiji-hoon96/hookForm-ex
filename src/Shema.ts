import { date, z } from "zod";

export type PatientSchemaType = z.infer<typeof patientSchema>;

const phoneNumberRegex = /^010\d{8}$/;

export const patientSchema = z.object({
  phoneNumber: z
    .string()
    .refine(
      (value) => phoneNumberRegex.test(value),
      "010으로 시작하는 11자리 숫자를 입력해주세요"
    ),

  selectOption: z.string(),

  date: date(),

  selectBox: z.string(),

  name: z.string(),
});
