import ContentZone from "@/components/ui/ContentZone/ContentZone";
import AdvantageListItem from "./AdvantageListItem/AdvantageListItem";
import Image from "next/image";
import leftLion from './leftLion.svg'
import rightLion from './rightLion.svg'
import lion from './lion.svg'
import lionBackground from './lion_advantages.svg'
import machineD from './machine_advantagesD.svg'
import machineD2 from './machine_advantagesD2.svg'

const AdvantagesBlock = () => {
  const advantages = [
    {
      id: 1,
      title: "Качество результата",
      text: "Вы всегда получите то, за чем пришли",
      number: '5',
      subNumber: 'профессиональных тату-мастеров'
    },
    {
      id: 2,
      title: "Атмосфера и взаимодействие",
      text: "Прежде всего для нас вы гость, потом клиент, а в итоге - наш друг",
      number: '2014',
      subNumber: 'год основания'
    },
    {
      id: 3,
      title: "УНИКАЛЬНОЕ РАСПОЛОЖЕНИЕ",
      text: "АРТ-пространство №1 в городе",
      number: '3000+',
      subNumber: 'довольных клиентов'
    },
  ];

  return (
    <section className="relative">
      <Image src={lionBackground} alt="лев" className="lg:hidden absolute -z-50 bottom-[-85px] right-0"  />
      <Image src={machineD} alt="татуировочная машинка" className="hidden xl:block absolute -z-50 top-[-450px] right-0"  />
      <Image src={machineD2} alt="татуировочная машинка" className="hidden xl:block absolute -z-50 top-[-460px] right-0"  />
      <ContentZone>
        <h3 className="text-semibold text-center uppercase xl:text-[#83746E]">
          наши преимущества
        </h3>
        <ul className="mt-8 flex flex-col gap-6 xl:hidden">
          {advantages.map((advantage) => {
            return (
              <li key={advantage.title}>
                <AdvantageListItem {...advantage} />
              </li>
            );
          })}
        </ul>
        <article className="flex flex-col gap-4 pt-[60px] xl:hidden">
          <p className="flex flex-col items-start justify-center rounded-bl-[10px] rounded-tr-[10px] border-[0.5px] border-[#1A0F0C] bg-[#E0E0E0] px-3 py-2 text-2xl font-bold italic">
            5
            <span className="text-[10px] font-normal">
              профессиональных тату-мастеров
            </span>
          </p>
          <div className="flex items-center justify-between gap-4">
            <p className="flex flex-col items-start justify-center rounded-bl-[10px] rounded-tr-[10px] border border-[#1A0F0C] bg-[#E0E0E0] px-3 py-2 text-2xl font-bold italic">
              2014
              <span className="text-[10px] font-normal">год основания</span>
            </p>
            <p className="flex flex-col items-start justify-center rounded-bl-[10px] rounded-tr-[10px] border border-[#1A0F0C] bg-[#E0E0E0] px-3 py-2 text-2xl font-bold italic">
              3000+
              <span className="text-[10px] font-normal">
                довольных клиентов
              </span>
            </p>
          </div>
        </article>

        <ul className="hidden flex-col mt-[96px] xl:flex gap-[70px]">
          {advantages.map((advantage) => {
              return (
                <li key={advantage.id}>
                  <article className={`flex justify-between ${advantage.id % 2 === 0 ? 'justify-end' : 'items-start'}`}>
                    <Image
                      src={advantage.id % 2 === 0 ? rightLion : leftLion}
                      alt="линия с эмблемой льва на конце"
                      priority
                      className={`absolute ${advantage.id % 2 === 0 ? 'right-0' : 'left-0'} h-[41px]`}
                    />
                    <Image src={lion} alt="лев" className={`absolute ${advantage.id % 2 === 0 ? 'right-[117px]' : 'left-[117px]'}`} />
                    <div className={`flex flex-col ${advantage.id % 2 === 0 ? 'pr-[120px]' : 'pl-[120px]'} ${advantage.id % 2 === 0 ? 'order-last' : 'order-first'}`}>
                      <p className="flex flex-col uppercase gap-[22px] text-[28px] font-medium text-black">
                        {advantage.title}
                        <span className="text-2xl max-w-[574px] leading-[26px] normal-case font-normal text-[#202020]">{advantage.text}</span>
                      </p>  
                    </div>
                    <p className={`flex items-center justify-center rounded-bl-[10px] min-w-[234px] rounded-tr-[10px] border-[0.5px] border-[#1A0F0C] px-3 ${advantage.id === 1 ? 'text-[64px] gap-[18px]' : 'text-[40px] flex-col gap-[12px]'} font-bold italic`}>
                      {advantage.number}
                      <span className="text-[18px] font-normal">
                        {advantage.subNumber}
                      </span>
                    </p>
                  </article>
                </li>
              );
            })}
        </ul>
      </ContentZone>
    </section>
  );
};

export default AdvantagesBlock;
