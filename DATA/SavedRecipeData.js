let SavedRecipe = [
  // {
  //   id: '1',
  //   data: {
  //     recipeName: 'yogurt',
  //     recipeImage: require('../image/user2.png'),
  //     ingredients: 'sahdjgk;sdasd;sdasds;ad;sadsa;dsa;dsa;dsa;dasd;',
  //     methods: 'dsasadsdsa;sadsadsadsad;sdsadsdsadsa;sadsadas;',
  //   },
  // },
];

const addSavedRecipe = newRecipe => {
  SavedRecipe.push({
    id: (SavedRecipe.length + 1).toString(),
    data: {
      recipeName: newRecipe.name,
      recipeImage: newRecipe.image,
      ingredients: newRecipe.ingredients,
      methods: newRecipe.methods,
    },
  });
  console.log(SavedRecipe);
  return SavedRecipe;
};

const delSavedRecipe = delRecipeName => {
  let delRecipeIndex = SavedRecipe.findIndex(
    key => key.data.recipeName === delRecipeName,
  );
  // console.log(delRecipeIndex);
  if (delRecipeIndex > -1) {
    SavedRecipe.splice(delRecipeIndex, 1); // 2nd parameter means remove one item only
  }

  console.log(SavedRecipe);
  return SavedRecipe;
};

export {addSavedRecipe, delSavedRecipe, SavedRecipe};
// export default addSavedRecipe;
