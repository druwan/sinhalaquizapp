export async function loadApi(topic: string) {
  const res = await fetch(`http://localhost:3000/api/${topic.toLowerCase()}`);
  const time = await res.json();

  return {
    props: {
      topic,
    },
  };
}
