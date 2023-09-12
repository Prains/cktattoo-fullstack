"use client";
import Image from "next/image";
import ContentZone from "../ui/ContentZone/ContentZone";
import routes from "@/utils/routes";
import TitleWithLine from "../ui/TitleWithLine/TitleWithLine";
import { useAppSelector } from "@/hooks/useReduxHooks";

const PortfolioPage = () => {
  const { portfolio } = useAppSelector((state) => state.portfolio);
  const portfolioImages = portfolio as any;

  return (
    <main className="mb-6 flex flex-col items-center justify-center gap-6 lg:mb-16 lg:gap-16">
      <ContentZone>
        <TitleWithLine text="Портфолио" className="mb-6 lg:mb-16" />
        <ul className="flex flex-wrap items-center justify-center gap-5">
          {portfolioImages.map((portfolioItem: any, index: any) => {
            return (
              <li key={index}>
                <Image
                  src={`${routes.backend}${portfolioItem.attributes.image.data.attributes.url}`}
                  alt="работа из портфолио сктатту"
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

export default PortfolioPage;
