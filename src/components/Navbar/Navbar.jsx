// eslint-disable-next-line no-unused-vars
import React from 'react';
import { ButtonNav, ButtonsContainerNav, LogoNav, NavbarContainer } from '../../styledComponents/StyledComponents';
import logonav from '../../assets/logonav.png';

function Navbar() {
  return (
    <NavbarContainer>
      <LogoNav>
        <img src={logonav} alt="Logo web" />
      </LogoNav>
      <ButtonsContainerNav>
        <ButtonNav>
          Docs
        </ButtonNav>
        <ButtonNav>
          About
        </ButtonNav>
        <ButtonNav>
          Help
        </ButtonNav>
      </ButtonsContainerNav>
    </NavbarContainer>
  )
}

export default Navbar