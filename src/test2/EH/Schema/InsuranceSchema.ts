import { z } from "zod";

export type InsuranceSchemaType = z.infer<typeof insuranceSchema>;

const phoneNumberRegex = /^010\d{8}$/;
const nameRegex = /^[A-Za-z]+$/;

export const insuranceSchema = z.object({
  medicareNumber: z.string().min(1, "This field is required."),

  billableOption: z.enum(["Medicare PPO", "Medicare HMO"], {
    invalid_type_error: "This field is required.",
  }),

  effectiveStartDate: z.coerce.date(),

  medicareAdvantage: z.enum(["box1", "box2", "box3", "defaultValue"], {
    required_error: "This field is required.",
  }),

  medicareAdvantageGroupNumber: z.string(),
  medicareAdvantageIndividualNumber: z.string(),

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
