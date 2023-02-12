import { recipes } from './recipeData';

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map(recipe =>
        <div key={recipe.id}>
          <h2>{recipe.name}</h2>
          <ul>
            {recipe.ingredients.map(ingredient =>
              <li key={ingredient}>
                {ingredient}
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
function Recipe({id,name, ingredients}){
    return (
        <div>
            <h2>{name}</h2>
            <ul>
                {ingredients.map(a=><li key={a}>{a}</li> )}
            </ul>
        </div>
    )

}

export function ExtractRecipeComponent(){
    return (
        <div>
            <h1>Recipes</h1>
            {recipes.map(a=><Recipe {...a} key={a.id}/>)}
        </div>
    )
}