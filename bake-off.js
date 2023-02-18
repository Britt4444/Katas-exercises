//helper function to match each bakery with a recipe
const ingredientCheck = function(bakery, recipes) {
  //some checks whether at least 1 ingredient is present in recipes
  return bakery.some(value => recipes.includes(value));
};

const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  // Code here!
  for (let recipe of recipes) {
    //condition to check if bakeryA and bakeryB include ingredients found in a recipe
    if ((ingredientCheck(bakeryA, recipe.ingredients)) && (ingredientCheck(bakeryB, recipe.ingredients))) {
    //return name of recipe
      return recipe.name;
    }
  }
};


let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));


/*We need to complete a function called chooseRecipe(), 
which will receive three parameters: 
- An array of ingredients in stock at Bakery A 
- An array of ingredients in stock at Bakery B 
- An array of recipe objects. 
Each recipe has a name property(string) and an ingredient property(array)

We are limiting our search to two ingredient recipes. We want to find a 
recipe that utilizes one ingredient from Bakery A and one from Bakery B.

Our chooseRecipe() function should return the name of the correct recipe. 

This one is a doozy! We might want to start by creating a helper function 
called ingredientCheck() that will take in one bakery at a time, along 
with the recipes.ingredients array to check if the given bakery possesses 
any of the ingredients from that recipe.*/