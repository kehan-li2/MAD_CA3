// P2111575
// LI KEHAN
// DIT1B04
// RecipeData.js

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
        'Salmon fillet, 100g-120g each 4;Honey, ready in bottle 3 tbsp;Garlic powder ½tsp;Olive oil 1 tbsp;Hot water 2 tbsp;Lemon peel, grated 1 tsp;Lemon, sliced 12;Spring Onion, shredded;Salt & pepper, to taste',
      method:
        'Place honey, lemon peel, garlic powder and hot water in a small bowl and whisk until well blended.;Brush the mixture to coat the salmon fillets on both sides.;Marinate for 45 minutes in the refrigerator.;Season the salmon fillets with salt and pepper. • Heat olive oil in a skillet over medium heat.;Carefully place the salmon fillets on the skillet and cook for 4–5 minutes.;Using tongs, turn the salmon fillets.;Reduce heat to medium-low if necessary. Cook salmon fillets until they flake easily using a fork.;Garnish salmon fillets with shredded spring onion and sliced lemon. Serve hot.',
    },
  },
  {
    id: '3',
    data: {
      imagePath: require('../image/salad.png'),
      name: 'Waldorf Salad',
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
      name: 'Oat pancake',
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
      name: 'Spicy Salmon Fillet',
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
      name: 'Vegetarian Pesta',
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
        'Salmon fillet, 100g-120g each 4;Honey, ready in bottle 3 tbsp;Garlic powder ½tsp;Olive oil 1 tbsp;Hot water 2 tbsp;Lemon peel, grated 1 tsp;Lemon, sliced 12;Spring Onion, shredded;Salt & pepper, to taste',
      method:
        'Place honey, lemon peel, garlic powder and hot water in a small bowl and whisk until well blended.;Brush the mixture to coat the salmon fillets on both sides.;Marinate for 45 minutes in the refrigerator.;Season the salmon fillets with salt and pepper. • Heat olive oil in a skillet over medium heat.;Carefully place the salmon fillets on the skillet and cook for 4–5 minutes.;Using tongs, turn the salmon fillets.;Reduce heat to medium-low if necessary. Cook salmon fillets until they flake easily using a fork.;Garnish salmon fillets with shredded spring onion and sliced lemon. Serve hot.',
    },
  },
  {
    id: '4',
    data: {
      imagePath: require('../image/sandwich.png'),
      name: 'Tasty Sandwich',
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
      name: 'Brocoli Spaghetti',
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
      name: 'Potato cake',
      serving: '4',
      calories: '150 kcal',
      ingredients:
        'Salmon fillet ready in bottle 3 tbsp;Garlic powder ½tsp;Olive oil 1 tbsp;Hot water 2 tbsp;Lemon peel, grated 1 tsp;Lemon, sliced 12;Spring Onion, shredded;Salt & pepper, to taste',
      method:
        'Place honey, lemon peel, garlic powder and hot water in a small bowl and whisk until well blended.;Brush the mixture to coat the salmon fillets on both sides.;Marinate for 45 minutes in the refrigerator.;Season the salmon fillets with salt and pepper. • Heat olive oil in a skillet over medium heat.;Carefully place the salmon fillets on the skillet and cook for 4–5 minutes.;Using tongs, turn the salmon fillets.;Reduce heat to medium-low if necessary. Cook salmon fillets until they flake easily using a fork.;Garnish salmon fillets with shredded spring onion and sliced lemon. Serve hot.',
    },
  },
  {
    id: '3',
    data: {
      imagePath: require('../image/pasta.png'),
      name: 'Greate Pasta',
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
      name: 'Curry rice',
      serving: '4',
      calories: '58 kcal',
      ingredients:
        'Salmon fillet, 100g-120g each 4;Honey, ready in bottle 3 tbsp;Garlic powder ½tsp;Olive oil 1 tbsp;Hot water 2 tbsp;Lemon peel, grated 1 tsp;Lemon, sliced 12;Spring Onion, shredded;Salt & pepper, to taste',
      method:
        'Place honey, lemon peel, garlic powder and hot water in a small bowl and whisk until well blended.;Brush the mixture to coat the salmon fillets on both sides.;Marinate for 45 minutes in the refrigerator.;Season the salmon fillets with salt and pepper. • Heat olive oil in a skillet over medium heat.;Carefully place the salmon fillets on the skillet and cook for 4–5 minutes.;Using tongs, turn the salmon fillets.;Reduce heat to medium-low if necessary. Cook salmon fillets until they flake easily using a fork.;Garnish salmon fillets with shredded spring onion and sliced lemon. Serve hot.',
    },
  },
];

export {breakfastDATA, lunchDATA, dinnerDATA};
