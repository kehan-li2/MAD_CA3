// P2111575
// LI KEHAN
// DIT1B04
// SavedRecipeData.js

let SavedRecipe = [];

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
