"use client";
import Image from "next/image";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Dot,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Overlay from "@/components/ui/Overlay";
import { useState } from "react";

// TODO сделать параметр просмотренного сторис

interface ActiveStory {
  setOpen(value: boolean): void;
  stories: {
    image: string;
  }[];
  pagination: number;
}

const ActiveStory = ({ setOpen, stories, pagination }: ActiveStory) => {
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <Overlay>
      <CarouselProvider
        naturalSlideHeight={385}
        naturalSlideWidth={205}
        totalSlides={stories.length}
        className="h-[385px] w-[205px] lg:h-[679px] lg:w-[360px]"
      >
        <Slider>
          {stories.map((story, index) => {
            return (
              <Slide
                key={index}
                index={index}
                className="rounded-3xl border-2 border-pink-600 bg-[#202020] py-6"
              >
                <Image
                  src={story.image}
                  alt="история cktattoo"
                  width={315}
                  height={631}
                  className="mx-auto mt-3 h-[385px] w-[180px] lg:mt-9 lg:h-[631px] lg:w-[315px]"
                  priority
                  onClick={() => {
                    setOpen(false);
                  }}
                />
              </Slide>
            );
          })}
        </Slider>
        <div className="mt-5 flex items-center justify-center gap-3">
          {stories.map((_, index) => {
            const isActive =
              index === activeSlide ? "bg-[#FF00C7]" : "bg-[#e0e0e0]";

            return (
              <Dot
                slide={index}
                key={index}
                className={`h-1 w-6 rounded-full ${isActive}`}
                onClick={() => {
                  setActiveSlide(index);
                }}
              />
            );
          })}
        </div>
      </CarouselProvider>
    </Overlay>
  );
};

export default ActiveStory;
