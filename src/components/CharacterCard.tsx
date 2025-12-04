// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import  type { Character } from '../types/Character';

interface Props{
  character:Character
}
export default function CharacterCard({character}:Props) {
    
  const navigate=useNavigate();
  return (
      <div onClick={()=>{navigate(`/characters/${character.id}`)}} className=" rounded-lg border bg-card text-card-foreground shadow-sm  group overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-portal-green/50 hover:shadow-lg hover:shadow-portal-green/10 hover:-translate-y-1">
        <div className="relative aspect-square overflow-hidden">
          <img
            src={character.image}
            alt={character.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
          <div
            className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 absolute top-3 right-3 border-transparent bg-primary text-primary-foreground hover:bg-primary/80  font-semibold shadow-lg`}
          >
            {character.status}
          </div>
        </div>
        
        <div className="p-5 space-y-3">
          <h3 className="text-xl font-bold text-foreground group-hover:text-portal-green transition-colors line-clamp-1">
            {character.name}
          </h3>
          
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="font-medium text-foreground/80">Species:</span>
              <span>{character.species}</span>
            </div>
            
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="font-medium text-foreground/80">Location:</span>
              <span className="line-clamp-1">{character.location.name}</span>
            </div>
          </div>
        </div>
      </div>
  );
}
