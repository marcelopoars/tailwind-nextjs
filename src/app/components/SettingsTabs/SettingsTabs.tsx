'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { useState } from 'react'
import { TabItem } from '.'

export function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState('tab-1')

  const isSelected = (tab: string) => currentTab === tab

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <Tabs.List className="flex items-center gap-4 mt-6 border-b border-zinc-200">
        <TabItem
          value="tab-1"
          title="My details"
          isSelected={isSelected('tab-1')}
        />
        <TabItem
          value="tab-2"
          title="Profile"
          isSelected={isSelected('tab-2')}
        />
        <TabItem
          value="tab-3"
          title="Password"
          isSelected={isSelected('tab-3')}
        />
        <TabItem value="tab-4" title="Team" isSelected={isSelected('tab-4')} />
        <TabItem value="tab-5" title="Plan" isSelected={isSelected('tab-5')} />
        <TabItem
          value="tab-6"
          title="Billing"
          isSelected={isSelected('tab-6')}
        />
        <TabItem value="tab-7" title="Email" isSelected={isSelected('tab-7')} />
        <TabItem
          value="tab-8"
          title="Notifications"
          isSelected={isSelected('tab-8')}
        />
        <TabItem
          value="tab-9"
          title="Integrations"
          isSelected={isSelected('tab-9')}
        />
        <TabItem value="tab-10" title="API" isSelected={isSelected('tab-10')} />
      </Tabs.List>
    </Tabs.Root>
  )
}
