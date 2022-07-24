import React from 'react'
import { useFetchCharacters } from '../hooks/useFetchCharacters'

export const CharacterList = () => {

  const {characters,loading,error} = useFetchCharacters('https://swapi.dev/api/people/');
  
  console.log(characters);

  return (
      <ul>
        {characters?.map((character)=>{
            return <li key={character?.name}>{character?.name}</li>
        })}
      </ul>
  )
}
