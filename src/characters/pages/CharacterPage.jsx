import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { CharacterDetail } from "../components/CharacterDetail";


export const CharacterPage = ({characters,loading,error}) => {
  
  const [currentCharacter, setCurrentCharacter] = useState('')
  const {name} = useParams();

  useEffect(() => {
    if(characters){
      setCurrentCharacter(characters.find(character => character.name === name));
    } 
  }, [characters])
  
  
  

  

  

  return (
    <>
    {
      currentCharacter
      ?
      <CharacterDetail currentCharacter={currentCharacter}/>     
      :
      'loading or not found'
      
    }
    </>
  )
}
