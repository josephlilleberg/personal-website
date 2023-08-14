import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { ToggleTheme } from './components/toggle'
import { KaggleIcon } from './components/kaggle'
import { TwitterIcon } from './components/twitter'
import { IEEEIcon } from './components/ieee'
import { LinkedInIcon } from './components/linkedin'

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
  }
}

export default config

