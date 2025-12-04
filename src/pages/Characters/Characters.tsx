import CharacterCard from '../../components/CharacterCard';
import SearchBar from '../../components/SearchBar';
import useCharacters from '../../hooks/useCharacters';
import type { Character } from '../../types/Character';

const Characters = () => {
  const { query, searchName, handelSearch } = useCharacters();
  const { results = [] } = query.data ?? {};

  return (
    <div className="min-h-screen cosmic-gradient">
      <header className="border-b border-border/50 bg-card/30 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col items-center gap-6">
            <h1 className="text-4xl md:text-5xl font-bold text-center">
              <span className="bg-gradient-to-r from-portal-green via-portal-cyan to-portal-green bg-clip-text  animate-portal-pulse">
                Rick & Morty
              </span>
              <span className="text-foreground"> Universe</span>
            </h1>
            <SearchBar value={searchName} onChange={handelSearch} />
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {query.isLoading && results.length === 0 && (<p>Not Found Character</p>)}
          {query.isLoading && results.length !==0 && <p>Loading...</p>}
          {query.isError && <p>Error loading characters</p>}
          {!query.isLoading && !query.isError &&
            results.map((char: Character) => (
              <CharacterCard key={char.id} character={char} />
            ))}
        </div>
      </main>
    </div>
  );
};

export default Characters;
