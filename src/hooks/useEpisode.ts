import { useQuery } from "@tanstack/react-query";
import characterServices from "../api/characters";

export default function useEpisode(episodeUrls:string[]) {
 
    const episodeIds = episodeUrls.map(episodeUrl=>Number(episodeUrl.split('/').pop()));

    const query= useQuery({
        queryKey:['episode', episodeIds],
        queryFn: ()=>{
            return characterServices.getEpisode(episodeIds) 
        } , 
        enabled:episodeIds.length>0
    })

    return {query}
}
