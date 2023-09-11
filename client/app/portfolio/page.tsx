import PortfolioPage from "@/components/PortfolioPage/PortfolioPage";
import api from "@/utils/classes/Api";
import routes from "@/utils/routes";

const getPortfolioData = async () => {
  const data = await api.get(
    `${routes.backend}/api/portolio-images?populate=*`,
  );
  return data.data;
};

const Portfolio = async () => {
  const portfolioImages = await getPortfolioData();

  return <PortfolioPage portfolioImages={portfolioImages} />;
};

export default Portfolio;
