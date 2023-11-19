import { z } from "zod";

export const PostValidator = z.object({
  userId: z.number(),
  title: z
    .string()
    .min(1, { message: "入力は必須です" })
    .max(10, { message: "10文字までです" })
    .refine((value) => value.startsWith("/"), {
      message: "パスは「/」から入力してください。",
    }),
  body: z.string().min(1, { message: "入力は必須です" }),
});
