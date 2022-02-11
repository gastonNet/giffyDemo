const apiKey = 'PeBOqrX5GBNfllwtpoIdNawPyDo39tJK';

export default function GetGifs({keyword='welcome'} = {}){
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`

    return fetch(apiURL)
        .then(r => r.json())
        .then(response => {
         const {data = []} = response
         if (Array.isArray(data)) {
            const gifs = data.map(image => {
                const {title, images, id} = image
                const {url} = images.downsized_medium 
                return {url,title,images, id}
            })
            return gifs
         }    
        })
}