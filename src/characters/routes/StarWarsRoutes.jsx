
import { Route, Routes } from 'react-router-dom'
import { Navbar } from '../../ui/components/Navbar'
import { CharacterPage,CharactersPage } from '../pages'

export const StarWarsRoutes = () => {
  return (
    <>
        <Navbar />

        <div className='container'>
            <Routes>
                 
                <Route path='/character' element={ <CharacterPage/> }/>
                <Route path="/characters" element={ <CharactersPage /> } />  
                    
            </Routes>
        </div>

       
    </>
  )
}
