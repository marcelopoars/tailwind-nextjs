"use client";

import { useState } from "react";

import * as Tabs from "@radix-ui/react-tabs";
import * as ScrollArea from "@radix-ui/react-scroll-area";

import { TabItem } from ".";

export function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState("tab-1");

  const isSelected = (tab: string) => currentTab === tab;

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <ScrollArea.Root type="scroll" className="w-full">
        <ScrollArea.Viewport className="w-full overflow-x-scroll">
          <Tabs.List className="mt-6 flex items-center gap-4 border-b border-zinc-200 dark:border-zinc-700">
            <TabItem
              value="tab-1"
              title="My details"
              isSelected={isSelected("tab-1")}
            />
            <TabItem
              value="tab-2"
              title="Profile"
              isSelected={isSelected("tab-2")}
            />
            <TabItem
              value="tab-3"
              title="Password"
              isSelected={isSelected("tab-3")}
            />
            <TabItem
              value="tab-4"
              title="Team"
              isSelected={isSelected("tab-4")}
            />
            <TabItem
              value="tab-5"
              title="Plan"
              isSelected={isSelected("tab-5")}
            />
            <TabItem
              value="tab-6"
              title="Billing"
              isSelected={isSelected("tab-6")}
            />
            <TabItem
              value="tab-7"
              title="Email"
              isSelected={isSelected("tab-7")}
            />
            <TabItem
              value="tab-8"
              title="Notifications"
              isSelected={isSelected("tab-8")}
            />
            <TabItem
              value="tab-9"
              title="Integrations"
              isSelected={isSelected("tab-9")}
            />
            <TabItem
              value="tab-10"
              title="API"
              isSelected={isSelected("tab-10")}
            />
          </Tabs.List>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar orientation="horizontal" className="flex flex-col h-0.5 bg-zinc-100 translate-y-1.5 touch-none select-none">
          <ScrollArea.Thumb className="relative flex-1 bg-zinc-300 rounded-lg" />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    </Tabs.Root>
  );
}
