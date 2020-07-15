import styled, { keyframes } from 'styled-components';
import { darken, lighten } from 'polished';
import { fadeOut } from 'react-animations';

import Button from '@material-ui/core/Button';

export const Container = styled(Button)`
  && {
    width: 260px;
    height: 60px;
    background-color: #3b5998;
    border-radius: 0;
    outline: 0;
    color: #fff;
    padding: 7px 14px;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);

    .MuiButton-label {
      font-size: 1.6rem;
      font-weight: 800;
    }

    &:hover {
      background-color: ${darken(0.05, '#3b5998')};
      color: ${lighten(0.07, '#fff')};
    }

    transition: background-color 150ms;

    .text {
      position: relative;
      right: 4px;
    }

    .share {
      position: relative;
      left: 15px;
      height: 60px;
      width: 1px;
      background: ${darken(0.1, '#3b5998')};
      margin: 0 10px;

      &:hover {
        ${darken(0.2, '#3b5998')}
      }
    }

    .icon {
      position: relative;
      top: 4px;
      left: 29px;

      svg {
        width: 20px;
        height: 20px;
      }
    }

    .loading {
      svg {
        position: relative;
        top: 4px;
        left: 25px;
        width: 30px;
        transform-origin: center;
        animation: rotate 2s linear infinite;
      }

      circle {
        fill: none;
        stroke: #fff;
        stroke-width: 2;
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
        stroke-linecap: round;
        animation: dash 1.5s ease-in-out infinite;
      }

      @keyframes rotate {
        100% {
          transform: rotate(360deg);
        }
      }

      @keyframes dash {
        0% {
          stroke-dasharray: 1, 200;
          stroke-dashoffset: 0;
        }
        50% {
          stroke-dasharray: 90, 200;
          stroke-dashoffset: -35px;
        }
        100% {
          stroke-dashoffset: -125px;
        }
      }
    }
  }
`;
