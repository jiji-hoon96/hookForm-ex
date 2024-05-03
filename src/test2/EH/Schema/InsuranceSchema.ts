import { z } from "zod";

export type InsuranceSchemaType = z.infer<typeof insuranceSchema>;

export const insuranceSchema = z.object({
  requiredInput: z.string().min(1, "This field is required."),

  unrequiredInput: z.string(),

  date: z.coerce.date(),

  billableOption: z.enum(["Medicare PPO", "Medicare HMO"], {
    invalid_type_error: "This field is required.",
  }),

  medicareAdvantage: z.enum(["box1", "box2", "box3", "defaultValue"], {
    required_error: "This field is required.",
  }),

  facility: z.enum(["box1", "box2", "box3", "defaultValue"], {
    required_error: "This field is required.",
  }),

  roomNo: z.enum(["box1", "box2", "box3", "defaultValue"], {
    required_error: "This field is required.",
  }),

  clinicBranch: z.enum(["box1", "box2", "box3", "defaultValue"], {
    required_error: "This field is required.",
  }),

  suffix: z.enum(["box1", "box2", "box3", "defaultValue"]),

  gender: z.enum(["male", "female", "X", "defaultValue"], {
    required_error: "This field is required.",
  }),

  primaryLanguage: z.enum(["Korean", "English", "Spanish", "defaultValue"]),

  dXCode: z.enum(["box1", "box2", "box3", "defaultValue"], {
    required_error: "This field is required.",
  }),

  primaryPhysician: z.enum(["box1", "box2", "box3", "defaultValue"], {
    required_error: "This field is required.",
  }),

  conditions: z.enum(["box1", "box2", "box3", "defaultValue"]),

  phoneType: z.enum(["Home", "Work", "Mobile", "defaultValue"], {
    required_error: "This field is required.",
  }),

  emailAddress: z.string().min(1, "This field is required.").email(),
});
