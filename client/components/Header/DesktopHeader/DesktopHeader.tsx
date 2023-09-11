"use client";
import ContentZone from "@/components/ui/ContentZone/ContentZone";
import Logo from "@/components/ui/Logo";
import { profileIcon } from "@/images/icons";
import routes from "@/utils/routes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DesktopHeader = () => {
  const navList = [
    { text: "Портфолио", href: routes.portfolio },
    { text: "О студии", href: routes.about },
    { text: "Мастера", href: '/#masters' },
    { text: "Отзывы", href: routes.reviews },
    { text: "Обучение", href: routes.education },
    { text: "Контакты", href: routes.contacts },
  ];

  const phone = "+7 916 053 23 23";

  const pathname = usePathname();

  const firstHalfList = navList.slice(0, 4);
  const secondHalfList = navList.slice(4);

  return (
    <header className="hidden lg:block mt-[50px]">
      <ContentZone>
        <nav className="flex items-center justify-center gap-20">
          <ul className="flex items-center justify-center gap-12">
            {firstHalfList.map(({ href, text }) => {
              const isActive = href === pathname;
              return (
                <Link
                  href={href}
                  key={href}
                  className={`text-xs ${
                    isActive ? "text-neutral-900" : "text-stone-500"
                  } font-semibold transition-all hover:opacity-50 uppercase`}
                >
                  {text}
                </Link>
              );
            })}
          </ul>
          <Logo />
          <ul className="flex items-center justify-center gap-12">
            {secondHalfList.map(({ href, text }) => {
              const isActive = href === pathname;
              return (
                <Link
                  href={href}
                  key={href}
                  className={`text-xs ${
                    isActive ? "text-neutral-900" : "text-stone-500"
                  } font-semibold transition-all hover:opacity-50 uppercase`}
                >
                  {text}
                </Link>
              );
            })}
            <div className="flex items-center justify-center gap-11">
              <Link
                href={`tel:${phone}`}
                className="text-stone-500 text-[10px] font-normal leading-[11px] py-2 rounded-[20px] border border-stone-500 px-4 transition-all hover:opacity-50"
              >
                {phone}
              </Link>
{/*               <Link href={routes.profile}>
                <Image
                  src={profileIcon}
                  alt="торс человека в кружке"
                  priority
                />
              </Link> */}
            </div>
          </ul>
        </nav>
      </ContentZone>
    </header>
  );
};

export default DesktopHeader;
