import { useState } from "react";

export const AddCategory = ({ categories, setCategories }) => {
    const [inputValue, setInputValue] = useState("");

    const onChangeInput = (e) => {
        setInputValue(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length <= 1) return;

        if (categories.some(category => category.toLowerCase() === inputValue.toLowerCase())) {
            alert("Esta categoría ya está en la lista.");
            return;
        }

        setCategories([inputValue]);
        setInputValue("");
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar Gif"
                value={inputValue}
                onChange={onChangeInput}
            />
        </form>
    );
};
