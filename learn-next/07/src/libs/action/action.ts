"use server";

import { revalidatePath } from "next/cache";

export const reload = async (path: string) => {
  revalidatePath(path);
};
