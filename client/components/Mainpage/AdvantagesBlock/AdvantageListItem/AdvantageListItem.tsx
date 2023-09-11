import Image from "next/image";
import strangeLine from "./strangeLine.svg";

interface IAdvantageListItemProps {
  title: string;
  text: string;
}

const AdvantageListItem = ({ title, text }: IAdvantageListItemProps) => {
  return (
    <article className="flex items-start justify-center">
      <Image
        src={strangeLine}
        alt="линия с эмблемой льва на конце"
        priority
        className="absolute left-0"
      />
      <p className="flex flex-col uppercase gap-5 text-xs font-medium text-black max-w-[181px]">
        {title}
        <span className="text-[10px] normal-case font-normal text-[#202020]">{text}</span>
      </p>  
    </article>
  );
};

export default AdvantageListItem;
   