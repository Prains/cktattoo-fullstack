import Image from "next/image";
import { leftLine } from "@/images/burger";
import { leftLineDesktop, rightLineDesktop } from "@/images/desktop";

const TitleWithLine = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <div className={"flex items-center justify-center" + ` ${className}`}>
      <Image
        src={leftLine}
        alt="черная полоска"
        className="absolute left-[-26px] lg:hidden"
      />
      <Image
        src={leftLineDesktop}
        alt="черная полоска"
        className="absolute left-[-250px] hidden lg:left-[-150px] xl:left-0 xl:block"
        priority
      />
      <Image
        src={rightLineDesktop}
        alt="черная полоска"
        className="absolute right-[-250px] hidden lg:right-[-150px] xl:right-0 xl:block"
        priority
      />
      <h2 className="text-semibold text-[#83746E]">{text}</h2>
    </div>
  );
};

export default TitleWithLine;
