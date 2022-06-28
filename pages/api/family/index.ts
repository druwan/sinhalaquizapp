// https://www.mirisgala.net/SL_English_A_to_Z.html

import { NextApiRequest, NextApiResponse } from 'next';

const family = [
  {
    english: 'Grandmother',
    sinhala: {
      alphabetical: 'Aachchi',
      script: '',
    },
  },
  {
    english: 'Grandfather',
    sinhala: {
      alphabetical: 'Sīyā',
      script: '',
    },
  },
  {
    english: 'Mother',
    sinhala: {
      alphabetical: 'Amma',
      script: '',
    },
  },
  {
    english: 'Father',
    sinhala: {
      alphabetical: 'Thaaththa',
      script: '',
    },
  },
  {
    english: "Mothers's older brother",
    sinhala: {
      alphabetical: 'Loku Māmā',
      script: '',
    },
  },
  {
    english: "Mother's younger brother",
    sinhala: {
      alphabetical: 'Punchi Māmā',
      script: '',
    },
  },
  {
    english: "Mother's older sister",
    sinhala: {
      alphabetical: 'Loku Amma',
      script: '',
    },
  },
  {
    english: "Mother's younger sister",
    sinhala: {
      alphabetical: 'Punchi Amma',
      script: '',
    },
  },
  {
    english: "Father's older brother",
    sinhala: {
      alphabetical: 'Loku Thaaththa',
      script: '',
    },
  },
  {
    english: "Father's younger brother",
    sinhala: {
      alphabetical: 'Baappa',
      script: '',
    },
  },
  {
    english: "Father's older sister",
    sinhala: {
      alphabetical: 'Loku Nændā',
      script: '',
    },
  },
  {
    english: "Father's younger sister",
    sinhala: {
      alphabetical: 'Punchi Nændā',
      script: '',
    },
  },
  {
    english: 'Older brother',
    sinhala: {
      alphabetical: 'Ayiyā',
      script: 'අයියා',
    },
  },
  {
    english: 'Younger brother',
    sinhala: {
      alphabetical: 'Malli',
      script: 'මල්ලි',
    },
  },
  {
    english: 'Older sister',
    sinhala: {
      alphabetical: 'Akkā',
      script: 'අක්කා',
    },
  },
  {
    english: 'Younger sister',
    sinhala: {
      alphabetical: 'Nangi',
      script: '',
    },
  },
  {
    english: 'Children',
    sinhala: {
      alphabetical: 'Lamayi',
      sinhala: '',
    },
  },
  {
    english: 'Son',
    sinhala: {
      alphabetical: 'Puthaa',
      sinhala: '',
    },
  },
  {
    english: 'Daughter',
    sinhala: {
      alphabetical: 'Dhuwa',
      sinhala: '',
    },
  },
];

export default function Handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ family: family });
}
