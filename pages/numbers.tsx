import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import QuizCard from '../components/QuizCard/QuizCard';
import { loadNumbers } from '../lib/loadQuestions';

/* interface QuizItemObjType {
  id: Number;
  english: String;
  sinhala: {
    alphabetical: String;
    script: String;
  };
} */

const Numbers = () => {
  // Get all the Numbers
  const [numbers, setNumbers] = useState(null);

  useEffect(() => {
    async function getNumbers() {
      try {
        await loadNumbers().then((result) => setNumbers(result));
      } catch (err) {
        console.log(err.message);
      }
    }
    getNumbers();
  }, []);

  return (
    <>
      <Navbar />
      {/* <QuizCard /> */}
      {numbers && console.log(numbers.props.numbers)}
    </>
  );
};

export default Numbers;
