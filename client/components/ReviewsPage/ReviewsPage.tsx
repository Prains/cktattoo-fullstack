import Image from "next/image";
import ContentZone from "../ui/ContentZone/ContentZone";

interface IReviewsPage {
  reviews: string[];
}

const ReviewsPage = ({ reviews }: IReviewsPage) => {
  return (
    <main className="mb-6 flex flex-col items-center justify-center gap-6 lg:mb-16 lg:gap-16">
      <ContentZone>
        <h1 className="text-semibold mb-6 w-full text-center text-[#83746E] lg:mb-16">
          Отзывы клиентов
        </h1>
        <ul className="flex flex-wrap items-center justify-center gap-5">
          {reviews.map((review) => {
            return (
              <li key={review}>
                <Image
                  src={review}
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
