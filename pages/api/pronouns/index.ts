import { NextApiRequest, NextApiResponse } from 'next';

const personalPronouns = [
  {
    id: 0,
    english: 'I',
    sinhala: {
      alphabetical: 'Mama',
      script: 'මම',
    },
  },
  {
    id: 1,
    english: 'You (singular)',
    sinhala: {
      alphabetical: 'Oyaa',
      script: 'ඔයා',
    },
  },
  {
    id: 2,
    english: 'He/She',
    sinhala: {
      alphabetical: 'Eyaa',
      script: 'එයා',
    },
  },
  {
    id: 3,
    english: 'We',
    sinhala: {
      alphabetical: 'Api',
      script: 'අපි',
    },
  },
  {
    id: 4,
    english: 'You (plural)',
    sinhala: {
      alphabetical: 'Ogolo',
      script: 'ඔගොල්ලො',
    },
  },
  {
    id: 5,
    english: 'They',
    sinhala: {
      alphabetical: 'Egolo',
      script: 'එගොල්ලො',
    },
  },
];

const possesivePronouns = [
  {
    id: 0,
    english: 'Mine/My',
    sinhala: {
      alphabetical: 'Mage',
      script: 'මගේ',
    },
  },
  {
    id: 1,
    english: 'Yours/Your (singular)',
    sinhala: {
      alphabetical: 'Oyage',
      script: 'ඔයගෙ',
    },
  },
  {
    id: 2,
    english: 'His/Hers',
    sinhala: {
      alphabetical: 'Eyage',
      script: 'එයගෙ',
    },
  },
  {
    id: 3,
    english: 'Our',
    sinhala: {
      alphabetical: 'Ape',
      script: 'අපේ',
    },
  },
  {
    id: 4,
    english: 'Your (plural)',
    sinhala: {
      alphabetical: 'Ogolange',
      script: 'ඔගොලංගෙ',
    },
  },
  {
    id: 5,
    english: 'Their',
    sinhala: {
      alphabetical: 'Egolange',
      script: 'එගොලංගෙ',
    },
  },
];

const possesivePronounsTaForm = [
  {
    id: 0,
    english: 'To/For me',
    sinhala: {
      alphabetical: 'Mata',
      script: 'මට',
    },
  },
  {
    id: 1,
    english: 'To/For you (singular)',
    sinhala: {
      alphabetical: 'Oyata',
      script: 'ඔයට',
    },
  },
  {
    id: 2,
    english: 'To/For Him/Her',
    sinhala: {
      alphabetical: 'Eyata',
      script: 'එයට',
    },
  },
  {
    id: 3,
    english: 'To/For Us',
    sinhala: {
      alphabetical: 'Apita',
      script: 'අපිට',
    },
  },
  {
    id: 4,
    english: 'To/For You (plural)',
    sinhala: {
      alphabetical: 'Ogollangta',
      script: 'ඔගොල්ලංග්',
    },
  },
  {
    id: 5,
    english: 'To/For Them',
    sinhala: {
      alphabetical: 'Eygollangta',
      script: 'එගොල්ලංග්',
    },
  },
];

export default function Handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    personalPronouns: personalPronouns,
    possesivePronouns: possesivePronouns,
    possesivePronounsTaForm: possesivePronounsTaForm,
  });
}
