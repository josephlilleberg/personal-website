import React, { useEffect } from 'react';
import ieeeLightIcon from "../icons/ieee-light.svg";
import ieeeDarkIcon from "../icons/ieee-dark.svg";
import { useTheme } from 'next-themes'
import Image from 'next/image';
import Link from 'next/link'

export const IEEEIcon = () => {
    const { theme, setTheme } = useTheme('light')

    function DynamicIcon () {
      if (theme === 'light') {
        return <Image src={ieeeLightIcon} alt="" />
      } else {
        return <Image src={ieeeDarkIcon} alt="" />
      }
    }

    useEffect(() => {
      
    }, [theme, setTheme])
    

    return (
      <div className='flex justify-start items-center w-10 h-8 pl-1 pt-3'>
        <a href="https://ieeexplore.ieee.org/document/7259377" target="_blank">
          <DynamicIcon />
        </a>
      </div>
        
    )
}
  