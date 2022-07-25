import React from 'react'
import { useFetchCharacters } from '../hooks/useFetchCharacters'
import { CharacterCard } from './CharacterCard';

export const CharacterList = ({characters,loading,error}) => {

  
 

  return (
    <>
    <h1>Star Wars Characters</h1>
    
    <hr />
      <div className ='row rows-cols-1 row-cols-md-1 g-1'>
        {
          characters?.map((character)=>{
            return <CharacterCard 
                      key={ character?.name } 
                      { ...character }
                      /> 
        })
        }
      </div>
    </>
  )
}
