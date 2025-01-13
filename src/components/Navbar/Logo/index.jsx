import styled from "styled-components";
import logo from './logo.png';

const ImgLogo = styled.img`
    width: 220px;
    height: 70px;
`

const ImageButtonLogo = styled.button`
    background-color: transparent;
    border: none;
    /* cursor: pointer; */
    padding: 0;
    margin: 0;
`

const Logo = () => {
    return (
        <ImageButtonLogo href="/">
        <ImgLogo src={logo} alt="Logo" href='/'/> 
        </ImageButtonLogo>
    );
    }

export default Logo;