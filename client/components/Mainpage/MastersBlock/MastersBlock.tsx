"use client";
import { Carousel } from "@mantine/carousel";
import Image from "next/image";
import { rightLineDesktop } from "@/images/desktop";
import masterImage from "./photo.png";
import masterImage2 from "./photo2.png";
import masterImage3 from "./photo3.png";
import masterImage4 from "./photo4.png";
import masterImage5 from "./photo5.png";
import MasterItem from "./MasterItem/MasterItem";
import ContentZone from "@/components/ui/ContentZone/ContentZone";
import Link from "next/link";
import lion from "./lion_master.svg";

const MastersBlock = () => {
  const masters = [
    {
      id: 1,
      image: masterImage.src,
      name: "Максим Витолиньш",
      experience: 15,
      role: "Топ-мастер, преподаватель",
      price: 15000,
    },
    {
      id: 2,
      image: masterImage2.src,
      name: "Полина",
      experience: 8,
      role: "Мастер",
      price: 13000,
    },
    {
      id: 3,
      image: masterImage3.src,
      name: "Мария",
      experience: 8,
      role: "Мастер",
      price: 12000,
    },
    {
      id: 4,
      image: masterImage4.src,
      name: "Евгений",
      experience: 2,
      role: "Мастер",
      price: 6000,
    },
    {
      id: 5,
      image: masterImage5.src,
      name: "Анастасия",
      experience: 1,
      role: "Мастер",
      price: 6000,
    },
  ];
  return (
    <section className="relative" id="masters">
      <Image
        src={lion}
        alt="лев"
        className="absolute left-0 top-[-170px] -z-50 lg:hidden"
      />
      <ContentZone>
        <h2 className="text-semibold mb-11 self-center text-center uppercase lg:mb-24 lg:text-[#83746E] xl:relative">
          <Image
            src={rightLineDesktop}
            alt="черная полоска"
            className="absolute right-[-57px] top-[35%] hidden xl:block"
            priority
          />
          наши мастера
        </h2>
        <Carousel
          className="lg:hidden"
          maw={420}
          mx="auto"
          slideGap="xl"
          withControls={false}
          withIndicators
          height={"calc((100vw - 320px) / (768 - 320) * (400 - 350) + 350px)"}
          mah={400}
          styles={{
            indicators: {
              bottom: "0 !important",
            },
            indicator: {
              width: "5px",
              height: "5px",
              border: "1px solid #83746E",
              borderRadius: 50,
              transition: "width 250ms ease",
              "&[data-active]": {
                backgroundColor: "#83746E !important",
              },
            },
          }}
        >
          {masters.map((master, index) => {
            return (
              <Carousel.Slide key={index}>
                <MasterItem {...master} />
              </Carousel.Slide>
            );
          })}
        </Carousel>
        <div className="hidden flex-col gap-10 lg:mb-24 lg:flex">
          {masters.map((master, index) => {
            return (
              <div key={index}>
                <MasterItem {...master} />
              </div>
            );
          })}
        </div>
        <Link
          href={"/"}
          className="button mx-auto hidden h-[80px] w-[440px] items-center justify-center uppercase lg:flex"
        >
          работы мастеров
        </Link>
      </ContentZone>
    </section>
  );
};

export default MastersBlock;
