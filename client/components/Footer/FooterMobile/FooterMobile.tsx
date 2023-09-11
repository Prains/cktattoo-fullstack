import Link from "next/link";
import Image from "next/image";
import logo from './logo.svg'
import telegram from './telegram.svg'
import whatsapp from './whatsapp.svg'

const FooterMobile = () => {
  return ( 
    <div className="flex items-center justify-between lg:hidden bg-[#83746E] py-[25px] px-[21px]">
      <div className="flex-1 "></div>
      <div className="flex-1 flex flex-col items-center justify-center gap-[15px]">
        <Link href={'/'}>
          <Image src={logo} alt="логотип" />
        </Link>
        <div className="flex flex-col gap-[2px] items-center">
          <h4 className="text-[8px] font-semibold text-[#E0E0E0]">2014 - 2023</h4>
          <p className="text-[6px] font-normal text-[#E0E0E0]">Все права защищены</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-end self-start gap-5">
        <Link target="_blank" href={'https://tlgg.ru/@cktattoo_ru'}>
          <Image src={telegram} alt="значок связи по телеграм" />
        </Link>
        <Link target="_blank" href={'https://api.whatsapp.com/message/7C3BW42ZGTMNH1?autoload=1&app_absent=0'}>
          <Image src={whatsapp} alt="значок связи по вотсап" />
        </Link>
      </div>
    </div>
   );
}
 
export default FooterMobile;