import React from 'react';
import styled from 'styled-components';
import { Value } from './GameState';

const StyledSquare = styled.button`
  width: 50px;
  height: 50px;
  border: 2px solid #0a0710;
  background: #fff;
  padding: 0;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
`;

export type SquareProps = {
  value: Value;
  onClick: () => void;
};
export function Square(props: SquareProps) {
  return (
    <StyledSquare onClick={props.onClick}>
      {props.value}
    </StyledSquare>
  );
}
