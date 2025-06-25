import ButtonClient from "@/components/ButtonClient";
// import { revalidatePath } from "next/cache";

async function getItem(id: string) {
  return await (
    await fetch("http://localhost:8080/items/" + id, {
      // cache: "force-cache",
      // next: {
      //   tags: ["post", `post:${id}`],
      // },
    })
  ).json();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = await getItem(id);
  return {
    title: item.description,
  };
}

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = await getItem(id);
  return (
    <>
      <h1>post</h1>
      <pre>{JSON.stringify(item, null, 2)}</pre>
      <ButtonClient />
      {/* <button
        onClick={async () => {
          "use server";
          revalidatePath("/", "layout");
        }}
      >
        재검증(온디맨드)
      </button> */}
    </>
  );
}
