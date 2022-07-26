
import { Route, Routes } from 'react-router-dom'
import { Navbar } from '../../ui/components/Navbar'
import { useFetchCharacters } from '../hooks/useFetchCharacters';
import { CharacterPage,CharactersPage } from '../pages'

export const CharactersRoutes = () => {
  const {characters,loading,error} = useFetchCharacters('https://swapi.dev/api/people/');
  
  return (
    <>
        <Navbar />

        <div className='container'>
            <Routes>
                 
                <Route  path='/character/:name' 
                        element={ <CharacterPage 
                                        characters={characters} 
                                        loading={loading}
                                        error={error}
                                  /> 
                                } 
                />

                <Route path="/" 
                       element={ <CharactersPage 
                                      characters={characters} 
                                      loading={loading}
                                      error={error}/> 
                                } 
                /> 
                  
                    
            </Routes>
        </div>

       
    </>
  )
}
