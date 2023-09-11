"use client";
import { Carousel } from "@mantine/carousel";
import Image from "next/image";
import { rightLineDesktop } from "@/images/desktop";
import masterImage from "./photo.png";
import MasterItem from "./MasterItem/MasterItem";
import ContentZone from "@/components/ui/ContentZone/ContentZone";
import Link from "next/link";
import lion from "./lion_master.svg";
import api from "@/utils/classes/Api";
import { useState, useEffect } from "react";
import routes from "@/utils/routes";

const MastersBlock = () => {
  const [mastersInformation, setMastersInformation] = useState(null as any);
  console.log(mastersInformation);

  useEffect(() => {
    const getData = async () => {
      const data = await api.get(`${routes.backend}/api/masters?populate=*`);
      setMastersInformation(data.data);
    };
    getData();
  }, []);

  if (!mastersInformation) return null;

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
          {mastersInformation.map((master: any, index: any) => {
            return (
              <Carousel.Slide key={index + 1}>
                <MasterItem
                  {...master.attributes}
                  index={index + 1}
                  id={master.id}
                />
              </Carousel.Slide>
            );
          })}
        </Carousel>
        <div className="hidden flex-col gap-10 lg:mb-24 lg:flex">
          {mastersInformation.map((master: any, index: any) => {
            return (
              <div key={index + 1}>
                <MasterItem
                  {...master.attributes}
                  index={index + 1}
                  id={master.id}
                />
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
