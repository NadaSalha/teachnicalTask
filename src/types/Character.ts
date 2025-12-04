export  type Character={
    id:number ; 
    name:string; 
    status:string;
    species:string;
    gender : 'Male' | 'Female';
    image:string;
    location :{
        name:string; 
        url:string;
    }
    episode:string[];
    created:string;

}