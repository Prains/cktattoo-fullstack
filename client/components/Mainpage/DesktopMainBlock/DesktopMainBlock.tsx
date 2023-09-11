import Link from "next/link";
const DesktopMainBlock = () => {
  return (
    <section className="relative hidden flex-col items-center justify-center lg:flex">
      <h1 className="flex flex-col items-center justify-center text-[22px] uppercase text-neutral-800">
        тату-студия
        <span className="text-title">«СТАЛЬНОЙ КЛЫК»</span>
      </h1>
      <p className="mt-[47px] text-xl">
        Место внешней и внутренней трансформации
      </p>
      <Link className="button mt-[62px] px-[60px] uppercase" href={"/"}>
        консультация бесплатно
      </Link>
    </section>
  );
};

export default DesktopMainBlock;
