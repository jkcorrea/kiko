import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

const GridBase = styled.div<{ gap: string; template: string }>`
  display: grid;
  grid-column-gap: ${({ gap }) => `${gap}rem`};
  grid-row-gap: ${({ gap }) => `${gap}rem`};
  grid-template-columns: ${({ template }) => template};
`

interface Props {
  children: ReactNode
  template: string
  gap: string
}

const Grid: FC<Props> = ({ children = null, template, gap = '2' }) => (
  <GridBase gap={gap} template={template}>
    {children}
  </GridBase>
)

export default Grid
