import { z } from "zod";

export type InsuranceSchemaType = z.infer<typeof insuranceSchema>;

export const insuranceSchema = z.object({
  medicareNumber: z.string().min(1, "This field is required."),

  emailAddress: z.string().min(1, "This field is required.").email(),

  height: z.string(),

  date: z.string().date(),

  billableOption: z.enum(["Medicare PPO", "Medicare HMO"], {}),

  medicareAdvantage: z.enum(["box1", "box2", "box3", "defaultValue"], {
    required_error: "This field is required.",
  }),

  facility: z.enum(["box1", "box2", "box3"], {
    message: "This field is required.",
  }),

  roomNo: z.enum(["box1", "box2", "box3"], {
    message: "This field is required.",
  }),

  clinicBranch: z.enum(["box1", "box2", "box3"], {
    message: "This field is required.",
  }),

  lastName: z.string().min(1, "This field is required."),

  firstName: z.string().min(1, "This field is required."),

  suffix: z.enum(["box1", "box2", "box3", "defaultValue"]),

  gender: z.enum(["male", "female", "X"], {
    message: "This field is required.",
  }),

  ehrID: z.string().min(1, "This field is required."),

  primaryLanguage: z.enum(["Korean", "English", "Spanish", "defaultValue"]),

  dXCode: z.enum(["box1", "box2", "box3"], {
    message: "This field is required.",
  }),

  primaryPhysician: z.enum(["box1", "box2", "box3"], {
    message: "This field is required.",
  }),

  conditions: z.enum(["box1", "box2", "box3", "defaultValue"]),

  phoneType: z.enum(["Home", "Work", "Mobile"], {
    message: "This field is required.",
  }),

  phoneNumber: z.string().min(1, "This field is required."),
});
