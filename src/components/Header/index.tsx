import React, { useState, useCallback } from 'react';
import { NextPage } from 'next';
import Link from 'next/link';

import Button from '@material-ui/core/Button';

import { BsArrowLeft } from 'react-icons/bs';

import {
  Container,
  Content,
  ToggleMenu,
  NavButton,
  Logo,
  MenuContainer,
  Nav,
  NavText,
  CallButton,
} from './styles';

const Header: NextPage = () => {
  const [activeMenu, setActiveMenu] = useState(false);

  const handleChangeMenu = useCallback(() => {
    setActiveMenu((state) => !state);
  }, []);

  return (
    <Container>
      <Content activeMenu={activeMenu}>
        <Link href="">
          <>
            {/* <NavButton> */}
            <ToggleMenu
              activeMenu={activeMenu}
              className={`ham hamRotate ham7 ${activeMenu ? 'active' : ''}`}
              viewBox="0 0 100 100"
              width="80"
              onClick={handleChangeMenu}
            >
              <path
                className="line top"
                d="m 70,33 h -40 c 0,0 -6,1.368796 -6,8.5 0,7.131204 6,8.5013 6,8.5013 l 20,-0.0013"
              />
              <path className="line middle" d="m 70,50 h -40" />
              <path
                className="line bottom"
                d="m 69.575405,67.073826 h -40 c -5.592752,0 -6.873604,-9.348582 1.371031,-9.348582 8.244634,0 19.053564,21.797129 19.053564,12.274756 l 0,-40"
              />
            </ToggleMenu>
            {/* </NavButton> */}

            <Logo activeMenu={activeMenu} />
          </>
        </Link>

        <MenuContainer activeMenu={activeMenu}>
          <Nav activeMenu={activeMenu}>
            <Link href="/">
              <NavText>About me</NavText>
            </Link>
            <Link href="/">
              <NavText>My bio</NavText>
            </Link>
            <Link href="/">
              <NavText>Experience</NavText>
            </Link>
            <Link href="/">
              <NavText>Skills</NavText>
            </Link>
            <Link href="/">
              <NavText>Contact</NavText>
            </Link>
            <Link href="/">
              <NavText>Blog</NavText>
            </Link>
          </Nav>
          <Link href="/">
            <CallButton activeMenu={activeMenu}>Call me right now</CallButton>
          </Link>
        </MenuContainer>
      </Content>
    </Container>
  );
};

export default Header;
