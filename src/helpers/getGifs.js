export const getGifs = async(category, url, apiKey) => {
    let request = `${url}?q=${ encodeURI(category) }&limit=10&api_key=${apiKey}`;
    const resp = await fetch(request);
    const { data } = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title:img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return gifs;
}