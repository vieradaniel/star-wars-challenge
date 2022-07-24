import { Route, Routes } from "react-router-dom";

import { LoginPage } from "../auth/pages/LoginPage";
import { CharactersRoutes } from "../characters/routes";


export const AppRouter = () => {
  return (
    <>

        <Routes>
            
            <Route path ='login' element = { <LoginPage/> } />

            <Route path ='/*' element = { <CharactersRoutes /> } />
              
        </Routes>

    </>
  );
};
