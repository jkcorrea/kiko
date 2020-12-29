import React, { FC, MouseEvent } from 'react'
import { compose, withProps } from 'recompose'
import styled, { withTheme } from 'styled-components'

const ButtonBase = styled.button<{
  disabled: boolean
  bgColor: string
  textColor: string
}>`
  -webkit-tap-highlight-color: transparent;
  box-shadow: ${({ disabled }) =>
    disabled ? '' : '0px 3px 3px -2px rgba(0,0,0,0.15)'};
  background: ${({ bgColor }) => bgColor};
  border-radius: 0.5em;
  border: 2px solid ${({ color }) => color};
  color: ${({ textColor }) => textColor};
  cursor: pointer;
  font-size: 0.8em;
  font-weight: 600;
  margin: 0 0.5em 0.5em 0;
  outline: none;
  padding: 0.8em 1.2em;
  transition: 0.2s transform, 0.2s box-shadow, 0.3s background linear,
    0.3s border linear;

  @media only screen and (min-width: 768px) {
    font-size: 0.9em;
  }

  &:active {
    box-shadow: none;
    color: ${({ bgColor }) => bgColor};
    transform: translateY(2px);
  }

  &:disabled {
    cursor: not-allowed;
  }
`

interface Props {
  color: string
  textColor: string
  bgColor: string
  disabled: boolean
  loading: boolean
  onClick: (e: MouseEvent) => void
}

const Button: FC<Props> = ({
  color = '#EFEFEF',
  bgColor = '#EFEFEF',
  textColor = '#2D2D2D',
  children,
  disabled,
  loading,
  onClick,
}) => (
  <ButtonBase
    bgColor={bgColor}
    color={color}
    disabled={disabled}
    onClick={!loading ? onClick : undefined}
    textColor={textColor}
  >
    {children}
  </ButtonBase>
)

export default compose(
  withTheme,
  withProps(
    ({ primary, theme }) =>
      primary && {
        color: theme.colors.blue,
        bgColor: theme.colors.blue,
        textColor: theme.colors.white,
      },
  ),
  withProps(
    ({ secondary, theme }) =>
      secondary && {
        color: theme.colors.blue,
        bgColor: theme.colors.blue,
        textColor: theme.colors.white,
      },
  ),
  withProps(
    ({ outline, color, theme }) =>
      outline && {
        bgColor: 'transparent',
        textColor:
          color === theme.colors.offWhite ? theme.colors.offBlack : color,
      },
  ),
  withProps(
    ({ disabled, theme }) =>
      disabled && {
        bgColor: theme.colors.lightGray,
        textColor: theme.colors.midGray,
        color: theme.colors.lightGray,
      },
  ),
)(Button)
