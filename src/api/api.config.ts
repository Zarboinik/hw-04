import axios from "axios";
import {ICategoryResponse, IRecipe, IRecipesResponse} from "./api.intefaces";

export const API_URL = 'http://localhost:8000/api'

const $axios = axios.create({
    baseURL: API_URL
});

export const getCategory = async () => {
    const response = await $axios.get<ICategoryResponse>('/categorys/');
    return response.data;
}


export const getRecipesByCategory = async (id: number) => {
    const response = await $axios.get<IRecipesResponse>(`recipes/by_category/${id}/`);
    return response.data;
}


export const getRecipeById = async (id: number) => {
    const response = await $axios.get<IRecipe>(`recipes/${id}/`);
    return response.data;
}