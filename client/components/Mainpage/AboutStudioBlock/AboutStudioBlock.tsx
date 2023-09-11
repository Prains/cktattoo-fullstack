import { leftLine } from "@/images/burger";
import { rightLineDesktop } from "@/images/desktop";
import Image from "next/image";
import aboutStudioImage from "./123.png";
import ContentZone from "@/components/ui/ContentZone/ContentZone";
import Link from "next/link";
import machine from './machine_about.svg'
import machineD from './machine_aboutD.svg'
import machineD2 from './machine_aboutD2.svg'

const AboutStudioBlock = () => {
  return (
    <section className="relative">
      <Image src={machine} alt="татуировочная машинка" className="lg:hidden absolute -z-50 top-[-123px] right-0" />
      <Image src={machineD} alt="татуировочная машинка" className="hidden xl:block absolute -z-50 top-[-301px] left-0"  />
      <Image src={machineD2} alt="татуировочная машинка" className="hidden xl:block absolute -z-50 top-[-311px] left-0"  />
      <ContentZone>
        <h3 className="text-semibold flex items-center justify-center uppercase lg:mb-24 lg:text-[#83746E] xl:relative">
          <Image
            src={leftLine}
            alt="черная стрелочка"
            priority
            className="absolute left-0 sm:hidden"
          />
          <Image
            src={rightLineDesktop}
            alt="черная полоска"
            className="absolute right-[-57px] top-[35%] hidden xl:block"
            priority
          />
          О студии
        </h3>
        <div className="flex flex-col gap-6 mb-6 lg:flex-row lg:gap-[65px] lg:mb-14 lg:justify-center">
          <Image
            src={aboutStudioImage.src}
            alt="фото студии"
            width={290}
            height={182}
            className="mx-auto mt-7 rounded-[10px] lg:w-[440px] lg:h-[270px] lg:self-center xl:w-[660px] xl:h-[412px] lg:mt-0 lg:mx-0"
          />
          <p className="text-main text-center lg:flex lg:items-center lg:max-w-[403px]">
            В центре города, в Балашихинской хлопкопрядильной фабрике 1830 г.,
            которая на сегодняшний день является памятником архитектуры, в нашем
            потрясающем «200 летнем замке», в главном корпусе, на сам ом высоком
            этаже с видом на закат, существует студия “Стальной клык”
          </p>
        </div>
        <div className="w-full h-[41px] flex items-center justify-center gap-8 lg:gap-14 lg:h-auto">
          <Link className="button w-full !py-[6px] leading-[14px] px-9 text-center uppercase lg:hidden" href={"/"}>
            больше <br />о студии
          </Link>
          <Link
            href={"/"}
            className="text-main !leading-normal border border-[#1A0F0C] rounded-[5px] leading-[14px] w-full px-6 py-[4px] text-center uppercase lg:hidden"
          >
            добраться <br />
            до нас
          </Link>
          <Link className="hidden lg:flex button leading-[14px] justify-center items-center uppercase w-[400px] h-[80px]" href={"/"}>
            больше о студии
          </Link>
          <Link
            href={"/"}
            className="hidden lg:flex text-xl text-[#83746E] font-bold !leading-normal border-[2px] border-[#83746E] rounded-[5px] w-[400px] h-[80px] items-center justify-center uppercase"
          >
            добраться до нас
          </Link>
          <Link
            href={"/"}
            className="hidden lg:flex text-xl text-[#83746E] font-bold !leading-normal border-[2px] border-[#83746E] rounded-[5px] w-[248px] h-[80px] items-center justify-center uppercase"
          >
            запись
          </Link>
        </div>
      </ContentZone>
    </section>
  );
};

export default AboutStudioBlock;
