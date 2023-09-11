"use client";
import { leftLine, rightLine } from "@/images/burger";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Link {
  href: string;
  text: string;
  onClick: () => void;
}

const BurgerLink = ({ href, text, onClick }: Link) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <li className="flex items-center">
      {isActive && (
        <>
          <Image
            src={leftLine}
            priority
            alt="черная линия"
            className="absolute left-0"
          />
          <Image
            src={rightLine}
            priority
            alt="черная линия"
            className="absolute right-0"
          />
        </>
      )}
      <Link
        href={href}
        className={`font-semibold uppercase
          ${isActive ? "text-neutral-900" : "text-stone-500"}`}
        onClick={onClick}
      >
        {text}
      </Link>
    </li>
  );
};

export default BurgerLink;
