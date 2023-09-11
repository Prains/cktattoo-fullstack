import Image from "next/image";

const MasterDesriptionAndWorkingImage = ({
  description,
  workingImage,
}: {
  description: string;
  workingImage: string;
}) => {
  return (
    <div className="my-6 flex flex-col items-center justify-between gap-6 lg:my-16 lg:flex-row">
      <p className="text-main max-w-[500px]">{description}</p>
      <div className="flex flex-col items-center justify-center gap-6">
        <Image
          src={workingImage}
          alt="фотография мастера в работе"
          width={600}
          height={870}
          className="h-[304px] w-[227px] rounded-xl object-cover lg:h-[870px] lg:w-[600px]"
        />
      </div>
    </div>
  );
};

export default MasterDesriptionAndWorkingImage;
