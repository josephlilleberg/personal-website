import React, { useEffect } from 'react';
import kaggleLightIcon from "../icons/kaggle-light.svg";
import kaggleDarkIcon from "../icons/kaggle-dark.svg";
import { useTheme } from 'next-themes'
import Image from 'next/image';
import Link from 'next/link'

export const KaggleIcon = () => {
    const { theme, setTheme } = useTheme('light')

    function DynamicIcon () {
      if (theme === 'light') {
        return <Image src={kaggleLightIcon} alt="" />
      } else {
        return <Image src={kaggleDarkIcon} alt="" />
      }
    }

    useEffect(() => {
      
    }, [theme, setTheme])
    

    return (
      <div className='flex justify-start items-center w-10 h-8'>
        <a href="https://www.kaggle.com/littleotter" target="_blank">
          <DynamicIcon />
        </a>
      </div>
        
    )
}
  