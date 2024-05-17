"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface HomeCardProps {
  className?: string;
  bgColor: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  handleClick: () => void;
}

const HomeCard: React.FC<HomeCardProps> = ({
  className,
  bgColor,
  Icon,
  title,
  description,
  handleClick,
}) => {
  return (
    <section
      className={cn(
        `px-4 py-6 flex flex-col justify-between w-full xl:max-w-[400px] min-h-[260px] rounded-[14px] cursor-pointer shadow-sm ${bgColor}`,
        className
      )}
      onClick={handleClick}
    >
      <div className="flex-center glassmorphism size-12 rounded-[10px]">
        <Icon width={27} height={27} />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-2xl">{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
};

export default HomeCard;
