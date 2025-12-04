
import { Search } from 'lucide-react';

interface SearchBarProps{
  value:string;
  onChange:(value:string)=>void

}
function SearchBar({value , onChange}:SearchBarProps) {

 return (
    <div className="relative w-full max-w-2xl">
      <Search className="absolute left-40 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
      <input
        type="text" 
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
        className="pl-12 h-14 text-lg bg-card/50 backdrop-blur-sm border-border/50 border  focus:border-portal-green/50 focus:ring-portal-green/20 transition-all"
      />
    </div>
  );
}

export default SearchBar
