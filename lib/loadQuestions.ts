export async function loadFamily() {
  const res = await fetch('http://localhost:3000/api/family');
  const family = await res.json();

  return {
    props: {
      family,
    },
  };
}

export async function loadNumbers() {
  const res = await fetch('http://localhost:3000/api/numbers');
  const numbers = await res.json();

  return {
    props: {
      numbers,
    },
  };
}

export async function loadPronouns() {
  const res = await fetch('http://localhost:3000/api/pronouns');
  const pronouns = await res.json();

  return {
    props: {
      pronouns,
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
