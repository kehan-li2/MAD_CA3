let SavedRecipe = [
  {
    id: '1',
    data: {
      recipeName: 'yogurt',
      recipeImage: require('../image/user2.png'),
      comment: 'Berry and yoghurt are so tasty',
    },
  },
];

const addSavedRecipe = newRecipe => {
  newRecipe.push({
    id: (newRecipe.length + 1).toString(),
    data: {
      recipeName: require('../image/user.png'),
      recipeImage: newRecipe.name,
    },
  });
};

export {SavedRecipe};
export default addSavedRecipe;
