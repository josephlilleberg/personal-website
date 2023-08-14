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
    const { asPath } = useRouter();

    if (['/', '/docs'].includes(asPath)) {
      return { titleTemplate: 'Joseph Lilleberg' };
    }

    return { titleTemplate: `%s | Joseph Lilleberg` };
  },
  head: () => {
    const { asPath, pathname } = useRouter();
    const { frontMatter } = useConfig();

    const ogConfig = {
      title: 'Joseph Lillleberg',
      description: 'Joseph Lilleberg\'s Personal Website',
      author: {
        twitter: 'LillebergDS',
      },
    };
    const title = String(frontMatter.title || ogConfig.title);
    const description = String(frontMatter.description || ogConfig.description);
    const note =
      (frontMatter.date as string | undefined) ?? pathname === '/'
        ? 'Joseph Lilleberg'
        : pathname;
    const canonical = new URL(asPath, 'https://josephlilleberg.com').toString();


    return (
      <>
        <meta property="og:url" content={canonical} />
        <link rel="canonical" href={canonical} />

        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta name="twitter:site" content={`@${ogConfig.author.twitter}`} />
        <meta name="twitter:creator" content={`@${ogConfig.author.twitter}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta name="apple-mobile-web-app-title" content={title} />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </>
    );
  },
}

export default config

