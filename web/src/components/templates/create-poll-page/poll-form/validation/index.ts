import { z } from "zod";

export const validationSchema = z.object({
  title: z
    .string()
    .min(1, { message: "Title is required" })
    .max(50, { message: "Title must be less than 50 characters" }),
  description: z
    .string()
    .max(500, { message: "Description must be less than 500 characters" }),
  options: z
    .array(
      z.object({
        id: z.string(),
        title: z
          .string()
          .min(1, { message: "Option is required" })
          .max(50, { message: "Option must be less than 50 characters" }),
      })
    )
    .min(2, { message: "At least two options are required" })
    .max(10, { message: "Maximum of 10 options" }),
});
