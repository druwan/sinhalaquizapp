// https://www.mirisgala.net/SL_English_A_to_Z.html

import { NextApiRequest, NextApiResponse } from 'next';

const family = [
  {
    id: 0,
    english: 'Grandmother',
    sinhala: {
      alphabetical: 'Aachchi',
      script: '',
    },
  },
  {
    id: 1,
    english: 'Grandfather',
    sinhala: {
      alphabetical: 'Sīyā',
      script: '',
    },
  },
  {
    id: 2,
    english: 'Mother',
    sinhala: {
      alphabetical: 'Amma',
      script: '',
    },
  },
  {
    id: 3,
    english: 'Father',
    sinhala: {
      alphabetical: 'Thaaththa',
      script: '',
    },
  },
  {
    id: 4,
    english: "Mothers's older brother",
    sinhala: {
      alphabetical: 'Loku Māmā',
      script: '',
    },
  },
  {
    id: 5,
    english: "Mother's younger brother",
    sinhala: {
      alphabetical: 'Punchi Māmā',
      script: '',
    },
  },
  {
    id: 6,
    english: "Mother's older sister",
    sinhala: {
      alphabetical: 'Loku Amma',
      script: '',
    },
  },
  {
    id: 7,
    english: "Mother's younger sister",
    sinhala: {
      alphabetical: 'Punchi Amma',
      script: '',
    },
  },
  {
    id: 8,
    english: "Father's older brother",
    sinhala: {
      alphabetical: 'Loku Thaaththa',
      script: '',
    },
  },
  {
    id: 9,
    english: "Father's younger brother",
    sinhala: {
      alphabetical: 'Baappa',
      script: '',
    },
  },
  {
    id: 10,
    english: "Father's older sister",
    sinhala: {
      alphabetical: 'Loku Nændā',
      script: '',
    },
  },
  {
    id: 11,
    english: "Father's younger sister",
    sinhala: {
      alphabetical: 'Punchi Nændā',
      script: '',
    },
  },
  {
    id: 12,
    english: 'Older brother',
    sinhala: {
      alphabetical: 'Ayiyā',
      script: 'අයියා',
    },
  },
  {
    id: 13,
    english: 'Younger brother',
    sinhala: {
      alphabetical: 'Malli',
      script: 'මල්ලි',
    },
  },
  {
    id: 14,
    english: 'Older sister',
    sinhala: {
      alphabetical: 'Akkā',
      script: 'අක්කා',
    },
  },
  {
    id: 15,
    english: 'Younger sister',
    sinhala: {
      alphabetical: 'Nangi',
      script: '',
    },
  },
  {
    id: 16,
    english: 'Children',
    sinhala: {
      alphabetical: 'Lamayi',
      sinhala: '',
    },
  },
  {
    id: 17,
    english: 'Son',
    sinhala: {
      alphabetical: 'Puthaa',
      sinhala: '',
    },
  },
  {
    id: 18,
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
