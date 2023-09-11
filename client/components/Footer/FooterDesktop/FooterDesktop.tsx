import Image from "next/image";
import Link from "next/link";
import logo from './logo.svg'
import telegram from './telegram.svg'
import whatsapp from './whatsapp.svg'

const FooterDesktop = () => {
  return ( 
    <div className="hidden items-center justify-between lg:flex bg-[#83746E] pt-[49px] pb-[54px] px-[60px]">
      <div className="flex-1 "></div>
      <div className="flex-1 flex flex-col items-center justify-center gap-[32px]">
        <Link href={'/'}>
          <Image src={logo} alt="логотип" />
        </Link>
        <div className="flex flex-col gap-[16px] items-center">
          <h4 className="text-[24px] font-semibold text-[#E0E0E0]">2014 - 2023</h4>
          <p className="text-[16px] font-normal text-[#E0E0E0]">Все права защищены</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-end gap-11">
        <Link target="_blank" href={'https://tlgg.ru/@cktattoo_ru'}>
          <Image src={telegram} width={44} height={44} alt="значок связи по телеграм" />
        </Link>
        <Link target="_blank" href={'https://api.whatsapp.com/message/7C3BW42ZGTMNH1?autoload=1&app_absent=0'}>
          <Image src={whatsapp} width={44} height={44} alt="значок связи по вотсап" />
        </Link>
      </div>
    </div>
   );
}
 
export default FooterDesktop;