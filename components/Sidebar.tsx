"use client";

import { SidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <section className="sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]">
      <div className="flex flex- flex-col gap-6">
        {SidebarLinks.map((link) => {
          const isActive =
            pathname === link.route || pathname.startsWith(`${link.route}/`);
          const Icon = link.Icon;
          return (
            <Link
              href={link.route}
              key={link.label}
              className={cn(
                "flex gap-4 items-center p-4 rounded-lg justify-start",
                {
                  "bg-blue-600": isActive,
                }
              )}
            >
              <Icon size={24} />
              <p className="text-lg max-lg:hidden">{link.label}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
