import React, {FC} from "react";

interface IRecipe {
    title: string,
    setRecipeId: (value: number) => void
    id: number
}

const Recipes: FC<IRecipe> = ({title, setRecipeId, id}) => {
    return (
        <div className='recipes-container' onClick={() => setRecipeId(id)}>
            <div className='recipes-title'>
                {title}
            </div>
        </div>
    );
}

export default Recipes;
