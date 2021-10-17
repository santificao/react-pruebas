import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const apiKey = '525BLfPr2GBPi4synK8CDkuUnbQfkAGS';
    const url = 'https://api.giphy.com/v1/gifs/search';

    const { data:images, loading } = useFetchGifs(category, url, apiKey);    

    return (
        <>
            <h3>{category}</h3>
            { loading && <p className="animate__animated animate__flash">Loading</p> }
            <div className="card-grid">
                {
                    images.map( (img) => (
                        <GifGridItem 
                            key={img.id}
                            { ...img }
                        />
                    ))
                }
            </div>
        </>
    )
}
