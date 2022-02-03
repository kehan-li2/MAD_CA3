// P2129509
// Lee Wee Teck
// DIT1B04
// ElaboratedRabbitdb.js

const HundredGrams = [
  {id: '1', Category: 'Nutrition Value', header: true, value: '100g'},
  {
    id: '2',
    Category: 'Calorie',
    value: '197cal',
  },
  {
    id: '3',
    Category: 'Carbohydrates',
    value: '0g',
  },
  {
    id: '4',
    Category: 'Protein',
    value: '29.06g',
  },
  {
    id: '5',
    Category: 'Fat',
    value: '8.05g',
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
  {id: '2', Category: 'Calorie', value: '894cal'},
  {
    id: '3',
    Category: 'Carbohydrates',
    value: '0g',
  },
  {
    id: '4',
    Category: 'Protein',
    value: '131.82g',
  },
  {
    id: '5',
    Category: 'Fat',
    value: '36.51g',
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
  {id: '2', Category: 'Calorie', value: '617cal'},
  {
    id: '3',
    Category: 'Carbohydrates',
    value: '0g',
  },
  {
    id: '4',
    Category: 'Protein',
    value: '90.96g',
  },
  {
    id: '5',
    Category: 'Fat',
    value: '25.2g',
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
  {id: '2', Category: 'Calorie', value: '167cal'},
  {
    id: '3',
    Category: 'Carbohydrates',
    value: '0g',
  },
  {
    id: '4',
    Category: 'Protein',
    value: '24.7g',
  },
  {
    id: '5',
    Category: 'Fat',
    value: '6.84g',
  },
];

export {HundredGrams, BigServing, MediumServing, SmallServings};
