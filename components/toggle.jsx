import React, { useState, useEffect } from 'react';
import moonIcon from "../icons/moon.svg";
import sunIcon from "../icons/sun.svg";
import { useTheme } from 'next-themes'
import Image from 'next/image';

export const ToggleTheme = () => {
    const { theme, setTheme } = useTheme('light')

    const handleClick = (e) => {
      if (theme === 'light') {
        setTheme('dark')
      } else {
        setTheme('light')
      }
    };

    function DynamicImage () {
      if (theme === 'light') {
        return <Image src={sunIcon} alt="" />
      } else {
        return <Image src={moonIcon} alt="" />
      }
    }

    useEffect(() => {
      
    }, [theme, setTheme])
    

    return (
        <button
          className="font-semibold rounded-md flex justify-center items-center w-10 h-8"
          onClick={handleClick}
        >
          <DynamicImage />
        </button>
    )
}


