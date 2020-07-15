import styled, { keyframes } from 'styled-components';
import { darken, lighten, transparentize } from 'polished';
import { fadeInLeft } from 'react-animations';

import Button from '@material-ui/core/Button';

interface PropsToggleMenu {
  activeMenu: boolean;
}

export const Container = styled.header`
  display: flex;
  align-items: center;
  height: 175px;
  justify-content: center;

  @media (max-width: 1120px) {
    height: 110px;
    z-index: 10;
    position: relative;
  }
`;

export const Content = styled.div<PropsToggleMenu>`
  position: ${(props) => (props.activeMenu ? 'fixed' : 'relative')};
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1400px;
  width: 100%;
  padding: 0 2rem;

  .ham {
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    transition: transform 400ms;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;

    @media (max-width: 1120px) {
      display: block;
      z-index: 2;
    }

    @media (min-width: 1120px) {
      display: none;
    }
  }

  .hamRotate.active {
    transform: rotate(45deg);
  }
  .hamRotate180.active {
    transform: rotate(180deg);
  }
  .line {
    fill: none;
    transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
    stroke: #050505;
    stroke-width: 5.5;
    stroke-linecap: round;
  }

  .ham7 .top {
    stroke-dasharray: 40 82;
  }
  .ham7 .middle {
    stroke-dasharray: 40 111;
  }
  .ham7 .bottom {
    stroke-dasharray: 40 161;
  }
  .ham7.active .top {
    stroke-dasharray: 17 82;
    stroke-dashoffset: -62px;
  }
  .ham7.active .middle {
    stroke-dashoffset: 23px;
  }
  .ham7.active .bottom {
    stroke-dashoffset: -83px;
  }
`;

export const ToggleMenu = styled.svg<PropsToggleMenu>`
  .line {
    stroke: ${(props) => (props.activeMenu ? '#fff' : '#050505')};
  }
`;

export const NavButton = styled(Button)``;

export const Logo = styled.div<PropsToggleMenu>`
  width: 265px;
  height: 65px;
  margin-right: auto;
  cursor: pointer;

  &::before {
    content: '';
    display: inline-block;
    background: url('/static/assets/logo.png');
    width: 265px;
    height: 65px;
    background-repeat: no-repeat;
    background-size: contain;
    left: 0;
    top: 0;
  }

  @media (max-width: 1400px) {
    html {
      font-size: 58.5%;
    }
  }

  @media (max-width: 1275px) {
    display: flex;
    align-items: center;
    display: flex;
    padding-left: 20px;
    margin-left: 10px;
    height: 35px;

    &::before {
      width: 200px;
      height: 45px;
    }
  }

  @media (max-width: 1120px) {
    z-index: 2;
    border-left: 1px solid;
    border-color: ${(props) => (props.activeMenu ? '#ffffff47' : '#909090')};

    &::before {
      content: '';
      display: inline-block;
      background: ${(props) =>
        props.activeMenu
          ? "url('/static/assets/white-logo.png')"
          : "url('/static/assets/logo.png')"};
      width: 265px;
      height: 65px;
      background-repeat: no-repeat;
      background-size: contain;
      left: 0;
      top: 0;
    }

    display: flex;
    align-items: center;
    display: flex;
    padding-left: 20px;
    margin-left: 10px;
    height: 35px;

    &::before {
      width: 200px;
      height: 45px;
    }
  }
`;

const fadeInLeftAnimation = keyframes`${fadeInLeft}`;

export const MenuContainer = styled.div<PropsToggleMenu>`
  display: flex;
  align-items: center;
  animation: 300ms ${fadeInLeftAnimation};

  @media (max-width: 1120px) {
    z-index: 1;
    flex-direction: column;
    bottom: 0;
    left: 0;
    top: -38px;
  }

  @media (max-width: 600px) {
    position: fixed;
    background: ${(props) =>
      props.activeMenu ? transparentize(0.05, '#3b5998') : 'transparent'};
    align-items: start;
  }

  @media (max-width: 450px) {
    width: ${(props) => (props.activeMenu ? '100%' : 'auto')};
  }
`;

export const Nav = styled.div<PropsToggleMenu>`
  display: flex;

  @media (max-width: 1120px) {
    display: ${(props) => (props.activeMenu ? 'flex' : 'none')};
    z-index: 1;
    padding: 150px 19px 0;
    top: 0;
    height: 100vh;
    width: 400px;
    flex-direction: column;
    background: ${transparentize(0.05, '#3b5998')};
    left: ${(props) => (props.activeMenu ? '0' : '-50%')};
    position: fixed;
    animation: 300ms ${fadeInLeftAnimation};
  }

  @media (max-width: 600px) {
    height: auto;
    position: unset;
    background: transparent;
  }

  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const NavText = styled.span`
  font-size: 1.6rem;
  font-weight: 800;
  color: #050505;
  text-transform: uppercase;
  margin: 0 2rem;

  &:hover {
    color: ${lighten(0.2, '#050505')};
    cursor: pointer;
  }

  transition: color 150ms;

  @media (max-width: 1120px) {
    font-size: 2rem;
    color: #fff;
    padding-bottom: 4rem;
  }
`;

export const CallButton = styled(Button)<PropsToggleMenu>`
  && {
    width: 235px;
    height: 60px;
    background-color: #3b5998;
    border-radius: 0;
    outline: 0;
    color: #fff;
    padding: 7px 14px;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    margin-left: 2rem;

    .MuiButton-label {
      font-size: 1.6rem;
      font-weight: 800;
    }

    &:hover {
      background-color: ${darken(0.07, '#3b5998')};
      color: ${darken(0.07, '#fff')};
    }

    transition: background-color 150ms;

    @media (max-width: 1275px) {
      width: 205px;
    }

    @media (max-width: 600px) {
      display: ${(props) => (props.activeMenu ? 'flex' : 'none')};
      left: ${(props) => (props.activeMenu ? '0' : '-50%')};
      animation: 300ms ${fadeInLeftAnimation};
      border: 1px solid #fff;
      color: #ffffff;
      background-color: transparent;

      &:hover {
        border-color: ${darken(0.07, '#fff')};
        background-color: transparent;
        color: ${darken(0.07, '#fff')};
      }

      margin-left: 35px;
      margin-top: 10px;
      z-index: 1;
    }
  }
`;
