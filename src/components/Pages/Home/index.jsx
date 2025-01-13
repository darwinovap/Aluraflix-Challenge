import React, { useState } from 'react';
import Banner from '../../Banner';
import SquareInfo from '../../SquareInfo';
import SeccionCategoria from '../../Categoria';
import Navbar from '../../Navbar';
import { Route } from 'react-router-dom';
import NewVideo from '../NewVideo';
import Footer from '../../Footer';


const Home = ({ categorias, dataCard, onDeleteCard, onEditCard }) => {
  return (
    <>
      <Navbar />
      <Banner />
      <SquareInfo />
      {categorias.map((categoria) => (
        <SeccionCategoria 
          key={categoria.id}
          titulo={categoria.titulo}
          colorPrimario={categoria.colorPrimario}
          dataCard={dataCard.filter(card => card.categoria === categoria.titulo)}
          onDeleteCard={onDeleteCard}
          onEditCard={onEditCard}
        />
      ))}

      <Footer />
    </>
  );
};

export default Home;