'use client'
import ContentZone from "@/components/ui/ContentZone/ContentZone";
import Image from "next/image";
import Link from "next/link";
import { leftLine } from "@/images/burger";
import leftLineReview from './leftLineReview.svg'
import rightLineReview from './rightLineReview.svg'
import { Carousel } from '@mantine/carousel';
import reviewImage from './77a0228dae80f24cc69f4bf9847be1ac.png'
import lionD from './lion_reviewsD.svg'

const ReviewsBlock = () => {

  const reviews = [
    {
      id: 1,
      image: reviewImage.src
    },
    {
      id: 2,
      image: reviewImage.src
    },
    {
      id: 3,
      image: reviewImage.src
    },
    {
      id: 4,
      image: reviewImage.src
    },
    {
      id: 5,
      image: reviewImage.src
    },
    {
      id: 6,
      image: reviewImage.src
    },
  ]

  return ( 
    <section className="relative">
      <Image src={lionD} alt="лев" className="hidden xl:block absolute -z-50 top-[120px] left-[125px]"  />
      <ContentZone>
      <h2 className="text-semibold mb-[35px] self-center text-center uppercase lg:mb-24 lg:text-[#83746E] relative">
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
                bottom: '0 !important',
              },
              indicator: {
                width: '5px',
                height: '5px',
                border: '1px solid black',
                borderRadius: 50,
                transition: 'width 250ms ease',

                '&[data-active]': {
                  backgroundColor: '#000 !important',
                },
              },
            }}
          >
            {reviews.map(review => {
              return (
                <Carousel.Slide key={review.id}>
                  <Image src={review.image} width={291} height={451} alt="отзыв" className="object-contain h-[451px] rounded-[10px]" />
                </Carousel.Slide>
              )
            })}
          </Carousel>

          <Carousel
            className="hidden xl:block mb-14"
            maw={1280}
            mx="auto"
            loop
            slideSize={'50%'}
            align="start"
            slideGap="180px"
            withControls={false}
            withIndicators
            height={852}
            styles={{
              indicators: {
                bottom: '0 !important',
              },
              indicator: {
                width: '11px',
                height: '11px',
                border: '1px solid #83746E',
                borderRadius: 50,
                transition: 'width 250ms ease',

                '&[data-active]': {
                  backgroundColor: '#83746E !important',
                },
              },
            }}
          >
            {reviews.map(review => {
              return (
                <Carousel.Slide key={review.id}>
                  <Image src={review.image} width={500} height={778} alt="отзыв" className="object-cover object-center h-[778px] rounded-[10px]" />
                </Carousel.Slide>
              )
            })}
          </Carousel>
          <Link href={'/'} className="hidden button justify-center items-center w-[400px] h-[80px] mx-auto uppercase xl:flex">больше отзывов</Link>
      </ContentZone>
    </section>
   );
}
 
export default ReviewsBlock;