import { z } from "zod";

export const validationSchema = z.object({
  option: z.string({ invalid_type_error: "Please select an option" }),
});
