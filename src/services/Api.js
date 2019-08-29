import Axios from 'axios';

const api = Axios.create({
     baseURL: 'http://doacoes.apaetorres.org.br/'
});

export default api;

export async function partnerByCategory(id){
    const data = await api
        .get(`api/partnerByCategory/${id}`)
        .then((promisse) => promisse.data);
        
    return data.partnersByCategory;
}