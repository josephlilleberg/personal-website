import React, { useEffect } from 'react';
import linkedinLightIcon from "../icons/linkedin-light.svg";
import linkedinDarkIcon from "../icons/linkedin-dark.svg";
import { useTheme } from 'next-themes'
import Image from 'next/image';

export const LinkedInIcon = () => {
    const { theme, setTheme } = useTheme('light')

    function DynamicIcon () {
      if (theme === 'light') {
        return <Image src={linkedinLightIcon} alt="" />
      } else {
        return <Image src={linkedinDarkIcon} alt="" />
      }
    }

    useEffect(() => {
      
    }, [theme, setTheme])
    

    return (
      <div className='flex justify-start items-center w-10 h-8 pr-1'>
        <a href="https://www.linkedin.com/in/jjglilleberg/" target="_blank">
          <DynamicIcon />
        </a>
      </div>
        
    )
}
  