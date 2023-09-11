import { mobileLogo } from "@/images/icons";
import Image from "next/image";
import Link from "next/link";
import lion from './lion_education.svg'
import machine from './machine_education.svg'

interface EducationBlockItemProps {
  name: string;
  advantages: string[];
  price: number;
}

const EducationBlockItem = ({
  name,
  advantages,
  price,
}: EducationBlockItemProps) => {
  return (
    <article className="border-[#83746E] rounded-[20px] border-[1px] p-[30px] w-full relative overflow-hidden">
      <Image src={lion} alt="лев" className="lg:hidden absolute -z-50 top-0 left-[-15px]" />
      <Image src={machine} alt="татуировочная машинка" className="lg:hidden absolute -z-50 bottom-[40px] right-[-25px]" />
      <p className="text-base font-normal mb-7">Тариф <span className="text-base font-medium">{name}</span></p>
      <ul className={`flex flex-col gap-[10px] ${name !== 'ВИДЕО-КУРС*' ? 'mb-8' : 'mb-3' }`}>
        {advantages.map((advantage, index) => {
          return (
            <div key={index} className="flex items-center justify-start gap-5">
              <Image src={mobileLogo} alt="тигр в клетке" className="h-4 w-4" />
              <li className="text-main">{advantage}</li>
            </div>
          );
        })}
      </ul>
      {name === 'ВИДЕО-КУРС*' && <p className="text-[7px] ml-[37px] mb-[34px]">*обратной связи тариф не предусматривает</p>}
      <p className="text-xl text-[#1e1e1e] mb-[26px]">{price.toString().slice(0, price.toString().length - 3)} {price.toString().slice(price.toString().length - 3, price.toString().length)} ₽</p>
      <div className="flex gap-5 h-10">
        <Link href={"/"} className="flex flex-1 button px-3 justify-center items-center uppercase !rounded-[10px]">
          купить
        </Link>
        <Link
          href={"/"}
          className="flex flex-1 justify-center items-center px-2 text-center border border-[#1a0f0c] bg-[#e0e0e0] rounded-[10px] text-[10px] uppercase md:h-[60px] md:text-[20px]"
        >
          задать вопрос
        </Link>
      </div>
    </article>
  );
};

export default EducationBlockItem;
