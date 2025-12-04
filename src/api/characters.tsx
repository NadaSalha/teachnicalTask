import api from "."

export default {
    getAllCharacters: async ()=>{
        const res = await api.get('/character');
        return res.data;
    },
    getCharactersByName:async(name:string)=>{
        const res = await api.get(`/character?name=${name}`);
        return res.data;
    } , 
    getCharacterById:async(id:number)=>{
         const res = await api.get(`/character/${id}`);
        return res.data;
    } , 
    getEpisode:async(ids:number[])=>{
        const res = await api.get(`/episode/${ids.join(',')}`);
        return res.data;
    }
}