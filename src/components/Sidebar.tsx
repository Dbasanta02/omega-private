// Sidebar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Home,
  BarChart,
  Settings,
  Bot,
} from "lucide-react";

const navItems = [
  { name: "Dashboard", icon: Home, href: "/" },
  { name: "Trading", icon: BarChart, href: "/trading" },
  { name: "Analytics", icon: BarChart, href: "/analytics" },
  { name: "Assistant", icon: Bot, href: "/assistant" },
  { name: "Settings", icon: Settings, href: "/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex w-60 bg-gray-900 text-white h-screen flex-col py-6 px-4">
      <div className="text-2xl font-bold mb-10">Ω Omega</div>
      <nav className="flex flex-col gap-4">
        {navItems.map(({ name, icon: Icon, href }) => (
          <Link
            key={name}
            href={href}
            className={cn(
              "flex items-center gap-3 px-4 py-2 rounded-md hover:bg-gray-800 transition",
              pathname === href && "bg-gray-800"
            )}
          >
            <Icon className="w-5 h-5" />
            <span>{name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
