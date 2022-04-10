import React from 'react'

import { Config } from '@utils/Config'

import { Container } from './styles'

const Footer = () => {
  const date = new Date().getFullYear()
  return (
    <Container>
      © Copyright {date}
      {' - '}
      {Config.defaultTitle}. Criado com{' '}
      <span role="img" aria-label="Love">
        ♥
      </span>{' '}
      por <a href="https://baitasolucoes.com.br">Baita Soluções</a>.
    </Container>
  )
}

export { Footer }
