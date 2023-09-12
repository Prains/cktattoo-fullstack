"use client";
import Image from "next/image";
import Link from "next/link";
import { leftLine } from "@/images/burger";
import { leftLineDesktop, rightLineDesktop } from "@/images/desktop";
import { Carousel } from "@mantine/carousel";
import lion from "./lion_logo.svg";
import lionD from "./lion_portfolioD.svg";
import machineD from "./machine_portfolioD.svg";
import machineD2 from "./machine_portfolioD2.svg";
import routes from "@/utils/routes";
import { useAppSelector } from "@/hooks/useReduxHooks";

const PortfolioSlider = () => {
  const { portfolio } = useAppSelector((state) => state.portfolio);
  const portfolioImages = portfolio as any;

  return (
    <section className="relative flex flex-col">
      <Image
        src={lion}
        alt="лев"
        className="absolute left-0 top-[-115px] -z-50 lg:hidden"
      />
      <Image
        src={lionD}
        alt="лев"
        className="absolute left-[125px] top-[-230px] -z-50 hidden xl:block"
      />
      <Image
        src={machineD}
        alt="татуировочная машинка"
        className="absolute bottom-[-281px] right-0 -z-50 hidden xl:block"
      />
      <Image
        src={machineD2}
        alt="татуировочная машинка"
        className="absolute bottom-[-271px] right-0 -z-50 hidden xl:block"
      />
      <h2 className="text-semibold mb-9 flex items-center self-center uppercase text-stone-500 xl:mb-[96px]">
        <Image
          src={leftLine}
          alt="черная полоска"
          className="absolute left-0 sm:hidden"
          priority
        />
        <Image
          src={leftLineDesktop}
          alt="черная полоска"
          className="absolute left-[-250px] hidden lg:left-[-150px] xl:left-0 xl:block"
          priority
        />
        <Image
          src={rightLineDesktop}
          alt="черная полоска"
          className="absolute right-[-250px] hidden lg:right-[-150px] xl:right-0 xl:block"
          priority
        />
        портфолио
      </h2>
      <div className="z-0">
        <Carousel
          className="mb-6 xl:hidden"
          maw={320}
          mx="auto"
          slideGap="xl"
          withControls={false}
          withIndicators
          height={253}
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
          {portfolioImages.map((image: any, index: any) => {
            return (
              <>
                <Carousel.Slide key={index} className="z-0">
                  <Image
                    src={`${routes.backend}${image.attributes.image.data.attributes.url}`}
                    alt="изображение татуировки на теле человека"
                    width={290}
                    height={232}
                    className="z-0 mx-auto h-[232px] rounded-[10px] object-cover object-center"
                  />
                </Carousel.Slide>
                {/*                 <Carousel.Slide key={index} className="z-0">
                  <Image
                    src={image.img2.src}
                    alt="изображение татуировки на теле человека"
                    width={290}
                    height={387}
                    className="z-0 mx-auto h-[232px] rounded-[10px] object-cover object-center"
                  />
                </Carousel.Slide>
                <Carousel.Slide key={index} className="z-0">
                  <Image
                    src={image.img3.src}
                    alt="изображение татуировки на теле человека"
                    width={290}
                    height={387}
                    className="z-0 mx-auto h-[232px] rounded-[10px] object-cover object-center"
                  />
                </Carousel.Slide> */}
              </>
            );
          })}
        </Carousel>
        <Carousel
          className="mb-6 hidden xl:block"
          maw={1280}
          mx="auto"
          slideGap="xl"
          withControls={false}
          withIndicators
          height={693}
          styles={{
            indicators: {
              bottom: "0 !important",
            },
            indicator: {
              width: "10px",
              height: "10px",
              border: "2px solid #83746E",
              borderRadius: 50,
              transition: "width 250ms ease",

              "&[data-active]": {
                backgroundColor: "#83746E !important",
              },
            },
          }}
        >
          {portfolioImages.map((image:any, index:any) => {
            return (
              <>
                <Carousel.Slide key={index} className="z-0">
                  <div className="flex justify-center gap-10">
                    <Image
                      // BUG Не понял, как правильно поменять типизацию
                      src={`${routes.backend}${image.attributes.image.data.attributes.url}`}
                      alt="изображение татуировки на теле человека"
                      width={290}
                      height={232}
                      className="z-0 h-[638px] w-[560px] rounded-[10px] object-contain object-center"
                    />
                    {/*              <div className="flex flex-col gap-10">
                      <Image
                        src={image.img2.src}
                        alt="изображение татуировки на теле человека"
                        width={290}
                        height={387}
                        className="z-0 mx-auto h-[300px] w-[560px] rounded-[10px] object-contain object-center"
                      />
                      <Image
                        src={image.img3.src}
                        alt="изображение татуировки на теле человека"
                        width={290}
                        height={387}
                        className="z-0 mx-auto h-[300px] w-[560px] rounded-[10px] object-contain object-center"
                      />
                    </div> */}
                  </div>
                </Carousel.Slide>
              </>
            );
          })}
        </Carousel>
      </div>
      <Link
        href={routes.portfolio}
        className="button self-center px-10 uppercase xl:mt-[32px] xl:h-[80px] xl:w-[400px] xl:text-center"
      >
        больше работ
      </Link>
    </section>
  );
};

export default PortfolioSlider;
