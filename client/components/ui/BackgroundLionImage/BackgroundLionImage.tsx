import Image from "next/image";
import { backgroundLion } from "@/images/burger";

const BackgroundLionImage = () => {
  return (
    <Image
      src={backgroundLion}
      alt="Лицо льва"
      className="absolute left-0 right-0 top-5 mx-auto lg:top-60"
    />
  );
};

export default BackgroundLionImage;
