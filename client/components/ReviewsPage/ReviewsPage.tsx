"use client";
import Image from "next/image";
import ContentZone from "../ui/ContentZone/ContentZone";
import routes from "@/utils/routes";
import { useAppSelector } from "@/hooks/useReduxHooks";

const ReviewsPage = () => {
  const { reviews } = useAppSelector((state) => state.reviews);

  const reviewsData = reviews as any;
  return (
    <main className="mb-6 flex flex-col items-center justify-center gap-6 lg:mb-16 lg:gap-16">
      <ContentZone>
        <h1 className="text-semibold mb-6 w-full text-center text-[#83746E] lg:mb-16">
          Отзывы клиентов
        </h1>
        <ul className="flex flex-wrap items-start justify-center gap-5">
          {reviewsData.map((review: any, index: any) => {
            const reviewsImage = `${routes.backend}${review.attributes.url}`;
            return (
              <li key={index}>
                <Image
                  src={reviewsImage}
                  alt="отзыв cktatto"
                  width={366}
                  height={576}
                />
              </li>
            );
          })}
        </ul>
      </ContentZone>
    </main>
  );
};

export default ReviewsPage;
