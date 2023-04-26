import React from 'react'
import HeroItemOne from "components/HeroItem/HeroItemOne"
import HeroItemTwo from "components/HeroItem/HeroItemTwo"
import HeroItemThree from "components/HeroItem/HeroItemThree"
import HeroItemFour from "components/HeroItem/HeroItemFour"
import HeroItemFive from "components/HeroItem/HeroItemFive"
import { useState } from "react"
import { useEffect } from "react"

const Index = () => {
  const [selectedHeroIndex, setSelectedHeroIndex] = useState(0)

  const heroItems = [
    <HeroItemOne key={0} />,
    <HeroItemTwo key={1} />,
    <HeroItemThree key={2} />,
    <HeroItemFour key={3} />,
    <HeroItemFive key={4} />
  ]

  const handleHeroOptionChange = (event) => {
    setSelectedHeroIndex(parseInt(event.target.value))
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSelectedHeroIndex((prevIndex) => {
        if (prevIndex === heroItems.length - 1) {
          return 0
        } else {
          return prevIndex + 1
        }
      });
    }, 3000)

    return () => clearInterval(intervalId)

  }, [heroItems.length])
  return (
    <div className="bg-black_900 md:h-[330px] h-[344px] mb-[2px] md:ml-[0] ml-[44px] md:mt-[0] mt-[40px] pl-[16px] pt-[16px] relative md:w-[100%] w-[77%] transition-all duration-500">
      {heroItems[selectedHeroIndex]}
      <div className="absolute bottom-[3%] h-[14px] left-[40%] w-[110px] flex gap-2">
        {heroItems.map((_, index) => (
          <input
            key={index}
          id={index}
          type="radio"
          name="hero"
          value={index}
          class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
          checked={selectedHeroIndex === index}
          onClick={handleHeroOptionChange}
        />
        ))}
        {/* <input
          id="hero-option-1"
          type="radio"
          name="hero"
          value="0"
          class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
          checked={selectedHeroIndex === 0}
          onClick={handleHeroOptionChange}
        ></input>
        <input
          id="hero-option-2"
          type="radio"
          name="hero"
          value="1"
          class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
          checked={selectedHeroIndex === 1}
          onClick={handleHeroOptionChange}
        ></input>
        <input
          id="hero-option-2"
          type="radio"
          name="hero"
          value="2"
          class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
          checked={selectedHeroIndex === 2}
          onClick={handleHeroOptionChange}
        ></input>
        <input
          id="hero-option-2"
          type="radio"
          name="hero"
          value="3"
          class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
          checked={selectedHeroIndex === 3}
          onClick={handleHeroOptionChange}
        ></input>
        <input
          id="hero-option-2"
          type="radio"
          name="hero"
          value="4"
          class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
          checked={selectedHeroIndex === 4}
          onClick={handleHeroOptionChange}
        ></input> */}
      </div>
    </div>
  );
}

export default Index