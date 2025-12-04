import { useQuery } from '@tanstack/react-query';
import {  useState } from 'react';
import characterServices from '../api/characters';

export default function useCharacters(id?: number) {
  const [searchName, setSearchName] = useState('');
  
  const handelSearch = (name: string) => {
    setSearchName(name);
  };
  const query = useQuery({
    queryKey: ['Characters', id, searchName],
    queryFn: () => {
      if (id) return characterServices.getCharacterById(id);
      if (searchName) return characterServices.getCharactersByName(searchName);
      return characterServices.getAllCharacters();
    },
  });

  return { query, searchName, handelSearch };
}
