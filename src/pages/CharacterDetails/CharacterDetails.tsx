import { useNavigate, useParams } from 'react-router-dom';
import useCharacters from '../../hooks/useCharacters';
import type { Character } from '../../types/Character';
import useEpisode from '../../hooks/useEpisode';
import type { Episode } from '../../types/Episode';
import { ArrowLeft } from 'lucide-react';

const CharacterDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { query } = useCharacters(id ? Number(id) : undefined);
  const character: Character = query.data;

  const episodeUrls = character?.episode ?? [];

  const { query: episodeQuery } = useEpisode(episodeUrls);
  const episodesData = Array.isArray(episodeQuery.data) ? episodeQuery.data : [episodeQuery.data];

  console.log(episodeQuery.isLoading);

  if (query.isLoading) return <p className="text-center py-20">Loading...</p>;
  if (query.isError)
    return <p className="text-center py-20">Error loading character</p>;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="container mx-auto px-4 py-6">
        <button
          onClick={() => navigate('/')}
          className="inline-flex  text-yellow-300  items-center gap-2 px-4 py-2 border border-portal-green/50 rounded-lg hover:bg-portal-green/10 transition"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Characters
        </button>
      </div>

      <div className="max-w-5xl mx-auto bg-card/40 backdrop-blur-xl rounded-2xl p-10 shadow-2xl border border-white/10">
        <div className="flex flex-col md:flex-row gap-10">
          <img
            src={character.image}
            alt={character.name}
            className="w-full md:w-64 rounded-2xl shadow-lg ring-2 ring-portal-green/30"
          />
          <div className="flex-1 space-y-4">
            <h1 className="text-4xl font-black text-white drop-shadow">
              {character.name}
            </h1>

            <div className="space-y-2 text-lg">
              <p>
                <span className="font-semibold text-portal-green">Status:</span>{' '}
                {character.status}
              </p>
              <p>
                <span className="font-semibold text-portal-green">
                  Species:
                </span>{' '}
                {character.species}
              </p>
              <p>
                <span className="font-semibold text-portal-green">Gender:</span>{' '}
                {character.gender}
              </p>
              <p>
                <span className="font-semibold text-portal-green">
                  Location:
                </span>{' '}
                {character.location?.name}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-white flex items-center gap-2">
            Episodes
            <span className="text-portal-green font-semibold">
              ({character.episode.length})
            </span>
          </h2>
          <p className="text-3xl text-red-500">{episodeQuery.isLoading}</p>
          {episodeQuery.isLoading ? (
            <div className="text-center text-2xl text-white py-10">
              <p>Loading Episodes...</p>
            </div>
          ) : episodeQuery.isError ? (
            <div className="text-center text-red-500 py-10">
              <p>Error loading episodes</p>
            </div>
          ) : episodesData.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {episodesData.map((episode: Episode) => (
                <div
                  key={episode.id}
                  className="p-6 rounded-xl border border-white/10 bg-card/30 backdrop-blur-lg 
          hover:border-portal-green/60 hover:shadow-xl hover:shadow-portal-green/20 
          transition-all duration-300"
                >
                  <div className="space-y-3">
                    <div className="font-mono text-xs text-portal-green/80 tracking-widest">
                      {episode.episode}
                    </div>

                    <h3 className="font-bold text-lg text-white line-clamp-2 leading-snug">
                      {episode.name}
                    </h3>

                    <p className="text-sm text-muted-foreground">
                      {episode.air_date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-white py-10">No episodes found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CharacterDetails;
