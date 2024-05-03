import { z } from "zod";

export type Type = z.infer<typeof schema>;

export const schema = z.object({
  medicareNumber: z.string().min(1, "This field is required."),
});
