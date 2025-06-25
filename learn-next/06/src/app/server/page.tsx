export default async function server() {
  const posts = await (
    await fetch("https://jsonplaceholder.typicode.com/posts", {
      cache: "force-cache",
    })
  ).json();
  return (
    <>
      <h1>server</h1>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </>
  );
}
