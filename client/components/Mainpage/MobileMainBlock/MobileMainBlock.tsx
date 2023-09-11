import Link from "next/link";

const MobileMainBlock = () => {
  return (
    <section className="flex items-center justify-center flex-col lg:hidden">
      <h1 className="uppercase flex items-center justify-center flex-col text-neutral-800">
        тату-студия
        <span className="text-title">«СТАЛЬНОЙ КЛЫК»</span>
      </h1>
      <p className="text-main mt-2">Место внешней и внутренней трансформации</p>
      <Link className="uppercase button px-5 mt-[38px]" href={"/"}>
        консультация бесплатно
      </Link>
    </section>
  );
};

export default MobileMainBlock;
