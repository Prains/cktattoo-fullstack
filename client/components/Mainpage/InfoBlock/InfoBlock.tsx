import ContentZone from "@/components/ui/ContentZone/ContentZone";
import Image from "next/image";
import { leftLine } from "@/images/burger";
import leftLineInfo from './leftLineInfo.svg'
import map from './map.png'
import Link from "next/link";
import machine from './machine_info.svg'
import machineD from './machine_infoD.svg'
import machineD2 from './machine_infoD2.svg'

const InfoBlock = () => {
  return ( 
    <section className="pb-[76px] relative overflow-hidden" id="contacts">
      <Image src={machine} alt="татуировочная машинка" className="lg:hidden absolute -z-50 bottom-[-130px] right-0" />
      <Image src={machineD} alt="татуировочная машинка" className="hidden xl:block absolute -z-50 bottom-[-351px] right-0"  />
      <Image src={machineD2} alt="татуировочная машинка" className="hidden xl:block absolute -z-50 bottom-[-341px] right-0"  />
      <ContentZone>
        <h3 className="text-semibold mb-8 flex items-center justify-center uppercase xl:relative xl:text-[#83746E] xl:mb-[96px]">
          <Image
            src={leftLine}
            alt="черная линия"
            priority
            className="absolute left-[-33px] xl:hidden"
          />
          <Image
            src={leftLineInfo}
            alt="черная полоска"
            className="absolute left-[-58px] top-[35%] hidden xl:block"
            priority
          />
          добраться до нас
        </h3>
        <div className="flex gap-3 justify-center xl:gap-[60px]">
          <Link target="_blank" href={'https://yandex.ru/maps/-/CDQQRWnB'}>
            <Image src={map} alt="карта" className="object-cover rounded-[10px] w-[143px] h-[126px] md:w-[151px] md:h-[151px] xl:w-[700px] xl:h-[616px]"/>
          </Link>
          <div className="flex flex-col xl:items-center xl:justify-center">
            <p className="text-[10px] font-normal leading-[11px] text-[#202020] mb-[26px] xl:hidden">Работаем с 10:00 до 22:00</p>
            <Link target="_blank" href={'https://yandex.ru/maps/-/CDQQRWnB'} className="text-[10px] font-normal leading-[11px] text-[#202020] mb-[21px] xl:hidden">г. Балашиха, <br/> ул. Советская д. 36к2, <br/> 4 этаж</Link>
            <p className="hidden xl:block font-normal text-[#202020] mb-[69px] text-[32px] leading-[35px] text-center">Работаем <br/> с 10:00 до 22:00</p>
            <Link target="_blank" href={'https://yandex.ru/maps/-/CDQQRWnB'} className="hidden xl:block font-normal text-[#202020] mb-[70px] text-[24px] leading-[26px] text-center">г. Балашиха <br/> ул. Советская д. 36к2, 4 этаж</Link>
            <button className="button flex items-center justify-center h-[35px] uppercase xl:h-[80px] xl:w-[400px]">запись</button>
          </div>
        </div>
      </ContentZone>
    </section>
   );
}
 
export default InfoBlock;