
import { Route, Routes } from 'react-router-dom'
import { Navbar } from '../../ui/components/Navbar'
import { CharacterPage,CharactersPage } from '../pages'

export const CharactersRoutes = () => {
  return (
    <>
        <Navbar />

        <div className='container'>
            <Routes>
                 
                <Route path='/character' element={ <CharacterPage/> }/>
                <Route path="/" element={ <CharactersPage /> } /> 
                  
                    
            </Routes>
        </div>

       
    </>
  )
}
