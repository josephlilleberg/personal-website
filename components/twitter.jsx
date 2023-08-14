import React, { useEffect } from 'react';
import twitterLightIcon from "../icons/twitter-light.svg";
import twitterDarkIcon from "../icons/twitter-dark.svg";
import { useTheme } from 'next-themes'
import Image from 'next/image';
import Link from 'next/link'

export const TwitterIcon = () => {
    const { theme, setTheme } = useTheme('light')

    function DynamicIcon () {
      if (theme === 'light') {
        return <Image src={twitterLightIcon} alt="" />
      } else {
        return <Image src={twitterDarkIcon} alt="" />
      }
    }

    useEffect(() => {
      
    }, [theme, setTheme])
    

    return (
      <div className='flex justify-start items-center w-10 h-8 pr-1'>
        <a href="https://twitter.com/LillebergDS" target="_blank">
          <DynamicIcon />
        </a>
      </div>
        
    )
}
  