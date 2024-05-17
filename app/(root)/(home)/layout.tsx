import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React, { ReactNode } from "react";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="relative">
      <Navbar></Navbar>
      <div className="flex">
        <Sidebar></Sidebar>
        <section className="flex min-h-screen flex-1 flex-col px-6 pd-6 pt-28 max-md:pd-14 sm:px-14">
          <div className="w-full">{children}</div>
        </section>
      </div>
      Footer
    </main>
  );
};

export default HomeLayout;
