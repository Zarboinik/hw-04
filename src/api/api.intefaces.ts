export interface ICategoryResult {
    id: number
    name: string
}

export interface ICategoryResponse {
    count: number
    next: string
    previous: string
    results: ICategoryResult[]

}

export interface IRecipesResults {
    id: number
    title: string
    category: ICategoryResult
    content: string

}

export interface IRecipesResponse {
    count: number
    next: string
    previous: string
    results: IRecipesResults[]

}

export interface IRecipe {
    id: number
    title: string
    category: string
    content: string
}