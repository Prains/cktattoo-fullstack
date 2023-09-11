import Link from "next/link";
import MasterItem from "../Mainpage/MastersBlock/MasterItem/MasterItem";
import ContentZone from "../ui/ContentZone/ContentZone";
import MasterDesriptionAndWorkingImage from "./MasterDesriptionAndWorkingImage/MasterDesriptionAndWorkingImage";
import Image from "next/image";

const Master = () => {
  const portfolio = Array(5).fill("/images/portfolioItem.png");
  return (
    <main>
      <MasterItem
        id={1}
        image="/images/polina.png"
        name="Мастер полина"
        experience={8}
        role="Мастер"
        price={13000}
      />
      <ContentZone className="flex flex-col">
        <MasterDesriptionAndWorkingImage />
        <ul className="mb-6 flex flex-wrap items-center justify-center gap-10">
          {portfolio.map((portfolioItem, index) => {
            return (
              <li key={index}>
                <Image
                  src={portfolioItem}
                  alt="фотография работы мастера"
                  width={560}
                  height={300}
                />
              </li> 
            );
          })}
        </ul>
        <Link
          href={"/"}
          className="button mx-auto my-6 w-full max-w-[461px] text-center"
        >
          записаться к мастеру
        </Link>
      </ContentZone>
    </main>
  );
};

export default Master;
