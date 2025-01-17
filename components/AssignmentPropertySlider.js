"use client";
import React, { useEffect, useRef } from "react";
//ICONS
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import CondoCard from "./PreconPropertyCard";
import useDeviceView from "@/helpers/useDeviceView";
import AssignmentCard from "./AssignmentCard";

const AssignmentPropertySlider = ({ numberOfCards = 4, data }) => {
  const scrollRef = useRef(null); //used to hold scroll value
  const cardRef = useRef(null); //used to hold card width value
  const { isMobileView } = useDeviceView();

  //business is returned as Sale of business so we need to modify it to Business

  const slideLeft = () => {
    const scrollContainer = scrollRef.current;
    const cardWidth = cardRef.current.offsetWidth;
    const scrollAmount = cardWidth * 3; // Adjust the scroll amount as needed
    scrollContainer.scrollLeft -= scrollAmount;
  };

  const slideRight = () => {
    const scrollContainer = scrollRef.current;
    const cardWidth = cardRef.current.offsetWidth;
    const scrollAmount = cardWidth * 3; // Adjust the scroll amount as needed
    scrollContainer.scrollLeft += scrollAmount;
  };
  console.log(data);

  return (
    <div className="relative mb-8 flex justify-center">
      {/* <div className="btns flex justify-between">
        <button
          className="scroll-left absolute start-0"
          title="scroll left"
          onClick={slideLeft}
        >
          <SlArrowLeft size={16} color="black" />
        </button>
        <button
          className="scroll-right absolute end-0"
          title="scroll right"
          onClick={slideRight}
        >
          <SlArrowRight size={16} color="black" />
        </button>
      </div> */}
      <div
        className={`w-full row row-cols-lg-${numberOfCards} row-cols-md-4 row-cols-1 py-2`}
        // id="slider"
        ref={scrollRef}
      >
        {data?.map((curElem, index) => {
          // console.log(value);
          return (
            <div className="pl-0 pr-6 my-2 sm:my-0" ref={cardRef} key={index}>
              <AssignmentCard
                curElem={curElem}

                // link={`/${value.name.replace(" ", "-")}`}
              ></AssignmentCard>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AssignmentPropertySlider;
