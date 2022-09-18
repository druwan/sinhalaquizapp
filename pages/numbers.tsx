import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import QuizCard from '../components/QuizCard/QuizCard';
import { loadNumbers } from '../lib/loadQuestions';

interface QuizItemObjType {
  id: Number;
  english: String;
  sinhala: {
    alphabetical: String;
    script: String;
  };
}

const Numbers = () => {
  // Get all the Numbers
  const [numbers, setNumbers] = useState<QuizItemObjType[]>([]);

  useEffect(() => {
    async function getNumbers() {
      try {
        const data = await loadNumbers();
        setNumbers(data.props.questions);
      } catch (err) {
        console.log(err);
      }
    }
    getNumbers();
  }, []);

  return (
    <>
      <Navbar />
      {/* <QuizCard /> */}
      {numbers && console.log(Object.keys(numbers))}
    </>
  );
};

export default Numbers;
