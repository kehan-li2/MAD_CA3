import AsyncStorage from '@react-native-async-storage/async-storage';

const breakfastDATA = [
  {
    id: '1',
    data: {
      imagePath: require('../image/yoghurt.png'),
      name: 'Berry Yoghurt',
      serving: '4',
      calories: '58 kcal',
      ingredients:
        'Strawberry low-fat yoghurt: 200g (7 oz);Strawberries: 4, medium, cleaned, hulled and sliced;Sugar-reduced soy milk: 100ml (31⁄3 fl oz / 2⁄5 cup);Gelatine powder: 1 tsp;Hot water: 1 tbsp',
      method:
        'In a mixing bowl, combine yoghurt, strawberries and soy milk. Mix well and set aside.;Mix gelatin with hot water until completely dissolved. Stir into yoghurt mixture, then pour into 4 serving glasses. Set aside to cool.;Prepare topping. Blend strawberries with 1 tbsp warm water until fine. Set aside. Mix gelatin powder with hot water and stir until completely dissolved. Add basil seeds and blended strawberries and mix well. Spoon on top of yoghurt mixture and refrigerate for 1 hour or until topping has set.;Garnish as desired and serve chilled',
    },
  },
  {
    id: '2',
    data: {
      imagePath: require('../image/wrap.png'),
      name: 'Vegetarian Wrap',
      serving: '4',
      calories: '150 kcal',
      ingredients:
        'Tortilla wrap 4 slices;Bottled pizza sauce 80g;Marinated capsicums 160g;Pitted olives 40g;Processed mozzarella cheese 40g',
      method:
        'Spread pizza sauce on tortilla.;Line with marinated capsicums and olives,top with mozzarella.;Roll into a wrap, then bake in pre-heated,oven at 250°C for 7 minutes.;Serve hot.',
    },
  },
  {
    id: '3',
    data: {
      imagePath: require('../image/salad.png'),
      name: 'Low-Fat Waldorf Salad',
      serving: '4',
      calories: '163 kcal',
      ingredients:
        'Celery, peeled and sliced 240g;Green apple, sliced into strips 120g;Red apple, sliced into strips 120g;Tomatoes, deseeded and sliced into strips 40g;Dried apricot, sliced 30g*;Raisins 2 tbsp*;Unsalted walnut, as garnish 20g*;Orange segment, as garnish 20g',
      method:
        'Put the chicken breasts into an oven-proof dish and brush them with lemon juice and olive oil.;Season lightly with salt and pepper.;Cover and leave aside to marinate for 30 mins.;In a pre-heated oven at 130°C, bake the chicken breasts for about 20 minutes.;Top with thinly sliced tomatoes and bake for another 5 minutes.;Garnish with fresh, chopped parsley and serve immediately.',
    },
  },
  {
    id: '4',
    data: {
      imagePath: require('../image/pancake.png'),
      name: 'Berry Yoghurt',
      serving: '4',
      calories: '58 kcal',
      ingredients:
        'Strawberry low-fat yoghurt: 200g (7 oz);Strawberries: 4, medium, cleaned, hulled and sliced;Sugar-reduced soy milk: 100ml (31⁄3 fl oz / 2⁄5 cup);Gelatine powder: 1 tsp;Hot water: 1 tbsp',
      method:
        'In a mixing bowl, combine yoghurt, strawberries and soy milk. Mix well and set aside.;Mix gelatin with hot water until completely dissolved. Stir into yoghurt mixture, then pour into 4 serving glasses. Set aside to cool.;Prepare topping. Blend strawberries with 1 tbsp warm water until fine. Set aside. Mix gelatin powder with hot water and stir until completely dissolved. Add basil seeds and blended strawberries and mix well. Spoon on top of yoghurt mixture and refrigerate for 1 hour or until topping has set.;Garnish as desired and serve chilled',
    },
  },
];
const lunchDATA = [
  {
    id: '1',
    data: {
      imagePath: require('../image/salmon.png'),
      name: 'Salmon Fillet with Honey Spice Sauce',
      serving: '4',
      calories: '205 kcal',
      ingredients:
        'Salmon fillet, 100g-120g each 4;Honey, ready in bottle 3 tbsp;Garlic powder ½tsp;Olive oil 1 tbsp;Hot water 2 tbsp;Lemon peel, grated 1 tsp;Lemon, sliced 12;Spring Onion, shredded;Salt & pepper, to taste',
      method:
        'Place honey, lemon peel, garlic powder and hot water in a small bowl and whisk until well blended.;Brush the mixture to coat the salmon fillets on both sides.;Marinate for 45 minutes in the refrigerator.;Season the salmon fillets with salt and pepper. • Heat olive oil in a skillet over medium heat.;Carefully place the salmon fillets on the skillet and cook for 4–5 minutes.;Using tongs, turn the salmon fillets.;Reduce heat to medium-low if necessary. Cook salmon fillets until they flake easily using a fork.;Garnish salmon fillets with shredded spring onion and sliced lemon. Serve hot.',
    },
  },
  {
    id: '2',
    data: {
      imagePath: require('../image/pesta.png'),
      name: 'Vegetarian Wrap',
      serving: '4',
      calories: '150 kcal',
      ingredients:
        'Salmon fillet, 100g-120g each 4;Honey, ready in bottle 3 tbsp;Garlic powder ½tsp;Olive oil 1 tbsp;Hot water 2 tbsp;Lemon peel, grated 1 tsp;Lemon, sliced 12;Spring Onion, shredded;Salt & pepper, to taste',
      method:
        'Place honey, lemon peel, garlic powder and hot water in a small bowl and whisk until well blended.;Brush the mixture to coat the salmon fillets on both sides.;Marinate for 45 minutes in the refrigerator.;Season the salmon fillets with salt and pepper. • Heat olive oil in a skillet over medium heat.;Carefully place the salmon fillets on the skillet and cook for 4–5 minutes.;Using tongs, turn the salmon fillets.;Reduce heat to medium-low if necessary. Cook salmon fillets until they flake easily using a fork.;Garnish salmon fillets with shredded spring onion and sliced lemon. Serve hot.',
    },
  },
  {
    id: '3',
    data: {
      imagePath: require('../image/chicken.png'),
      name: 'Tomato Herb Chicken',
      serving: '4',
      calories: '158 kcal',
      ingredients:
        '400g of whole chicken breasts;3 tbsp of lemon juice;2 tomatoes, thinly sliced;20g of chopped parsley;1 tbsp of olive oil*;Salt and pepper, to taste',
      method:
        'Put the chicken breasts into an oven-proof dish and brush them with lemon juice and olive oil.;Season lightly with salt and pepper.;Cover and leave aside to marinate for 30 mins.;In a pre-heated oven at 130°C, bake the chicken breasts for about 20 minutes.;Top with thinly sliced tomatoes and bake for another 5 minutes.;Garnish with fresh, chopped parsley and serve immediately.',
    },
  },
  {
    id: '4',
    data: {
      imagePath: require('../image/sandwich.png'),
      name: 'Berry Yoghurt',
      serving: '4',
      calories: '58 kcal',
      ingredients:
        'Salmon fillet, 100g-120g each 4;Honey, ready in bottle 3 tbsp;Garlic powder ½tsp;Olive oil 1 tbsp;Hot water 2 tbsp;Lemon peel, grated 1 tsp;Lemon, sliced 12;Spring Onion, shredded;Salt & pepper, to taste',
      method:
        'Place honey, lemon peel, garlic powder and hot water in a small bowl and whisk until well blended.;Brush the mixture to coat the salmon fillets on both sides.;Marinate for 45 minutes in the refrigerator.;Season the salmon fillets with salt and pepper. • Heat olive oil in a skillet over medium heat.;Carefully place the salmon fillets on the skillet and cook for 4–5 minutes.;Using tongs, turn the salmon fillets.;Reduce heat to medium-low if necessary. Cook salmon fillets until they flake easily using a fork.;Garnish salmon fillets with shredded spring onion and sliced lemon. Serve hot.',
    },
  },
];
const dinnerDATA = [
  {
    id: '1',
    data: {
      imagePath: require('../image/spaghetti.png'),
      name: 'Salmon Fillet with Honey Spice Sauce',
      serving: '4',
      calories: '205 kcal',
      ingredients:
        'Salmon fillet, 100g-120g each 4;Honey, ready in bottle 3 tbsp;Garlic powder ½tsp;Olive oil 1 tbsp;Hot water 2 tbsp;Lemon peel, grated 1 tsp;Lemon, sliced 12;Spring Onion, shredded;Salt & pepper, to taste',
      method:
        'Place honey, lemon peel, garlic powder and hot water in a small bowl and whisk until well blended.;Brush the mixture to coat the salmon fillets on both sides.;Marinate for 45 minutes in the refrigerator.;Season the salmon fillets with salt and pepper. • Heat olive oil in a skillet over medium heat.;Carefully place the salmon fillets on the skillet and cook for 4–5 minutes.;Using tongs, turn the salmon fillets.;Reduce heat to medium-low if necessary. Cook salmon fillets until they flake easily using a fork.;Garnish salmon fillets with shredded spring onion and sliced lemon. Serve hot.',
    },
  },
  {
    id: '2',
    data: {
      imagePath: require('../image/potatocake.png'),
      name: 'Vegetrap',
      serving: '4',
      calories: '150 kcal',
      ingredients:
        'ready in bottle 3 tbsp;Garlic powder ½tsp;Olive oil 1 tbsp;Hot water 2 tbsp;Lemon peel, grated 1 tsp;Lemon, sliced 12;Spring Onion, shredded;Salt & pepper, to taste',
      method:
        'Place honey, lemon peel, garlic powder and hot water in a small bowl and whisk until well blended.;Brush the mixture to coat the salmon fillets on both sides.;Marinate for 45 minutes in the refrigerator.;Season the salmon fillets with salt and pepper. • Heat olive oil in a skillet over medium heat.;Carefully place the salmon fillets on the skillet and cook for 4–5 minutes.;Using tongs, turn the salmon fillets.;Reduce heat to medium-low if necessary. Cook salmon fillets until they flake easily using a fork.;Garnish salmon fillets with shredded spring onion and sliced lemon. Serve hot.',
    },
  },
  {
    id: '3',
    data: {
      imagePath: require('../image/pasta.png'),
      name: 'Tomato Herb Chicken',
      serving: '4',
      calories: '158 kcal',
      ingredients:
        'Salmon fillet, 100g-120g each 4;Honey, ready in bottle 3 tbsp;Garlic powder ½tsp;Olive oil 1 tbsp;Hot water 2 tbsp;Lemon peel, grated 1 tsp;Lemon, sliced 12;Spring Onion, shredded;Salt & pepper, to taste',
      method:
        'Place honey, lemon peel, garlic powder and hot water in a small bowl and whisk until well blended.;Brush the mixture to coat the salmon fillets on both sides.;Marinate for 45 minutes in the refrigerator.;Season the salmon fillets with salt and pepper. • Heat olive oil in a skillet over medium heat.;Carefully place the salmon fillets on the skillet and cook for 4–5 minutes.;Using tongs, turn the salmon fillets.;Reduce heat to medium-low if necessary. Cook salmon fillets until they flake easily using a fork.;Garnish salmon fillets with shredded spring onion and sliced lemon. Serve hot.',
    },
  },
  {
    id: '4',
    data: {
      imagePath: require('../image/curry.png'),
      name: 'Berry Yoghurt',
      serving: '4',
      calories: '58 kcal',
      ingredients:
        'Salmon fillet, 100g-120g each 4;Honey, ready in bottle 3 tbsp;Garlic powder ½tsp;Olive oil 1 tbsp;Hot water 2 tbsp;Lemon peel, grated 1 tsp;Lemon, sliced 12;Spring Onion, shredded;Salt & pepper, to taste',
      method:
        'Place honey, lemon peel, garlic powder and hot water in a small bowl and whisk until well blended.;Brush the mixture to coat the salmon fillets on both sides.;Marinate for 45 minutes in the refrigerator.;Season the salmon fillets with salt and pepper. • Heat olive oil in a skillet over medium heat.;Carefully place the salmon fillets on the skillet and cook for 4–5 minutes.;Using tongs, turn the salmon fillets.;Reduce heat to medium-low if necessary. Cook salmon fillets until they flake easily using a fork.;Garnish salmon fillets with shredded spring onion and sliced lemon. Serve hot.',
    },
  },
];

// const STORGAE_BREAKFAST_KEY = '@save_breakfast';
// const STORGAE_LUNCH_KEY = '@save_lunch';
// const STORGAE_DINNER_KEY = '@save_dinner';

// const saveRecipe = async () => {
//   try {
//     // wait it to finish store the data
//     await AsyncStorage.setItem(
//       STORGAE_BREAKFAST_KEY,
//       JSON.stringify(breakfastDATA),
//     );
//     await AsyncStorage.setItem(STORGAE_LUNCH_KEY, JSON.stringify(lunchDATA));
//     await AsyncStorage.setItem(STORGAE_DINNER_KEY, JSON.stringify(dinnerDATA));

//     alert('Data saved!');
//   } catch (e) {
//     console.log(e);
//     alert('Could not save data in storage');
//   }
// };

// saveRecipe();
// console.log(STORGAE_BREAKFAST_KEY);
// export {STORGAE_BREAKFAST_KEY, STORGAE_LUNCH_KEY, STORGAE_DINNER_KEY};
export {breakfastDATA, lunchDATA, dinnerDATA};
