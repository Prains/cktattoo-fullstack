import ReviewsPage from "@/components/ReviewsPage/ReviewsPage";
import api from "@/utils/classes/Api";
import routes from "@/utils/routes";

const getReviews = async () => {
  const data = await api.get(`${routes.backend}/api/review?populate=*`);
  return data.data.attributes.image.data;
};

const Reviews = async () => {
  const reviewsData = await getReviews();
  return <ReviewsPage reviewsData={reviewsData} />;
};

export default Reviews;
