import Axios from 'axios';

const api = Axios.create({
     baseURL: 'http://doacoes.apaetorres.org.br/api'
});

export default api;

export async function partnerByCategory(id){
    const data = await api
        .get(`/partnerByCategory/${id}`)
        .then((promisse) => promisse.data);
    
    return data.partnersByCategory;
}