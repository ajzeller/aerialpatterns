import React from 'react'
import styled from 'styled-components'

export const ContainerFullWidth = styled.div`
  width: 100%;
`

export const ContainerBodyWidth = styled.div`
  max-width: ${props => props.theme.theme.contentWidths.body};
  margin: 0 auto;
`

export const ContainerMain = styled(ContainerBodyWidth)`
  padding: 24px;
`