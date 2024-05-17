"use client";

import MeetingTypeList from "@/components/MeetingTypeList";
import React from "react";
import { FaBeer, FaCoffee } from "react-icons/fa";

const Home = () => {
  const now = new Date();
  const time = now.toLocaleTimeString("es-CO", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  const date = now.toLocaleDateString("es-CO", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <div className="h-[300px] w-full rounded-[20px] bg-dark-1-gradient shadow-md">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11 px-5 py-8">
          <h2 className="glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal">
            Próxima reunión: 12:30 PM
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
            <p>{date}</p>
          </div>
        </div>{" "}
      </div>
      <MeetingTypeList></MeetingTypeList>
    </section>
  );
};

export default Home;
