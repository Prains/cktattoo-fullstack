import Image from "next/image";
import Link from "next/link";
import lionDLeft from "./lion_masterDLeft.svg";
import lionDRight from "./lion_masterDRight.svg";
import routes from "@/utils/routes";

interface IMaster {
  id: number;
  image: string;
  name: string;
  experience: number;
  role: string;
  price: number;
}

const MasterItem = ({ id, image, name, experience, role, price }: IMaster) => {
  return (
    <article className="flex flex-col items-center justify-center gap-6 lg:flex-row lg:gap-10">
      <div
        className={`flex flex-col ${
          id % 2 !== 0 ? "lg:order-first" : "lg:order-last"
        } relative items-center justify-center gap-2`}
      >
        {id % 2 !== 0 && (
          <Image
            src={lionDLeft}
            alt="лев"
            className="absolute left-[-60px] top-[-50px] -z-50 hidden xl:block"
          />
        )}
        {id % 2 === 0 && (
          <Image
            src={lionDRight}
            alt="лев"
            className="absolute right-[-60px] top-[-45px] -z-50 hidden xl:block"
          />
        )}
        <Link href={routes.masters + `/${id}`}>
          <Image
            src={image}
            alt={name}
            width={160}
            height={160}
            className="h-40 w-40 rounded-full border border-neutral-800 object-cover lg:h-[360px] lg:w-[360px]"
          />
        </Link>
        <p className="lg:hidden">{name}</p>
      </div>
      <div className="flex items-center justify-center gap-3 lg:items-end lg:gap-10">
        <div className="flex flex-col items-start justify-center gap-3 lg:gap-0">
          <p className="mb-[42px] hidden text-[32px] font-semibold lg:block">
            {name}
          </p>
          <div className="flex flex-col gap-1 text-[8px] font-normal text-neutral-800 lg:mb-8 lg:text-base">
            Статус
            <p className="flex h-[35px] w-[184px] items-center justify-center rounded-[10px] border border-stone-500 text-[11px] font-medium text-stone-900 lg:h-[70px] lg:w-[460px] lg:justify-start lg:pl-6 lg:text-xl lg:font-medium">
              {role}
            </p>
          </div>
          <div className="flex items-center justify-center gap-3">
            <div className="flex flex-col gap-1 text-[8px] font-normal text-neutral-800 lg:text-base">
              Стоимость сеанса
              <p className="flex h-[37px] w-[95px] items-center justify-start rounded-[10px] border border-stone-500 bg-[#D9D9D9] pl-2 text-xs font-medium text-stone-900 lg:h-[70px] lg:w-[220px] lg:pl-5 lg:text-xl lg:font-normal">
                {price} ₽
              </p>
            </div>
            <Link
              href={"/"}
              className="button px-4 uppercase lg:ml-[30px] lg:flex lg:h-[70px] lg:w-[198px] lg:items-center lg:justify-center lg:self-end lg:text-sm"
            >
              запись
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-1 text-right text-[8px] font-normal text-[#202020] lg:text-base">
          Опыт работы
          <p className="flex h-24 w-24 flex-col items-center justify-center rounded-[10px] border border-[#83746E] bg-[#DFD6D1] text-4xl italic lg:h-[199px] lg:w-[261px] lg:text-[64px]">
            {experience}{" "}
            <span className="text-xs lg:text-xl">
              {experience === 1
                ? "год"
                : experience === 2 || experience === 3 || experience === 4
                ? "года"
                : "лет"}
            </span>
          </p>
        </div>
      </div>
    </article>
  );
};

export default MasterItem;
