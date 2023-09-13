import IEducationProgramm from "@/interfaces/IEducationProgramm";
import ContentZone from "../ui/ContentZone/ContentZone";
import EducationItem from "./EducationItem/EducationItem";

interface EducationPageProps {
  educationProgramms: {
    id: number;
    attributes: IEducationProgramm;
  }[];
}

const EducationPage = ({ educationProgramms }: EducationPageProps) => {
  console.log(educationProgramms);
  return (
    <main>
      <ContentZone className="flex flex-col items-center justify-center">
        <div className="mb-10 flex flex-col items-center justify-center gap-5">
          <p className="text-[22px] text-[#1A0F0C]">ОБУЧЕНИЕ ПРОФЕССИИ</p>
          <h1 className="text-center text-[46px] font-semibold">ТАТУ-МАСТЕР</h1>
        </div>
        <div className="mb-16 flex max-w-[960px] flex-col items-center justify-center gap-6">
          <p className="text-main text-center !text-[20px]">
            Вы научитесь работать с тату-машинкой и воплощать на коже идеи
            клиентов. Сможете выполнять тату любой сложности, работать в разных
            стилях и зарабатывать от 3 000 рублей за сеанс.
          </p>
          <p className="text-main text-center !text-[20px]">
            При покупке любого тарифа дарим персональный план развития после
            обучения.
          </p>
        </div>
        {educationProgramms.map((item, index) => {
          const { lessonBlocks, name } = item.attributes;
          return (
            <EducationItem
              name={name}
              lessonBlocks={lessonBlocks}
              key={index}
            />
          );
        })}
      </ContentZone>
    </main>
  );
};

export default EducationPage;
