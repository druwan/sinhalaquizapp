export async function loadNumbers() {
  const res = await fetch('http://localhost:3000/api/numbers');
  const questions = await res.json();

  return {
    props: {
      questions,
    },
  };
}

export async function loadTime() {
  const res = await fetch('http://localhost:3000/api/time');
  const time = await res.json();

  return {
    props: {
      time,
    },
  };
}
