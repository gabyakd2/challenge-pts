import styled from "styled-components";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: white;
  padding: 10px;

  @media (max-width: 768px) { /* Cambiar la posición en pantallas más pequeñas (por ejemplo, 768px) */
    // flex-direction: column;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 10px;
  }
`;

export const LogoNav = styled.div`
  margin-left: 8px;
  img {
    width: 100px;
  }
`;

export const ButtonsContainerNav = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonNav = styled.p`
color: #12ADC4;
font-weight: bold;
padding: 10px 20px;
margin-left: 10px;
cursor: pointer;
`;