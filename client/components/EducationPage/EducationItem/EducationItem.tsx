import Image from "next/image";
import { educationIcon } from "@/images/icons";
import IEducationProgramm from "@/interfaces/IEducationProgramm";

const EducationItem = ({ name, lessonBlocks }: IEducationProgramm) => {
  return (
    <article className="mb-16 flex flex-col items-center justify-center">
      <div className="mb-16 flex flex-col items-center justify-center gap-6">
        <p className="text-main font-semibold">ПРОГРАММА ОБУЧЕНИЯ</p>
        <p className="text-center text-[22px] text-[#83746E]">
          профессии «{name}»
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-10 lg:flex-row">
        <div className="flex flex-col items-center justify-center gap-6">
          {lessonBlocks.map((block, index) => {
            return (
              <div
                className="flex flex-col gap-3 rounded-3xl border border-[#1A0F0C] bg-[#E0E0E0] px-20 py-6"
                key={index}
              >
                <p>{block.title}</p>
                <p>{block.description}</p>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col items-center justify-center gap-10">
            <Image src={educationIcon} alt="значок диплома" priority />
            <p className="max-w-[240px] text-center text-[20px]">
              + ДИПЛОМ о квалификации
            </p>
          </div>
          <button className="button px-6">подать заявку</button>
        </div>
      </div>
    </article>
  );
};

export default EducationItem;
