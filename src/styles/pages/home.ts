import styled from 'styled-components';
import { darken, lighten } from 'polished';

import Button from '@material-ui/core/Button';

export const Container = styled.div`
  max-width: 1920px;
  margin: 0 auto;
`;

export const Section = styled.section`
  position: relative;
  /* z-index: -1; */
`;

export const SideLeft = styled.div`
  box-sizing: border-box;
  min-height: calc(100vh - 420px - 85px);
  padding: 0 50% 10vh 5%;
  align-items: center;

  .hello {
    display: flex;
    align-items: center;
    color: #050505;

    &::before {
      content: '';
      display: inline-block;
      width: 21px;
      height: 21px;
      margin-right: 5px;
      background-image: url('/static/assets/hello.png');
      background-repeat: no-repeat;
      background-size: contain;
      left: 0;
      top: 0;
    }
  }

  h1 {
    margin-top: 5rem;
    font-weight: 800;
    font-size: 6rem;
    color: #3b5998;

    span {
      display: block;
    }
  }

  .description {
    font-size: 1.8rem;
    max-width: 452px;
    line-height: 4rem;
    font-weight: 600;
    color: #050505;
    margin-top: 4rem;
    margin-bottom: 7rem;
  }

  @media (max-width: 1275px) {
    padding: 5vh 50% 5vh 5%;
  }

  @media (max-width: 1120px) {
    padding: 5vh 5vw;

    .hello {
      color: #fff;
    }

    h1 {
      color: #fff;
    }

    .description {
      color: #fff;
    }
  }
`;

export const Content = styled.div`
  /* z-index: -50; */
`;

export const SideRight = styled.div`
  background-image: url('/static/assets/background_header.jpg');
  position: absolute;
  z-index: -3;
  top: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  width: calc(50% - 45px);
  border-radius: 5px;
  background-size: cover;

  @media (max-width: 1399px) {
    right: 0;
    width: calc(50% - 45px);
    border-radius: 5px 0 0 5px;
  }

  @media (max-width: 1275px) {
    width: calc(55% - 45px);
  }

  @media (max-width: 1120px) {
    background-image: url('/static/assets/background_medium.png');
    width: 100%;
    border-radius: 0;
  }
`;
