import styled from '@emotion/styled';

export const Backdrop = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  backdrop-filter: blur(3px);
`;

export const ModalWindow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 386px;
  max-width: 360px;
  padding: ${p => p.theme.space[3]}px;
  background-color: #ffe4c4;
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: ${p => p.theme.shadows.items};
`;
