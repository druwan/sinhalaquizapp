import { useRouter } from 'next/router';

const Category = () => {
  const router = useRouter();
  const { topic } = router.query;

  return <h1>Topic: {topic}</h1>;
};

export default Category;
