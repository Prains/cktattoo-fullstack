import Mainpage from "@/components/Mainpage/Mainpage";
import api from "@/utils/classes/Api";
import routes from "@/utils/routes";

const getPortfolioData = async () => {
  const data = await api.get(
    `${routes.backend}/api/portolio-images?populate=*`,
  );
  return data.data;
};

const getMastersData = async () => {
  const data = await api.get(`${routes.backend}/api/masters?populate=*`);
  return data.data;
};

const getReviews = async () => {
  const data = await api.get(`${routes.backend}/api/review?populate=*`);
  return data.data.attributes.image.data;
};

export default async function Home() {
  const portfolioImages = await getPortfolioData();
  const mastersData = await getMastersData();
  const reviewsData = await getReviews();

  return (
    <Mainpage portfolioImages={portfolioImages} mastersData={mastersData} reviewsData={reviewsData} />
  );
}
