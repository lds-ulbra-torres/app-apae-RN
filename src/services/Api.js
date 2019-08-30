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

export async function getPartnerDetails(id){
    const data = await api
        .get(`api/v2/partner/${id}`)
        .then((promisse) => promisse.data)
        .catch()

    return data.partners;
}