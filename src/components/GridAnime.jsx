import { AnimesItemms } from "./AnimesItemms";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GridAnime = ({ category }) => {
    const { imagenes, isLoading } = useFetchGifs(category);

    return (
        <>
            <h2>{category}</h2>
            {isLoading && <h3>Cargando...</h3>}
            <div className="card-grid">
                {imagenes.map((image) => (
                    <AnimesItemms
                        key={image.id}
                        {...image}
                    />
                ))}
            </div>
        </>
    );
};
