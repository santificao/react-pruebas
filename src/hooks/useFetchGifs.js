import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category, url, apiKey) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        getGifs(category, url, apiKey)
            .then( imgs => {            
                setState({
                    data: imgs,
                    loading:false
            }) 
        });
    }, [category, url, apiKey] );

    return state;
}