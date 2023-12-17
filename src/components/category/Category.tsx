import React, {FC, useState} from "react";
import {useQuery} from "@tanstack/react-query";

import CategoryItem from "./CategoryItem";
import {getCategory, getRecipeById, getRecipesByCategory} from "../../api/api.config";
import './category.styles.scss'
import Recipes from "../recipes/Recipes";
import RecipeItem from "../recipes/RecipeItem";

const Category: FC = () => {
    const {data: category, isLoading: isCategoryLoading} = useQuery({queryKey: ['category'], queryFn: getCategory})
    const [categoryId, setCategoryId] = useState(1)
    const [recipeId, setRecipeId] = useState(1)

    const {data: recipes, isLoading: isRecipesLoading} = useQuery({
        queryKey: ['recipes', categoryId],
        queryFn: () => getRecipesByCategory(categoryId),
    })

    const {data: recipe, isLoading: isRecipeLoading} = useQuery({
        queryKey: ['recipe', recipeId],
        queryFn: () => getRecipeById(recipeId),
    })

    function fetch(id:number) {
        setRecipeId(id)
        console.log(id)
    }

    return (
        <div className='category'>
            {isCategoryLoading ? <div> is Loading</div> :
                <div className='content'>
                    {category?.results.map((category) => (
                        <CategoryItem
                            selectId={categoryId || 1}
                            key={category.id}
                            id={category.id}
                            name={category.name}
                            select={setCategoryId}
                        />
                    ))}
                </div>
            }
            <div className='recipes'>
                {recipes?.results.map((recipe) => (
                    <Recipes
                        key={recipe.id}
                        title={recipe.title}
                        setRecipeId={fetch}
                        id={recipe.id}
                    />
                ))}
            </div>
            {isRecipeLoading ? <div>Loading...</div> :
                <div className='recipe'>
                    <RecipeItem
                        content={recipe?.content}
                        title={recipe.title}
                    />
                </div>
            }
        </div>
    );
}

export default Category
