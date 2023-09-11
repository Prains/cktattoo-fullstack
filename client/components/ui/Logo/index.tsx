import Image from "next/image";
import { mobileLogo, desktopLogo } from "@/images/icons";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"} className="cursor-pointer">
      <Image
        src={mobileLogo}
        alt="Круглое лицо льва"
        className="md:hidden"
        priority
      />
      <Image
        src={desktopLogo}
        alt="Круглое лицо льва"
        className="hidden md:block"
        priority
      />
    </Link>
  );
};

export default Logo;
