import React, { ReactNode } from 'react'

import { Footer } from '@components/Footer'
import { MenuTop } from '@components/MenuTop'

type IMainProps = {
  children: ReactNode
}

const Main = ({ children }: IMainProps) => {
  return (
    <div>
      <MenuTop />
      {children}
      <Footer />
    </div>
  )
}

export { Main }
