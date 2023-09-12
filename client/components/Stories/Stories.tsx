"use client";
import ActiveStory from "./ActiveStory/ActiveStory";
import Story from "./Story/Story";
import { useState, useEffect } from "react";
import leftMachine from "./machine_mainLeft.svg";
import rightMachine from "./machine_mainRight.svg";
import Image from "next/image";
import api from "@/utils/classes/Api";
import routes from "@/utils/routes";

interface Stories {
  stories: { image: string }[];
}

const Stories = () => {
  const [open, setOpen] = useState(false);
  const [pagination, setPagination] = useState(0);
  const [stories, setStories] = useState(null as any);
  const handleOpen = (index: number) => {
    setPagination(index);
    setOpen(true);
  };

  useEffect(() => {
    const getStories = async () => {
      const data = await api.get(`${routes.backend}/api/story?populate=*`);
      setStories(data.data.attributes.image.data);
    };
    getStories();
  }, []);

  if (!stories) return null;


  return (
    <section className="my-7 flex items-center justify-center gap-6 lg:my-[60px]">
      <Image
        src={leftMachine}
        alt="татуировочная машинка"
        className="absolute left-0 top-[130px] -z-50 hidden xl:block"
      />
      <Image
        src={rightMachine}
        alt="татуировочная машинка"
        className="absolute right-0 top-[140px] -z-50 hidden xl:block"
      />
      {stories.map((story: any, index: any) => {
        const storyImage = story.attributes.url;
        return (
          <Story
            story={storyImage}
            setOpen={handleOpen}
            index={index}
            key={story.image}
          />
        );
      })}
      {open && (
        <ActiveStory
          setOpen={setOpen}
          stories={stories}
          pagination={pagination}
        />
      )}
    </section>
  );
};

export default Stories;
