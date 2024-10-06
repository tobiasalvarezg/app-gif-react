import { useEffect, useState } from "react";
import { getGifs } from "../helpers/get.Gifs";

export const useFetchGifs = (category) => {
    const [imagenes, setImagenes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImagenes = async () => {
        const newImagenes = await getGifs(category);
        setImagenes(newImagenes);
        setIsLoading(false);
    };

    useEffect(() => {
        getImagenes();
    }, []);

    return {
        imagenes,
        isLoading
    };
};
