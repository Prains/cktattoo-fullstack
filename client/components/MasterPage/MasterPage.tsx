import Link from "next/link";
import MasterItem from "../Mainpage/MastersBlock/MasterItem/MasterItem";
import ContentZone from "../ui/ContentZone/ContentZone";
import MasterDesriptionAndWorkingImage from "./MasterDesriptionAndWorkingImage/MasterDesriptionAndWorkingImage";
import Image from "next/image";
import IMaster from "@/interfaces/IMaster";
import routes from "@/utils/routes";

interface MasterPageProps {
  mastersData: {
    id: number;
    attributes: IMaster;
  };
}

const Master = ({ mastersData }: MasterPageProps) => {
  const workingImage = `${routes.backend}${mastersData.attributes.workingPhoto.data.attributes.url}`;
  const { portolioImages } = mastersData.attributes;
  return (
    <main>
      <MasterItem id={mastersData.id} index={1} {...mastersData.attributes} />
      <ContentZone className="flex flex-col">
        <MasterDesriptionAndWorkingImage
          description={mastersData.attributes.description}
          workingImage={workingImage}
        />
        <ul className="mb-6 flex flex-wrap items-center justify-center gap-10">
          {portolioImages.data.map((portfolioItem, index) => {
            const imageLink = `${routes.backend}${portfolioItem.attributes.image.data.attributes.url}`;
            return (
              <li key={index}>
                <Image
                  src={imageLink}
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
