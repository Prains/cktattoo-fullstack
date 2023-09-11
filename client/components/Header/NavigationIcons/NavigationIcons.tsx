import Image from "next/image";
import { profileIcon, burgerIcon, burgerIconActive } from "@/images/icons";

interface Props {
  setOpen: Function;
  open: boolean;
}

const NavigationIcons = ({ setOpen, open }: Props) => {
  return (
    <div className="flex items-center justify-center gap-4">
{/*       <Image
        src={profileIcon}
        alt="человек в кружке"
        className="cursor-pointer w-6 h-6 lg:w-7 lg:h-7"
      /> */}
      <Image
        src={open ? burgerIconActive : burgerIcon}
        alt="три палочки паралельно друг другу"
        className="cursor-pointer lg:hidden"
        onClick={() => setOpen(!open)}
      />
    </div>
  );
};

export default NavigationIcons;
