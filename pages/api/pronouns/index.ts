import { NextApiRequest, NextApiResponse } from 'next';

const pronouns = [
  {
    id: 0,
    english: 'I',
    sinhala: {
      alphabetical: 'Mama',
      script: 'මම',
    },
    type: 'personal',
  },
  {
    id: 1,
    english: 'You (singular)',
    sinhala: {
      alphabetical: 'Oyaa',
      script: 'ඔයා',
    },
    type: 'personal',
  },
  {
    id: 2,
    english: 'He/She',
    sinhala: {
      alphabetical: 'Eyaa',
      script: 'එයා',
    },
    type: 'personal',
  },
  {
    id: 3,
    english: 'We',
    sinhala: {
      alphabetical: 'Api',
      script: 'අපි',
    },
    type: 'personal',
  },
  {
    id: 4,
    english: 'You (plural)',
    sinhala: {
      alphabetical: 'Ogolo',
      script: 'ඔගොල්ලො',
    },
    type: 'personal',
  },
  {
    id: 5,
    english: 'They',
    sinhala: {
      alphabetical: 'Egolo',
      script: 'එගොල්ලො',
    },
    type: 'personal',
  },
  {
    id: 6,
    english: 'Mine/My',
    sinhala: {
      alphabetical: 'Mage',
      script: 'මගේ',
    },
    type: 'possesive',
  },
  {
    id: 7,
    english: 'Yours/Your (singular)',
    sinhala: {
      alphabetical: 'Oyage',
      script: 'ඔයගෙ',
    },
    type: 'possesive',
  },
  {
    id: 8,
    english: 'His/Hers',
    sinhala: {
      alphabetical: 'Eyage',
      script: 'එයගෙ',
    },
    type: 'possesive',
  },
  {
    id: 9,
    english: 'Our',
    sinhala: {
      alphabetical: 'Ape',
      script: 'අපේ',
    },
    type: 'possesive',
  },
  {
    id: 10,
    english: 'Your (plural)',
    sinhala: {
      alphabetical: 'Ogolange',
      script: 'ඔගොලංගෙ',
    },
    type: 'possesive',
  },
  {
    id: 11,
    english: 'Their',
    sinhala: {
      alphabetical: 'Egolange',
      script: 'එගොලංගෙ',
    },
    type: 'possesive',
  },
  {
    id: 12,
    english: 'To/For me',
    sinhala: {
      alphabetical: 'Mata',
      script: 'මට',
    },
    type: 'possesiveTaForm',
  },
  {
    id: 13,
    english: 'To/For you (singular)',
    sinhala: {
      alphabetical: 'Oyata',
      script: 'ඔයට',
    },
    type: 'possesiveTaForm',
  },
  {
    id: 14,
    english: 'To/For Him/Her',
    sinhala: {
      alphabetical: 'Eyata',
      script: 'එයට',
    },
    type: 'possesiveTaForm',
  },
  {
    id: 15,
    english: 'To/For Us',
    sinhala: {
      alphabetical: 'Apita',
      script: 'අපිට',
    },
    type: 'possesiveTaForm',
  },
  {
    id: 16,
    english: 'To/For You (plural)',
    sinhala: {
      alphabetical: 'Ogollangta',
      script: 'ඔගොල්ලංග්',
    },
    type: 'possesiveTaForm',
  },
  {
    id: 17,
    english: 'To/For Them',
    sinhala: {
      alphabetical: 'Eygollangta',
      script: 'එගොල්ලංග්',
    },
    type: 'possesiveTaForm',
  },
];

export default function Handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    pronouns: pronouns,
  });
}
