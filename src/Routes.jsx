import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./Home";
import NewVideo from "./components/Pages/NewVideo";
import Home from './components/Pages/Home';
import { useState, useEffect } from 'react';

import './App.css';

const AppRoutes = () => {
    const [categorias, setCategorias] = useState([
        {
          id: 1,
          titulo: 'BeatMaking',
          colorPrimario: '#008a55'
        },
        {
          id: 2,
          titulo: 'Mixing',
          colorPrimario: '#fd8ca8'
        },
        {
          id: 3,
          titulo: 'Mastering',
          colorPrimario: '#ce3535'
        },
        {
          id: 4,
          titulo: 'Theory',
          colorPrimario: '#c5bc39'
        }
      ]);
    
    
      const [dataCard, setDataCard] = useState([
        {
          id: 1,
          titulo: 'Creando Beats desde 0',
          categoria: 'BeatMaking',
          video: 'https://www.youtube.com/embed/ovj8LkQrILs?si=57DebZSbBdwmKQ7r',
          imagen: 'https://i.ytimg.com/vi/8KDSTRhARHA/maxresdefault.jpg',
          descripcion: 'Aprende a crear beats desde 0 con los mejores productores del mundo',
      },
      {
          id: 2,
          titulo: 'Mixing para principiantes',
          categoria: 'Mixing',
          video: 'https://www.youtube.com/embed/Bg4Ay9hbtRg?si=vSASo5yc_a3FGckg',
          imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqahsbESyPiv_r3CIWiVpldhVC-kLTJBNQDg&s',
          descripcion: 'Aprende a mezclar tus canciones como los profesionales',
      },
      {
          id: 3,
          titulo: 'Mastering para principiantes',
          categoria: 'Mastering',
          video: 'https://www.youtube.com/embed/F4PtM8FGF84?si=kuHKhWPFJzXkdXSm',
          imagen: 'https://i.ytimg.com/vi/F4PtM8FGF84/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA2uI56oA1c7pCL4AGGIeYxaPKceg',
          descripcion: 'Aprende a masterizar tus canciones como los profesionales',
      },

      {
          id: 5,
          titulo: 'How To Produce',
          categoria: 'BeatMaking',
          video: 'https://www.youtube.com/embed/QeTYkvzK17Q?si=PWDJmLCfu9MSVHLp',
          imagen: 'https://i.ytimg.com/vi/QeTYkvzK17Q/maxresdefault.jpg',
          descripcion: 'Learn how prolific hit-maker Tainy writes, records, and produces hit songs.',
      },
      {
          id: 6,
          titulo: 'PRODUCIENDO BEATS',
          categoria: 'BeatMaking',
          video: 'https://www.youtube.com/embed/IQLOrz32vyM?si=-Du_zVBtzPXlRF2E',
          imagen: 'https://i.ytimg.com/vi/IQLOrz32vyM/maxresdefault.jpg',
          descripcion: 'En este tutorial vemos cómo producir beats desde cero usando samples y loops gratuitos. Ideal para empezar a crear beats con muy buena calidad. O si ya sabes crear beats, para inspirarte a crear un beat o para ayudarte a completar un beat.',
      },
      {
          id: 7,
          titulo: 'PROCESO de MEZCLA ',
          categoria: 'Mixing',
          video: 'https://www.youtube.com/embed/lKX_DCCIZtE?si=49Gt3b5PVaKyqXtG',
          imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgZTJWCh6ymKYuHdy3bMStv2zajgt9foBMWg&s',
          descripcion: 'producción musical sonido mastering masterización mezcla procesos de voces',
      },
      {
          id: 9,
          titulo: 'Cómo MASTERIZAR ',
          categoria: 'Mastering',
          video: 'https://www.youtube.com/embed/KMb_rgv2bX4?si=ukOtNA7-9eQLKI7_',
          imagen: 'https://i.ytimg.com/vi/KMb_rgv2bX4/hqdefault.jpg',
          descripcion: 'Hoy vas a aprender a MASTERIZAR tus canciones a CALIDAD PROFESIONAL y conseguir un VOLUMEN ALTO sin NADA de Distorsión.',
      },
      {
          id: 10,
          titulo: 'The God Particle',
          categoria: 'Mastering',
          video: 'https://www.youtube.com/embed/IT0Gsovim00?si=vGb05QKC9XFwL17R',
          imagen: 'https://i.ytimg.com/vi/IT0Gsovim00/maxresdefault.jpg',
          descripcion: 'En este canal vas a encontrar los mejores tutoriales sobre como hacer beats de reggaeton, como mezclar tus canciones a nivel profesional, como grabar, editar y mezclar voces, sin necesidad de gastar miles de dolares en equipos carísimos.',
      },
      {
          id: 11,
          titulo: 'Teoria MUSICAL Facil', 
          categoria: 'Theory',
          video: 'https://www.youtube.com/embed/96vqCBFV2E0?si=caYSvU9QoKfdUCXR',
          imagen: 'https://i.ytimg.com/vi/96vqCBFV2E0/maxresdefault.jpg',
          descripcion: 'Aprende los fundamentos de la teoría musical en pocos minutos',
      },
      {
          id: 12,
          titulo: 'ACORDES Y ESCALAS',
          categoria: 'Theory',
          video: 'https://www.youtube.com/embed/BRBTCIK_9_g?si=Xft2VHT_KqPzG7s-',
          imagen: 'https://i.ytimg.com/vi/BRBTCIK_9_g/maxresdefault.jpg',
          descripcion: 'The Circle of Fifths is a map that reveals the internal structure of the music: How many sharp and flats each tone has, what key a score is in, what major, minor and diminished chords are on a scale, and much more. ',
      }

  ]);
    
    
      const handleSubmit= (nuevoCard) => {
        setDataCard([...dataCard, nuevoCard]);
      }
      
      const handleDeleteCard = (id) => {
        setDataCard(prevCards => prevCards.filter(card => card.id !== id));
      };

      const handleEditCard = (id, updatedData) => {
        setDataCard(prevCards => 
            prevCards.map(card => 
                card.id === id ? { ...card, ...updatedData } : card
            )
        );
    };

      return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home categorias={categorias}
                dataCard={dataCard} 
                onDeleteCard={handleDeleteCard}
                onEditCard={handleEditCard}

                />} />
                <Route path="/newvideo" element={<NewVideo onSubmit={handleSubmit} />} />
            </Routes>
        </BrowserRouter>
    );
};
    
    export default AppRoutes;