// P2129509
// Lee Wee Teck
// DIT1B04
// Foodlistdb.js

const FoodListdb = [
  {
    title: 'Reduce weight',
    horizontal: true,
    data: [
      {
        key: '1',
        category: 'Fruits',
        text: 'Low GI - Fruits',
        image: require('../image/FoodListScreen/fruits.jpg'),
      },
      {
        key: '2',
        category: 'MainFood',
        text: 'Low GI - Main Food',
        image: require('../image/FoodListScreen/chowMein.jpg'),
      },
      {
        key: '3',
        category: 'Meats',
        text: 'Low Calorie - Meats',
        image: require('../image/FoodListScreen/meat.jpg'),
      },
    ],
  },
  {
    title: 'Calcium Supplement',
    horizontal: true,
    data: [
      {
        key: '1',
        category: 'Milk',
        text: 'Milk',
        image: require('../image/FoodListScreen/Milk.jpg'),
      },
      {
        key: '2',
        category: 'Cheese',
        text: 'Cheese',
        image: require('../image/FoodListScreen/cheeseBoard.jpg'),
      },
    ],
  },
];

export {FoodListdb};
