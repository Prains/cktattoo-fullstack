import ReviewsPage from "@/components/ReviewsPage/ReviewsPage";
import review from "../../components/Mainpage/ReviewsBlock/77a0228dae80f24cc69f4bf9847be1ac.png";

const Reviews = () => {
  const reviews = Array(5).fill(review.src);
  return <ReviewsPage reviews={reviews} />;
};

export default Reviews;
