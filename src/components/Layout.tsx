import styled from 'styled-components';

type LayoutProps = {
  gap: number;
};

export const Row = styled.div<LayoutProps> `
  display: flex;
  flex-direction: row;
  border: 2px solid #0a0710;
  background: #130f1e;
  position: relative;
  cursor: pointer;
  color: #fff;
  gap: ${(props) => props.gap}px;
`;

export const Column = styled.div<LayoutProps> `
  display: flex;
  flex-direction: column;
  border: 2px solid #0a0710;
  background: #130f1e;
  position: relative;
  cursor: pointer;
  color: #fff;
  gap: ${(props) => props.gap}px;
`;
