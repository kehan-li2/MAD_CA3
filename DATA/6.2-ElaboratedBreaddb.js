// P2129509
// Lee Wee Teck
// DIT1B04
// ElaboratedBreaddb.js

const HundredGrams = [
  {id: '1', Category: 'Nutrition Value', header: true, value: '100g'},
  {
    id: '2',
    Category: 'Calorie',
    value: '266cal',
  },
  {
    id: '3',
    Category: 'Carbohydrates',
    value: '50.61g',
  },
  {
    id: '4',
    Category: 'Protein',
    value: '7.64g',
  },
  {
    id: '5',
    Category: 'Fat',
    value: '3.29g',
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
  {id: '2', Category: 'Calorie', value: '80cal'},
  {
    id: '3',
    Category: 'Carbohydrates',
    value: '15.18g',
  },
  {
    id: '4',
    Category: 'Protein',
    value: '2.29g',
  },
  {
    id: '5',
    Category: 'Fat',
    value: '0.99g',
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
  {id: '2', Category: 'Calorie', value: '93cal'},
  {
    id: '3',
    Category: 'Carbohydrates',
    value: '17.71g',
  },
  {
    id: '4',
    Category: 'Protein',
    value: '2.67g',
  },
  {
    id: '5',
    Category: 'Fat',
    value: '1.15g',
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
  {id: '2', Category: 'Calorie', value: '66cal'},
  {
    id: '3',
    Category: 'Carbohydrates',
    value: '12.65g',
  },
  {
    id: '4',
    Category: 'Protein',
    value: '1.91g',
  },
  {
    id: '5',
    Category: 'Fat',
    value: '0.82g',
  },
];

export {HundredGrams, BigServing, MediumServing, SmallServings};
