"use client";

import {
  BarChart,
  CheckSquare,
  Cog,
  Flag,
  Home,
  LifeBuoy,
  Menu,
  Search,
  SquareStack,
  Users,
} from "lucide-react";
import * as Collapsible from "@radix-ui/react-collapsible";

import { Button, Input } from "..";
import { Logo } from "./Logo";
import { NavItem } from "./NavItem";
import { Profile } from "./Profile";
import { UsedSpaceWidget } from "./UsedSpaceWidget";
import { twMerge } from "tailwind-merge";

export function Sidebar() {
  return (
    <Collapsible.Root
      className={twMerge(
        "flex flex-col gap-6 border-b",
        "border-zinc-200 bg-white p-4 lg:w-80",
        "lg:border-x lg:px-5",
        "lg:py-8 lg:data-[state=closed]:bottom-0 dark:border-zinc-800 dark:bg-zinc-900",
      )}
    >
      <div className="flex items-center justify-between">
        <Logo />

        <Collapsible.Trigger asChild className="lg:hidden">
          <Button variant="ghost">
            <Menu />
          </Button>
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content
        forceMount
        className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
        <Input.Root>
          <Input.Prefix>
            <Search className="size-5 text-zinc-500" />
          </Input.Prefix>
          <Input.Control
            type="text"
            placeholder="Search"
            aria-placeholder="Search"
          />
        </Input.Root>

        <nav className="space-y-0.5">
          {/* Passando o icon Home como referência */}
          <NavItem title="Home" icon={Home} />
          <NavItem title="Dashboard" icon={BarChart} />
          <NavItem title="Projects" icon={SquareStack} />
          <NavItem title="Tasks" icon={CheckSquare} />
          <NavItem title="Reporting" icon={Flag} />
          <NavItem title="Users" icon={Users} />
        </nav>

        <nav className="mt-auto space-y-0.5">
          <NavItem title="Suport" icon={LifeBuoy} />
          <NavItem title="Settings" icon={Cog} />
        </nav>

        <UsedSpaceWidget />

        <div className="h-px bg-zinc-200 dark:bg-zinc-700" />

        <Profile />
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
