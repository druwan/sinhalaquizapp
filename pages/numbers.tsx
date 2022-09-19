import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import QuizCard from '../components/QuizCard/QuizCard';
import { loadNumbers } from '../lib/loadQuestions';

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
      {numbers && <QuizCard props={numbers.props.numbers.numbers} />}
    </>
  );
};

export default Numbers;
