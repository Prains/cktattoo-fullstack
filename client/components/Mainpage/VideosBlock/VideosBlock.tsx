"use client";
import ContentZone from "@/components/ui/ContentZone/ContentZone";
import Image from "next/image";
import { leftLine } from "@/images/burger";
import { Carousel } from "@mantine/carousel";

const VideosBlock = () => {
  const videos = [
    {
      id: 1,
      video: "https://www.youtube.com/embed/ayK5j9gM-kA?si=fMBCZs_1gF9GQJGU",
    },
    {
      id: 2,
      video: "https://www.youtube.com/embed/qOrFEyCDaLE?si=q3jF-iJKMjFfc-Mv",
    },
  ];

  return (
    <section className="lg:hidden">
      <ContentZone>
        <h3 className="text-semibold mb-8 flex items-center justify-center uppercase">
          <Image
            src={leftLine}
            alt="черная линия"
            priority
            className="absolute left-[-18px]"
          />
          видео о нас
        </h3>
        <Carousel
          maw={320}
          mx="auto"
          slideGap="xl"
          withControls={false}
          withIndicators
          height={215}
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
          {videos.map((item) => {
            return (
              <Carousel.Slide key={item.id}>
                <iframe
                  width="291"
                  height="202"
                  src={item.video}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="rounded-lg lg:h-[720px] lg:w-[963px]"
                ></iframe>
              </Carousel.Slide>
            );
          })}
        </Carousel>
      </ContentZone>
    </section>
  );
};

export default VideosBlock;
