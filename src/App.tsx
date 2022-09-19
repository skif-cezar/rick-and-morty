import React from 'react';
import {Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/HomePage/HomePage";
import {CharacterDetailsPage} from "./pages/CharacterDetailsPage/CharacterDetailsPage";
import { Header } from './components/Header/Header';

const App = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route path={''} element={<HomePage />} />
        <Route path={'/character/:id'} element={<CharacterDetailsPage />} />
        <Route path={'*'} element={<h1>Страница не найдена!</h1>} />
      </Routes>
    
    </div>
  );
}

export default App;
