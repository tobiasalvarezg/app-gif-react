import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GridAnime } from "./components/GridAnime";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState([""]);

    return (
        <>
            <h1>Gif Expert Tobi</h1>
            <AddCategory
                categories={categories}
                setCategories={setCategories}
            />
            {categories.map(category => (
                <GridAnime
                    key={category}
                    category={category}
                />
            ))}
        </>
    );
};
