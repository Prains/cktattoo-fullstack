import ContentZone from "@/components/ui/ContentZone/ContentZone";
import { leftLine } from "@/images/burger";
import Image from "next/image";
import Link from "next/link";
import EducationBlockItem from "./EducationBlockItem/EducationBlockItem";
import lion from './lion_education.svg'

const EducatuonBlock = () => {

  const data = [
    {
      id: 1,
      name: "МАСТЕР ТАТУ",
      advantages: ['10 занятий', '10 часов теории', '30 часов практики', 'расходники и оборудование'],
      price: 65990,
    },
    {
      id: 2,
      name: "МАСТЕР+",
      advantages: ['безлимит по часам теории и практики', 'от точки А в точку Б за 2-3 месяца', 'расходники и оборудование', 'консультация по продвижению', 'консультация по открытию своего кабинета или студии'],
      price: 149000,
    },
    {
      id: 3,
      name: "ЭКСПРЕСС",
      advantages: ['вводная инструкция для тех, кто схватывает на лету', 'для тех, кому всего лишь раз достаточно посмотреть на процесс', 'инструкция + скрипт'],
      price: 38990,
    },
    {
      id: 4,
      name: "ВИДЕО-КУРС*",
      advantages: ['видеозаписи уроков', 'информационное наполнение соответствует тарифу БАЗОВЫЙ', 'безлимитный доступ к записям'],
      price: 49999,
    }
  ]

  return (
    <section className="lg:hidden relative">
      <Image src={lion} alt="лев" className="lg:hidden absolute -z-50 bottom-[-245px] right-0"  />
      <ContentZone>
        <h3 className="text-semibold mb-8 flex items-center justify-center uppercase">
          <Image
            src={leftLine}
            alt="черная линия"
            priority
            className="absolute left-0"
          />
          обучение
        </h3> 
        <div className="flex flex-col gap-8 items-center">
          {data.map(item => {
            return (
              <EducationBlockItem key={item.id} name={item.name} advantages={item.advantages} price={item.price} />
            )
          })}
          <Link href={'/'} className="flex items-center justify-center button w-[180px] h-10 uppercase text-center">узнать больше</Link>
        </div>
      </ContentZone>
    </section>
  );
};

export default EducatuonBlock;
