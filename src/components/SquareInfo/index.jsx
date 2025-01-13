import * as React from 'react';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import styled from 'styled-components';



const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 40px;
  /* border: solid 1px black; */
`;

const TextBox = styled.p`
    font-size: 30px;
    font-weight: bold;
    line-height: .5;
    text-align: center;
    padding: 0;

`

const Div = styled.div`
    display: block;
    width: 100%;
`

const SquareInfo = () => {
  return (
    <Container>

          <Div>

            <TextBox>
            Bienvenido a la comunidad de Productores Synthasya.
            </TextBox>
            <TextBox>
            Comparte, Aprende y Disfruta...
            </TextBox>  

          </Div>
    </Container>
  );
}

export default SquareInfo;