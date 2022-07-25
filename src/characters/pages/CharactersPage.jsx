import { CharacterList } from "../components/"

export const CharactersPage = ({characters,loading,error}) => {
  return (
    <CharacterList 
          characters={characters} 
          loading={loading}
          error={error}/>
  )
}
