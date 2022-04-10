import React from 'react'

import { NextSeo } from 'next-seo'
import Head from 'next/head'

import { Config } from '@utils/Config'

type IMetaProps = {
  title?: string
  description?: string
  image?: string
  url?: string
}

const SEO = ({ title, description, image, url }: IMetaProps) => (
  <>
    <Head>
      <meta charSet={Config.locale} key="charset" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1"
        key="viewport"
      />
    </Head>
    <NextSeo
      title={title || 'Desconto Mania'}
      description={description || 'Mania de comprar com descontos'}
      canonical={Config.canonical}
      openGraph={{
        title: title || 'Desconto Mania',
        description: description || 'Mania de comprar com descontos',
        url: url || Config.canonical,
        locale: Config.locale,
        site_name: Config.defaultTitle,
        images: [
          {
            url: image || '/android-chrome-512x512.png',
            alt: 'Imagem Meu Desconto Mania'
          }
        ]
      }}
      twitter={{
        handle: '@meudescontomania',
        site: '@site',
        cardType: 'summary_large_image'
      }}
    />
  </>
)

export { SEO }
