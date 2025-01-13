import styled from 'styled-components';
import { RiGithubFill, RiLinkedinBoxFill } from 'react-icons/ri';
import logo from './logo.png';

const StyledFooter = styled.footer`
    background-color: #000000;
    padding: 20px;
    color: white;
    position: relative;
    bottom: 0;
    width: 100%;
`;

const FooterContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 20px;
        text-align: center;
    }
`;

const SocialLinks = styled.div`
    display: flex;
    gap: 20px;
    
    a {
        color: white;
        font-size: 24px;
        transition: color 0.3s ease;
        
        &:hover {
            color: #2A7AE4;
        }
    }
`;

const Footer = () => {
    return (
        <StyledFooter>
            <FooterContent>
                <img 
                    src={logo} 
                    alt="AluraFlix Logo" 
                    height="30"
                />
                <SocialLinks>
                    <a href="https://github.com/darwinovalle" target="_blank" rel="noopener noreferrer">
                        <RiGithubFill />
                    </a>
                    <a href="https://www.linkedin.com/in/darwin-ovalle/" target="_blank" rel="noopener noreferrer">
                        <RiLinkedinBoxFill />
                    </a>
                </SocialLinks>
                <p>© 2025 By DarwinOvalle .</p>
            </FooterContent>
        </StyledFooter>
    );
}

export default Footer;