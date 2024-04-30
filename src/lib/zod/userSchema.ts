import { z } from "zod";

// 핸드폰 번호 유효성 검사 정규식 ( 0으로 시작해야 하고 2-3자리 숫자 , 두번째 입력은 3-4자리 0~9 숫자, 세번째 입력은 4자리 0~9 숫자)
const phoneRegex = /^0\d{1,3}-?([0-9]{3,4})-?([0-9]{4})$/;
const onlyAlphabetRegex = /^[a-zA-Z]+$/;

export const userFormSchema = z.object({
  name: z
    .string()
    .regex(onlyAlphabetRegex, { message: "영문자만 입력해주세요." })
    .min(2, { message: "이름은 최소 2자리 이상이어야 합니다." }),
  phone: z
    .string()
    .regex(phoneRegex, "핸드폰 번호 형식이 아닙니다.")
    .min(9, {
      message: "0으로 시작하는 최소 9자리 이상의 숫자를 입력해주세요.",
    })
    .max(11, { message: "11자리 이하로 입력해주세요." }),
  born: z.string().date(),
  billableOption: z.string(),
  medicareAdvantage: z.string().min(2),
});

export type UserFormSchema = z.infer<typeof userFormSchema>;
