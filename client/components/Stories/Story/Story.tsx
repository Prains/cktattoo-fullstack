"use client";
import routes from "@/utils/routes";
import Image from "next/image";
import { useState } from "react";

interface Story {
  story: string;
  setOpen: (index: number) => void;
  index: number;
}

const Story = ({ story, setOpen, index }: Story) => {
  return (
    <article>
      <Image
        src={`${routes.backend}${story}`}
        alt="История сktatto"
        className="h-10 w-10 cursor-pointer rounded-full border-[2px] border-[#FF00C7C4] object-cover object-center lg:h-[54px] lg:w-[54px]"
        width={36}
        height={36}
        onClick={() => setOpen(index)}
      />
    </article>
  );
};

export default Story;
