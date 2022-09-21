import { NextApiRequest, NextApiResponse } from 'next';

const time = [
  {
    id: 1,
    english: 'Monday',
    sinhala: {
      alphabetical: 'Sandhudhaa',
      script: 'සඳුදා',
    },
    type: 'weekday',
  },
  {
    id: 2,
    english: 'Tuesday',
    sinhala: {
      alphabetical: 'Angaharuwaadhaa',
      script: 'අඟහරුවාදා',
    },
    type: 'weekday',
  },
  {
    id: 3,
    english: 'Wednesday',
    sinhala: {
      alphabetical: 'Badhaadhaa',
      script: 'බදාදා',
    },
    type: 'weekday',
  },
  {
    id: 4,
    english: 'Thursday',
    sinhala: {
      alphabetical: 'Brahaspathindhaa',
      script: 'බ්‍රහස්පතින්දා',
    },
    type: 'weekday',
  },
  {
    id: 5,
    english: 'Friday',
    sinhala: {
      alphabetical: 'Sikuraadhaa',
      script: 'සිකුරාදා',
    },
    type: 'weekday',
  },
  {
    id: 6,
    english: 'Saturday',
    sinhala: {
      alphabetical: 'Senasuraadhaa',
      script: 'සෙනසුරාදා',
    },
    type: 'weekday',
  },
  {
    id: 7,
    english: 'Sunday',
    sinhala: {
      alphabetical: 'Iridha',
      script: 'ඉරිදා',
    },
    type: 'weekday',
  },

  {
    id: 1,
    english: 'January',
    sinhala: {
      alphabetical: 'Janawaari',
      script: 'ජනවාරි',
    },
    type: 'month',
  },
  {
    id: 2,
    english: 'February',
    sinhala: {
      alphabetical: 'Pebarawaari',
      script: 'පෙබරවාරි',
    },
    type: 'month',
  },
  {
    id: 3,
    english: 'March',
    sinhala: {
      alphabetical: 'Marthu',
      script: 'මාර්තු',
    },
    type: 'month',
  },
  {
    id: 4,
    english: 'April',
    sinhala: {
      alphabetical: 'April',
      script: 'අප්රිල්',
    },
    type: 'month',
  },
  {
    id: 5,
    english: 'May',
    sinhala: {
      alphabetical: 'Mæyi',
      script: 'මැයි',
    },
    type: 'month',
  },
  {
    id: 6,
    english: 'June',
    sinhala: {
      alphabetical: 'Juni',
      script: 'ජූනි',
    },
    type: 'month',
  },
  {
    id: 7,
    english: 'July',
    sinhala: {
      alphabetical: 'Juli',
      script: 'ජුලි',
    },
    type: 'month',
  },
  {
    id: 8,
    english: 'August',
    sinhala: {
      alphabetical: 'Agosthu',
      script: 'අගෝස්තු',
    },
    type: 'month',
  },
  {
    id: 9,
    english: 'September',
    sinhala: {
      alphabetical: 'Sæpthæmbar',
      script: 'සැප්තැම්බර්',
    },
    type: 'month',
  },
  {
    id: 10,
    english: 'October',
    sinhala: {
      alphabetical: 'Okthombar',
      script: 'ඔක්තෝම්බර්',
    },
    type: 'month',
  },
  {
    id: 11,
    english: 'November',
    sinhala: {
      alphabetical: 'Novæmbar',
      script: 'නොවැම්බර්',
    },
    type: 'month',
  },
  {
    id: 12,
    english: 'December',
    sinhala: {
      alphabetical: 'Desæmbar',
      script: 'දෙසැම්බර්',
    },
    type: 'month',
  },
];

export default function Handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    time: time,
  });
}
