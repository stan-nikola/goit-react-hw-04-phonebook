import styled from '@emotion/styled';
// import { Button } from 'components/Button';
import { Button } from 'components/Button/Button';

export const Title = styled.h1`
  font-size: ${p => p.theme.fontSizes.xl};
  text-align: center;
  margin-bottom: ${p => p.theme.space[4]}px;
`;
export const SubTitle = styled.h2`
  font-size: ${p => p.theme.fontSizes.l};
  text-align: center;
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const Message = styled.h3`
  margin: 0 auto;
  font-size: ${p => p.theme.fontSizes.m};
  width: 312px;
  text-align: center;
`;

export const ModalBtn = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: inherit;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  margin: 0 auto;
  padding: ${p => p.theme.space[3]}px;
  height: 30px;
  border: ${p => p.theme.borders.light};
  border-color: ${p => p.theme.colors.mainBorder};
  box-shadow: ${p => p.theme.shadows.items};
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.btn};
  fill: currentColor;
  transition: fill 250ms linear, background-color 250ms linear;
  svg {
    width: 24px;
    height: 24px;
    margin-right: ${p => p.theme.space[2]}px;
  }
  &:hover,
  &:focus {
    fill: green;
    background-color: ${p => p.theme.colors.btnAccent};
  }
`;
