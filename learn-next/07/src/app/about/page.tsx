export default async function about() {
  const items = await (
    await fetch("http://localhost:8080/items", {
      next: {
        revalidate: 10,
      },
    })
  ).json();
  // Incremental Static Regeneration(ISR)
  return (
    <>
      <h1>about: {new Date().toLocaleTimeString()}</h1>
      <pre>{JSON.stringify(items, null, 2)}</pre>
    </>
  );
}
