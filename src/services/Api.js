import Axios from 'axios';

export const baseURL = 'http://doacoes.apaetorres.org.br/';

const api = Axios.create({
     baseURL
});

export default api;

export async function partnerByCategory(id){
    const data = await api
        .get(`api/partnerByCategory/${id}`)
        .then((promisse) => promisse.data);
        
    return data.partnersByCategory;
}

export async function getPhotoByEndpoint(endpoint){
    const image = await api.get(endpoint);
    console.log(image);
    
}