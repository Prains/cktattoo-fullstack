import DesktopMainBlock from "./DesktopMainBlock/DesktopMainBlock";
import AboutStudioBlock from "./AboutStudioBlock/AboutStudioBlock";
import AdvantagesBlock from "./AdvantagesBlock/AdvantagesBlock";
import EducatuonBlock from "./EducatuonBlock/EducatuonBlock";
import InfoBlock from "./InfoBlock/InfoBlock";
import MastersBlock from "./MastersBlock/MastersBlock";
import MobileMainBlock from "./MobileMainBlock/MobileMainBlock";
import PortfolioSlider from "./PortfolioSlider/PortfolioSlider";
import ReviewsBlock from "./ReviewsBlock/ReviewsBlock";
import VideosBlock from "./VideosBlock/VideosBlock";
import Image from "next/image";
import machine from "./logo_machine.svg";
import IPortfolioImage from "@/interfaces/IPortfolioImage";
import IMaster from "@/interfaces/IMaster";
import IReview from "@/interfaces/IReview";

interface MainpageProps {
  portfolioImages: { id: number; attributes: IPortfolioImage }[];
  mastersData: { id: number; attributes: IMaster }[];
  reviewsData: { id: number; attributes: IReview }[];
}

const Mainpage = ({ portfolioImages, mastersData }: MainpageProps) => {
  return (
    <main className="flex flex-col gap-[55px] lg:gap-[150px]">
      <div className="relative">
        <Image
          src={machine}
          alt="татуировочная машинка"
          className="absolute right-0 -z-50 lg:hidden"
        />
        <MobileMainBlock />
        <DesktopMainBlock />
      </div>
      <PortfolioSlider portfolioImages={portfolioImages} />
      <MastersBlock mastersData={mastersData} />
      <AboutStudioBlock />
      <AdvantagesBlock />
      <EducatuonBlock />
      <ReviewsBlock />
      <VideosBlock />
      <InfoBlock />
    </main>
  );
};

export default Mainpage;
