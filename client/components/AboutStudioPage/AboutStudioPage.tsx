import Image from "next/image";
import BackgroundLionImage from "../ui/BackgroundLionImage/BackgroundLionImage";
import TitleWithLine from "../ui/TitleWithLine/TitleWithLine";
import aboutStudioImage from "../Mainpage/AboutStudioBlock/123.png";
import ContentZone from "../ui/ContentZone/ContentZone";
import Link from "next/link";

const AboutStudioPage = () => {
  return (
    <main>
      <BackgroundLionImage />
      <TitleWithLine text="О студии" className="mb-6 lg:mb-12" />
      <ContentZone className="flex flex-col items-center justify-center">
        <div className="mb-6 flex flex-col items-center justify-center lg:mb-12">
          <Image
            src={aboutStudioImage}
            alt="картинка о студии"
            width={963}
            height={720}
            className="mx-auto mb-5 rounded-lg"
          />
          <p className="text-main text-center">
            В центре города, в Балашихинской хлопкопрядильной фабрике 1830 г.,
            которая на сегодняшний день является памятником архитектуры, в нашем
            потрясающем «200 летнем замке», в главном корпусе, на самом высоком
            этаже с видом на закат, существует студия “Стальной клык”
          </p>
        </div>
        <div className="mb-6 flex flex-col items-center justify-center gap-5 lg:mb-12">
          <iframe
            width="291"
            height="202"
            src="https://www.youtube.com/embed/ayK5j9gM-kA?si=fMBCZs_1gF9GQJGU"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="rounded-lg lg:h-[720px] lg:w-[963px]"
          ></iframe>
          <iframe
            width="291"
            height="202"
            src="https://www.youtube.com/embed/qOrFEyCDaLE?si=q3jF-iJKMjFfc-Mv"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="rounded-lg lg:h-[720px] lg:w-[963px]"
          ></iframe>
        </div>
        <Link href={"/"} className="button mx-auto mb-6 w-[227px] text-center">
          Напишите нам
        </Link>
      </ContentZone>
    </main>
  );
};

export default AboutStudioPage;
