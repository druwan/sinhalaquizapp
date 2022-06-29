import { NextApiRequest, NextApiResponse } from 'next';

const weekdays = [
  {
    id: 1,
    english: 'Monday',
    sinhala: {
      alphabetical: 'Sandhudhaa',
      script: 'සඳුදා',
    },
  },
  {
    id: 2,
    english: 'Tuesday',
    sinhala: {
      alphabetical: 'Angaharuwaadhaa',
      script: 'අඟහරුවාදා',
    },
  },
  {
    id: 3,
    english: 'Wednesday',
    sinhala: {
      alphabetical: 'Badhaadhaa',
      script: 'බදාදා',
    },
  },
  {
    id: 4,
    english: 'Thursday',
    sinhala: {
      alphabetical: 'Brahaspathindhaa',
      script: 'බ්‍රහස්පතින්දා',
    },
  },
  {
    id: 5,
    english: 'Friday',
    sinhala: {
      alphabetical: 'Sikuraadhaa',
      script: 'සිකුරාදා',
    },
  },
  {
    id: 6,
    english: 'Saturday',
    sinhala: {
      alphabetical: 'Senasuraadhaa',
      script: 'සෙනසුරාදා',
    },
  },
  {
    id: 7,
    english: 'Sunday',
    sinhala: {
      alphabetical: 'Iridha',
      script: 'ඉරිදා',
    },
  },
];

const months = [
  {
    id: 1,
    english: 'January',
    sinhala: {
      alphabetical: 'Janawaari',
      script: 'ජනවාරි',
    },
  },
  {
    id: 2,
    english: 'February',
    sinhala: {
      alphabetical: 'Pebarawaari',
      script: 'පෙබරවාරි',
    },
  },
  {
    id: 3,
    english: 'March',
    sinhala: {
      alphabetical: 'Marthu',
      script: 'මාර්තු',
    },
  },
  {
    id: 4,
    english: 'April',
    sinhala: {
      alphabetical: 'April',
      script: 'අප්රිල්',
    },
  },
  {
    id: 5,
    english: 'May',
    sinhala: {
      alphabetical: 'Mæyi',
      script: 'මැයි',
    },
  },
  {
    id: 6,
    english: 'June',
    sinhala: {
      alphabetical: 'Juni',
      script: 'ජූනි',
    },
  },
  {
    id: 7,
    english: 'July',
    sinhala: {
      alphabetical: 'Juli',
      script: 'ජුලි',
    },
  },
  {
    id: 8,
    english: 'August',
    sinhala: {
      alphabetical: 'Agosthu',
      script: 'අගෝස්තු',
    },
  },
  {
    id: 9,
    english: 'September',
    sinhala: {
      alphabetical: 'Sæpthæmbar',
      script: 'සැප්තැම්බර්',
    },
  },
  {
    id: 10,
    english: 'October',
    sinhala: {
      alphabetical: 'Okthombar',
      script: 'ඔක්තෝම්බර්',
    },
  },
  {
    id: 11,
    english: 'November',
    sinhala: {
      alphabetical: 'Novæmbar',
      script: 'නොවැම්බර්',
    },
  },
  {
    id: 12,
    english: 'December',
    sinhala: {
      alphabetical: 'Desæmbar',
      script: 'දෙසැම්බර්',
    },
  },
];

export default function Handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    weekdays: weekdays,
    months: months,
  });
}
