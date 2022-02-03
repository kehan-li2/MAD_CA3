// P2129509
// Lee Wee Teck
// DIT1B04
// ElaboratedGrapedb.js

const HundredGrams = [
  {id: '1', Category: 'Nutrition Value', header: true, value: '100g'},
  {
    id: '2',
    Category: 'Calorie',
    value: '67cal',
  },
  {
    id: '3',
    Category: 'Carbohydrates',
    value: '18.10g',
  },
  {
    id: '4',
    Category: 'Protein',
    value: '0.72g',
  },
  {
    id: '5',
    Category: 'Fat',
    value: '0.16g',
  },
];

const BigServing = [
  {
    multiText: true,
    id: '1',
    Category: 'Nutrition Value',
    header: true,
    value: 'One Serving (Big)',
  },
  {id: '2', Category: 'Calorie', value: '104cal'},
  {
    id: '3',
    Category: 'Carbohydrates',
    value: '27.30g',
  },
  {
    id: '4',
    Category: 'Protein',
    value: '1.10g',
  },
  {
    id: '5',
    Category: 'Fat',
    value: '0.20g',
  },
];

const MediumServing = [
  {
    multiText: true,
    id: '1',
    Category: 'Nutrition Value',
    header: true,
    value: 'One Serving  (Medium)',
  },
  {id: '2', Category: 'Calorie', value: '62cal'},
  {
    id: '3',
    Category: 'Carbohydrates',
    value: '16.00g',
  },
  {
    id: '4',
    Category: 'Protein',
    value: '0.60g',
  },
  {
    id: '5',
    Category: 'Fat',
    value: '0.15g',
  },
];

const SmallServings = [
  {
    multiText: true,
    id: '1',
    Category: 'Nutrition Value',
    header: true,
    value: 'One Serving  (Small)',
  },
  {id: '2', Category: 'Calorie', value: '60cal'},
  {
    id: '3',
    Category: 'Carbohydrates',
    value: '10g',
  },
  {
    id: '4',
    Category: 'Protein',
    value: '0.50g',
  },
  {
    id: '5',
    Category: 'Fat',
    value: '0.10g',
  },
];

export {HundredGrams, BigServing, MediumServing, SmallServings};
