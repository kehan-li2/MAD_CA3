// P2129509
// Lee Wee Teck
// DIT1B04
// ElaboratedOrangedb.js

const HundredGrams = [
  {id: '1', Category: 'Nutrition Value', header: true, value: '100g'},
  {
    id: '2',
    Category: 'Calorie',
    value: '47cal',
  },
  {
    id: '3',
    Category: 'Carbohydrates',
    value: '11.75g',
  },
  {
    id: '4',
    Category: 'Protein',
    value: '0.94g',
  },
  {
    id: '5',
    Category: 'Fat',
    value: '0.12g',
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
  {id: '2', Category: 'Calorie', value: '86cal'},
  {
    id: '3',
    Category: 'Carbohydrates',
    value: '21.62g',
  },
  {
    id: '4',
    Category: 'Protein',
    value: '1.73g',
  },
  {
    id: '5',
    Category: 'Fat',
    value: '0.22g',
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
  {id: '2', Category: 'Calorie', value: '85cal'},
  {
    id: '3',
    Category: 'Carbohydrates',
    value: '21.15g',
  },
  {
    id: '4',
    Category: 'Protein',
    value: '1.69g',
  },
  {
    id: '5',
    Category: 'Fat',
    value: '0.22g',
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
  {id: '2', Category: 'Calorie', value: '45cal'},
  {
    id: '3',
    Category: 'Carbohydrates',
    value: '11.28g',
  },
  {
    id: '4',
    Category: 'Protein',
    value: '0.90g',
  },
  {
    id: '5',
    Category: 'Fat',
    value: '0.12g',
  },
];

export {HundredGrams, BigServing, MediumServing, SmallServings};
