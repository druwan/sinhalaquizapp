// Start with 0-10

import { NextApiRequest, NextApiResponse } from 'next';

export const numbers = [
  {
    id: 0,
    english: 'Zero',
    sinhala: {
      alphabetical: 'Binduva',
      script: 'බිංදුවයි',
    },
  },
  {
    id: 1,
    english: 'One',
    sinhala: {
      alphabetical: 'Eka',
      script: 'එක',
    },
  },
  {
    id: 2,
    english: 'Two',
    sinhala: {
      alphabetical: 'Deka',
      script: 'දෙක',
    },
  },
  {
    id: 3,
    english: 'Three',
    sinhala: {
      alphabetical: 'Tūna',
      script: 'තුන',
    },
  },
  {
    id: 4,
    english: 'Four',
    sinhala: {
      alphabetical: 'Hatara',
      script: 'හතර',
    },
  },
  {
    id: 5,
    english: 'Five',
    sinhala: {
      alphabetical: 'Paha',
      script: 'පහ',
    },
  },
  {
    id: 6,
    english: 'Six',
    sinhala: {
      alphabetical: 'Haya',
      script: 'හය',
    },
  },
  {
    id: 7,
    english: 'Seven',
    sinhala: {
      alphabetical: 'Hata',
      script: 'හත',
    },
  },
  {
    id: 8,
    english: 'Eight',
    sinhala: {
      alphabetical: 'Aṭa',
      script: 'අට',
    },
  },
  {
    id: 9,
    english: 'Nine',
    sinhala: {
      alphabetical: 'Navaya',
      script: 'නවය',
    },
  },
  {
    id: 10,
    english: 'Ten',
    sinhala: {
      alphabetical: 'Dahaya',
      script: 'දහය',
    },
  },
  {
    id: 11,
    english: 'Eleven',
    sinhala: {
      alphabetical: 'Ekol̠aha',
      script: 'එකොළහ',
    },
  },
  {
    id: 12,
    english: 'Twelve',
    sinhala: {
      alphabetical: 'Dol̠aha',
      script: 'දොළහ',
    },
  },
  {
    id: 13,
    english: 'Thirteen',
    sinhala: {
      alphabetical: 'Dahatūna',
      script: 'දහතුන',
    },
  },
  {
    id: 14,
    english: 'Fourteen',
    sinhala: {
      alphabetical: 'Dahahatara',
      script: 'දහහතර',
    },
  },
  {
    id: 15,
    english: 'Fifteen',
    sinhala: {
      alphabetical: 'Pahal̠ova',
      script: 'පහළොව',
    },
  },
  {
    id: 16,
    english: 'Sixteen',
    sinhala: {
      alphabetical: 'Dahasaya',
      script: 'දහසය',
    },
  },
  {
    id: 17,
    english: 'Seventeen',
    sinhala: {
      alphabetical: 'Dahahata',
      script: 'දහහත',
    },
  },
  {
    id: 18,
    english: 'Eighteen',
    sinhala: {
      alphabetical: 'Dahaaṭa',
      script: 'දහඅට',
    },
  },
  {
    id: 19,
    english: 'Nineteen',
    sinhala: {
      alphabetical: 'Dahanavaya',
      script: 'දහනවය',
    },
  },
  {
    id: 20,
    english: 'Twenty',
    sinhala: {
      alphabetical: 'Vissa',
      script: 'විස්ස',
    },
  },
];

export default function Handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ numbers: numbers });
}
