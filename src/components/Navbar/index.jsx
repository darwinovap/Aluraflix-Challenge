import styled from "styled-components";
import Logo from "./Logo";
import Grid from '@mui/material/Grid2';
import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from "react-router-dom";


const NavBar = styled.nav`
    background-color: #000000;
    color: white;
    padding: 10px;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
`;

const themeButton = createTheme({
    palette: {
      primary: {
        main: '#dddddd'
      },
      secondary: {
        main: '#ba3c31',
      },
    },
  });



  const Navbar = () => {
    return (
        <NavBar>
            <Grid container spacing={2} 
                    sx={{ justifyContent: 'space-evenly',
                    alignItems: 'center',
                 }}>
                <Grid>
                    <Logo />
                </Grid>
                <Grid>
                    <ThemeProvider theme={themeButton}>
                        <Grid container spacing={2}>
                            <Button 
                                variant="outlined" 
                                color="primary" 
                                component={Link} 
                                to="/"
                            >
                                Home
                            </Button>
                            <Button 
                                variant="outlined" 
                                color="secondary" 
                                component={Link}
                                to="/newvideo"
                                sx={{ color: '#ba3c31' }}
                            >
                                New Video
                            </Button>
                        </Grid>
                    </ThemeProvider>
                </Grid>
            </Grid>
        </NavBar>
    );
}

export default Navbar;