import './NewVideo.modules.css';

import Navbar from '../../Navbar';
import { Container } from '@mui/material';
import FormVideo from './FormVideo';
import styled from 'styled-components';
import ChangeColor from './Background';
import Footer from '../../Footer';


const Linea = styled.div`
    width: 100%;
    height: 1px;
    background-color: #c2c2c2;
    margin-top: 30px;
    margin-bottom: 50px;
`

const ContainerNewVideo = styled.div`
    display: flex; 
    justify-content: center;
    align-items: center;
    margin-top: 150px;
    width: 100%;
    text-align: center;
    position: relative;
    z-index: 1;
    margin-bottom: 80px;
`;

const StyledContainer = styled(Container)`
    background-color: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(5px);
`;

const NewVideo = ({ onSubmit }) => {
    return (
        <ChangeColor>
            <Navbar />
            <ContainerNewVideo>
                <StyledContainer maxWidth="md" 
                    sx={{
                        border: 'solid 1px #000000',
                        padding: '80px',
                        borderRadius: '20px',
                        boxShadow: '10px 10px 0 0 rgba(0, 0, 0, 0.795)',
                    }}>
                    <h1 className="title">Agregar Nuevo Video</h1>
                    <p className="description">Completa el formulario para agregar un nuevo video</p>
                    <Linea />
                    <h1>Crear Tarjeta</h1>
                    <FormVideo onSubmit={onSubmit} />
                </StyledContainer>
            </ContainerNewVideo>
            <Footer />
        </ChangeColor>
    );
}

export default NewVideo;