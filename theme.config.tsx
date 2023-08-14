import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { ToggleTheme } from './components/toggle'
import { KaggleIcon } from './components/kaggle'
import { TwitterIcon } from './components/twitter'
import { IEEEIcon } from './components/ieee'
import { LinkedInIcon } from './components/linkedin'
import { useConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  logo: <span>Joseph Lillleberg</span>,
  project: {
    link: 'https://github.com/josephlilleberg',
  },
  gitTimestamp: <></>,
  search: {
    component: <></>
  },
  navbar: {
    extraContent: 
    <div className='flex flex-row'>
      <ToggleTheme />
    </div>
  },
  primaryHue: 155,
  footer: {
    component: <></>
  },
  themeSwitch: {
    component: <div className='flex flex-row  items-center justify-center mt-4 '>
    <KaggleIcon />
    <TwitterIcon />      
    <LinkedInIcon />
    <IEEEIcon />
  </div>
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s'
      }
    }
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url =
      'https://josephlilleberg.com' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)
 
    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || ''} />
        <meta
          property="og:description"
          content={frontMatter.description || ''}
        />
      </>
    )
  }
}

export default config

