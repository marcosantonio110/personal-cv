import React, { ButtonHTMLAttributes } from 'react';
import { NextPage } from 'next';

import { RiDownloadLine } from 'react-icons/ri';

import { Container } from './styles';

interface ExtendButtonBase {
  loading?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: NextPage<ExtendButtonBase> = ({
  loading,
  onClick,
  children,
  ...rest
}) => {
  return (
    <Container {...rest} onClick={onClick}>
      <span className="text">{children}</span>
      <span className="share" />

      {loading ? (
        <div className="item loading">
          <svg viewBox="25 25 50 50">
            <circle cx="50" cy="50" r="20"></circle>
          </svg>
        </div>
      ) : (
        <span className="icon">
          <RiDownloadLine />
        </span>
      )}
    </Container>
  );
};

export default Button;
