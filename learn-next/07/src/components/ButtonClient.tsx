import { reload } from "@/libs/action/action";
// import { revalidatePath } from "next/cache";

export default function ButtonClient() {
  return (
    <>
      <button
        onClick={async () => {
          "use server";
          reload("/post/1");
        }}
      >
        재검증(온디맨드)
      </button>
    </>
  );
}
