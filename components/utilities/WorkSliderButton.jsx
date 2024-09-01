"use client";
import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
const WorkSliderButton = ({ containerStyles, buttonStyles, iconStyles }) => {
  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button className={buttonStyles}>
        <PiCaretLeftBold className={iconStyles} onClick={()=> swiper.slidePrev()}/>
      </button>
      <button className={buttonStyles}>
        <PiCaretRightBold className={iconStyles} onClick={()=> swiper.slideNext()}/>
      </button>
    </div>
  );
};

export default WorkSliderButton;
