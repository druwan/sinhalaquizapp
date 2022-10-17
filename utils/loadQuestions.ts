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

export async function loadFamily() {
  const res = await fetch(`http://localhost:3000/api/family`);
  const family = res.json();

  return {
    props: {
      family,
    },
  };
}

export async function loadNumbers() {
  const res = await fetch(`http://localhost:3000/api/numbers`);
  const numbers = res.json();

  return {
    props: {
      numbers,
    },
  };
}

export const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json());
