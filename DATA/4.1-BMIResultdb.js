// P2129509
// Lee Wee Teck
// DIT1B04
// BMIResultdb.js

const LowerThan20 = [
  {Category: 'Energy', value: '2470kcal'},
  {
    Category: 'Carbohydrate',
    value: '130g',
  },
  {
    Category: 'Protein',
    value: '45g',
  },
  {
    Category: 'Fat',
    value: '40g',
    lastItem: true,
  },
];

const HigherThan20 = [
  {Category: 'Energy', value: '3508kcal'},
  {
    Category: 'Carbohydrate',
    value: '230g',
  },
  {
    Category: 'Protein',
    value: '60g',
  },
  {
    Category: 'Fat',
    value: '55g',
    lastItem: true,
  },
];

export {LowerThan20, HigherThan20};
