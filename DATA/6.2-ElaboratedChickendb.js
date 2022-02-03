// P2129509
// Lee Wee Teck
// DIT1B04
// ElaboratedChickendb.js

const HundredGrams = [
  {id: '1', Category: 'Nutrition Value', header: true, value: '100g'},
  {
    id: '2',
    Category: 'Calorie',
    value: '195cal',
  },
  {
    id: '3',
    Category: 'Carbohydrates',
    value: '0g',
  },
  {
    id: '4',
    Category: 'Protein',
    value: '29.55g',
  },
  {
    id: '5',
    Category: 'Fat',
    value: '7.72g',
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
  {id: '2', Category: 'Calorie', value: '302cal'},
  {
    id: '3',
    Category: 'Carbohydrates',
    value: '0g',
  },
  {
    id: '4',
    Category: 'Protein',
    value: '45.8g',
  },
  {
    id: '5',
    Category: 'Fat',
    value: '11.97g',
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
  {id: '2', Category: 'Calorie', value: '263cal'},
  {
    id: '3',
    Category: 'Carbohydrates',
    value: '0g',
  },
  {
    id: '4',
    Category: 'Protein',
    value: '39.89g',
  },
  {
    id: '5',
    Category: 'Fat',
    value: '10.42g',
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
  {id: '2', Category: 'Calorie', value: '41cal'},
  {
    id: '3',
    Category: 'Carbohydrates',
    value: '0g',
  },
  {
    id: '4',
    Category: 'Protein',
    value: '6.21g',
  },
  {
    id: '5',
    Category: 'Fat',
    value: '1.62g',
  },
];

export {HundredGrams, BigServing, MediumServing, SmallServings};
