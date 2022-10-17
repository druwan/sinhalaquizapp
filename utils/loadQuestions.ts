export async function loadApi(category: string) {
  const res = await fetch(
    `http://localhost:3000/api/${category.toLowerCase()}`
  );
  const topic = await res.json();

  return {
    props: {
      topic,
    },
  };
}

export const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json());
