import styled from "styled-components"

import VideoCard from "./Card";
import Grid from '@mui/material/Grid2';


const CategoriaContainer = styled.div`
    display: inline-block;
    justify-content: center;
    align-items: center;
    height: 55vh;
    width: 100%;
    margin: 0;
`

const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;

    `
const CardContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    /* background-color: white; */
    width: 100%;
    height: 300px;
    margin-top: 10px;

`

const Linea = styled.div`
    width: 50%;
    height: 1px;
    background-color: #ffffff;
`

const CategoriaTitle = styled.h1`
    font-size: 30px;
    font-weight: bold;
    line-height: .5;
    text-align: center;
    padding: 0;
    margin: 50px;
    color: #fff;
`

const LineLarga = styled.div`
    width: 100%;
    height: 1px;
    background-color: #ffffff;
    margin-top: 60px;
`


const SeccionCategoria = (props) => {

    const {titulo, colorPrimario} = props;

    const {dataCard} = props;
    const {onDeleteCard} = props;
    const {onEditCard} = props;

    return(
        <CategoriaContainer style={{backgroundColor: colorPrimario}}>
                <TitleContainer>


                <Linea></Linea>
                <CategoriaTitle>{titulo}</CategoriaTitle>
                <Linea></Linea>
                </TitleContainer>
                <CardContainer>
                    <Grid container spacing={7}>
                        {
                            dataCard.map((card, id) => (
                                <VideoCard dataCard={card} 
                                key={id} 
                                onDelete={() => onDeleteCard(card.id)}
                                onEdit={onEditCard}
                                
                                ></VideoCard>
                            ))
                        }
                    </Grid>
                </CardContainer>
                <LineLarga></LineLarga>

        </CategoriaContainer>        

        
    )
}

export default SeccionCategoria;