import React, {FC} from "react";

interface ICategory {
    id: number,
    name: string
    select: (value: any) => void
    selectId: number
}

const CategoryItem: FC<ICategory> = ({name, id, select, selectId}) => {
    return (
        <div className='category-item'>
            <div onClick={() => {select(id)}} className={id === selectId ? 'category-a-selected' : 'category-a'}>
                {name}
            </div>
        </div>
    );
}

export default CategoryItem