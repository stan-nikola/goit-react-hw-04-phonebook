import styled from '@emotion/styled';
import { Form, Field } from 'formik';
import MaskedInput from 'react-text-mask';
import { FiAlertTriangle } from 'react-icons/fi';

export const PbForm = styled(Form)``;
export const ModalTitle = styled.h3`
  text-align: center;
  font-size: ${p => p.theme.fontSizes.ml};
  margin: ${p => p.theme.space[4]}px 0;
`;
export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const LabelName = styled.span`
  font-weight: ${p => p.theme.fontWeights.bold};
  margin-bottom: ${p => p.theme.space[2]}px;
`;
export const InputField = styled(Field)`
  height: 28px;
  min-width: 176px;
  border-radius: ${p => p.theme.radii.normal};
  border: ${p => p.theme.borders.light};
  border-color: ${p => p.theme.colors.mainBorder};
  padding-left: ${p => p.theme.space[2]}px;
`;
export const InputMaskField = styled(MaskedInput)`
  height: 28px;
  min-width: 176px;
  border-radius: ${p => p.theme.radii.normal};
  border: ${p => p.theme.borders.light};
  border-color: ${p => p.theme.colors.mainBorder};
  padding-left: ${p => p.theme.space[2]}px;
`;
export const ErrorMessageField = styled.div`
  position: absolute;
  top: 69px;
  right: 146px;
  transform: translateX(50%);
  width: 282px;
  z-index: 10;
  font-style: italic;
  font-size: ${p => p.theme.fontSizes.s};
  text-align: center;
  border: ${p => p.theme.borders.light};
  border-color: ${p => p.theme.colors.secondaryBorder};
  padding: ${p => p.theme.space[1]}px;
  background-color: ${p => p.theme.colors.notification};
  border-radius: ${p => p.theme.radii.normal};
`;
export const SubmitBtn = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: inherit;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  margin: ${p => p.theme.space[5]}px auto 0;
  padding: ${p => p.theme.space[3]}px;
  height: 30px;
  border: ${p => p.theme.borders.light};
  border-color: ${p => p.theme.colors.mainBorder};

  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.btn};
  fill: currentColor;
  transition: fill 250ms linear, background-color 250ms linear,
    box-shadow 250ms linear;
  svg {
    width: 24px;
    height: 24px;
    margin-right: ${p => p.theme.space[2]}px;
  }
  &:hover,
  &:focus {
    fill: green;
    background-color: ${p => p.theme.colors.btnAccent};
    box-shadow: ${p => p.theme.shadows.items};
  }
`;

export const CloseModalBtn = styled.button`
  position: absolute;
  top: -17px;
  right: -17px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  margin: 0;
  padding: 0;
  width: 36px;
  height: 36px;
  background-color: #ed7676;
  border-radius: ${p => p.theme.radii.round};
  transition: color 250ms linear, box-shadow 250ms linear;
  svg {
    fill: currentColor;
    width: 26px;
    height: 26px;
  }
  &:hover,
  &:focus {
    color: #fff;
    box-shadow: ${p => p.theme.shadows.items};
  }
`;
export const ErrorIcon = styled(FiAlertTriangle)`
  position: absolute;
  top: -11px;
  left: -11px;

  width: 20px;
  height: 20px;
  fill: yellow;
  border: none;
  color: ${p => p.theme.colors.secondaryBorder};
`;
