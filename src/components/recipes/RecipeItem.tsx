import React, {FC} from "react";

interface IRecipeItem {
    content: string
    title: string
}

const RecipeItem: FC<IRecipeItem> = ({content, title}) => {
    return (
        <div className='recipe-container'>
            <div className='recipe-title'>
                {title}
            </div>
            <div>
                Рецепт приготовления:
            </div>
            <div className='recipe-content'>
                {content}
            </div>
        </div>
    );
}

export default RecipeItem;