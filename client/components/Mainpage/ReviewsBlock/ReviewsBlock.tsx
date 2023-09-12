"use client";
import ContentZone from "@/components/ui/ContentZone/ContentZone";
import Image from "next/image";
import Link from "next/link";
import { leftLine } from "@/images/burger";
import leftLineReview from "./leftLineReview.svg";
import rightLineReview from "./rightLineReview.svg";
import { Carousel } from "@mantine/carousel";
import lionD from "./lion_reviewsD.svg";
import IReview from "@/interfaces/IReview";
import routes from "@/utils/routes";
import { useAppSelector } from "@/hooks/useReduxHooks";

interface ReviewsBlockProps {
  reviewsData: { id: number; attributes: IReview }[];
}

const ReviewsBlock = () => {
  const { reviews } = useAppSelector((state) => state.reviews);

  const reviewsData = reviews as any;

  return (
    <section className="relative">
      <Image
        src={lionD}
        alt="лев"
        className="absolute left-[125px] top-[120px] -z-50 hidden xl:block"
      />
      <ContentZone>
        <h2 className="text-semibold relative mb-[35px] self-center text-center uppercase lg:mb-24 lg:text-[#83746E]">
          <Image
            src={leftLine}
            alt="черная линия"
            priority
            className="absolute left-[-53px] top-[35%] xl:hidden"
          />
          <Image
            src={leftLineReview}
            alt="черная полоска"
            className="absolute left-[-58px] top-[35%] hidden xl:block"
            priority
          />
          <Image
            src={rightLineReview}
            alt="черная полоска"
            className="absolute right-[-58px] top-[35%] hidden xl:block"
            priority
          />
          отзывы клиентов
        </h2>
        <Carousel
          className="xl:hidden"
          maw={320}
          mx="auto"
          slideGap="xl"
          withControls={false}
          withIndicators
          height={472}
          styles={{
            indicators: {
              bottom: "0 !important",
            },
            indicator: {
              width: "5px",
              height: "5px",
              border: "1px solid black",
              borderRadius: 50,
              transition: "width 250ms ease",

              "&[data-active]": {
                backgroundColor: "#000 !important",
              },
            },
          }}
        >
          {reviewsData.map((review: any) => {
            const reviewsImage = `${routes.backend}${review.attributes.url}`;
            return (
              <Carousel.Slide key={review.id}>
                <Image
                  src={reviewsImage}
                  width={291}
                  height={451}
                  alt="отзыв"
                  className="h-[451px] rounded-[10px] object-contain"
                />
              </Carousel.Slide>
            );
          })}
        </Carousel>

        <Carousel
          className="mb-14 hidden xl:block"
          maw={1280}
          mx="auto"
          loop
          slideSize={"50%"}
          align="start"
          slideGap="180px"
          withControls={false}
          withIndicators
          height={852}
          styles={{
            indicators: {
              bottom: "0 !important",
            },
            indicator: {
              width: "11px",
              height: "11px",
              border: "1px solid #83746E",
              borderRadius: 50,
              transition: "width 250ms ease",

              "&[data-active]": {
                backgroundColor: "#83746E !important",
              },
            },
          }}
        >
          {reviewsData.map((review: any) => {
            const reviewsImage = `${routes.backend}${review.attributes.url}`;
            return (
              <Carousel.Slide key={review.id}>
                <Image
                  src={reviewsImage}
                  width={500}
                  height={778}
                  alt="отзыв"
                  className="h-[778px] rounded-[10px] object-cover object-center"
                />
              </Carousel.Slide>
            );
          })}
        </Carousel>
        <Link
          href={routes.reviews}
          className="button mx-auto hidden h-[80px] w-[400px] items-center justify-center uppercase xl:flex"
        >
          больше отзывов
        </Link>
      </ContentZone>
    </section>
  );
};

export default ReviewsBlock;
