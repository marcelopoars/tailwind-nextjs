import { Bold, Italic, Link, List, ListOrdered, Mail } from "lucide-react";

import {
  Button,
  FileInput,
  Input,
  Select,
  SelectItem,
  SettingsTabs,
  Textarea,
} from "./components";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100">Settings</h1>

      <SettingsTabs />

      <div className="pt-6">
        <div className="flex flex-col gap-4 pb-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">Personal info</h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Update your photo and personal details here.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Button type="button" variant="outline">
              Cancel
            </Button>
            <Button type="submit" form="settings">
              Save
            </Button>
          </div>
        </div>

        <form id="settings" className="divide-y divide-zinc-200 dark:divide-zinc-700">
          <div className="grid gap-6 border-t border-zinc-200 py-5 lg:grid-cols-form dark:border-zinc-700">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Name
            </label>

            <div className="grid gap-6 lg:grid-cols-2">
              <Input.Root>
                <Input.Control
                  id="firstName"
                  type="text"
                  placeholder="Marcelo"
                  aria-placeholder="Marcelo"
                />
              </Input.Root>

              <label
                htmlFor="lasttName"
                className="text-sm font-medium text-zinc-700 dark:text-zinc-300 lg:sr-only"
              >
                Lastname
              </label>

              <Input.Root>
                <Input.Control
                  id="lasttName"
                  type="text"
                  placeholder="Pereira"
                  aria-placeholder="Pereira"
                />
              </Input.Root>
            </div>
          </div>

          <div className="grid gap-6 py-5 lg:grid-cols-form">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Email address
            </label>

            <div>
              <Input.Root>
                <Input.Prefix>
                  <Mail className="size-5 text-zinc-500" />
                </Input.Prefix>
                <Input.Control
                  id="email"
                  type="email"
                  placeholder="olivia@untitledui.com"
                  aria-placeholder="olivia@untitledui.com"
                />
              </Input.Root>
            </div>
          </div>

          <div className="grid gap-6 py-5 lg:grid-cols-form">
            <label
              htmlFor="yourPhoto"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Your photo
              <span className="mt-0.5 block text-zinc-500">
                This will be displayed on your profile.
              </span>
            </label>

            <FileInput.Root className="flex flex-col gap-5 lg:flex-row lg:items-start">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>

          <div className="grid gap-6 py-5 lg:grid-cols-form">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Role
            </label>

            <div>
              <Input.Root>
                <Input.Control
                  id="role"
                  type="text"
                  placeholder="Frontend Developer"
                  aria-placeholder="Frontend Developer"
                />
              </Input.Root>
            </div>
          </div>

          <div className="grid gap-6 py-5 lg:grid-cols-form">
            <label
              htmlFor="country"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Country
            </label>
            <Select placeholder="Select a country">
              <SelectItem value="br" text="Brazil" />
              <SelectItem value="us" text="United State" />
            </Select>
          </div>

          <div className="grid gap-6 py-5 lg:grid-cols-form">
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Timezone
            </label>
            <Select placeholder="Select a timezone">
              <SelectItem value="utc-3" text="America/Sao_Paulo (UTC-03:00)" />
              <SelectItem
                value="utc-8"
                text="Pacifc Standard TIme (UTC-08:00)"
              />
            </Select>
          </div>

          <div className="grid gap-6 py-5 lg:grid-cols-form">
            <label htmlFor="bio" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Bio
              <span className="mt-0.5 block text-zinc-500">
                Write a short introduction.
              </span>
            </label>
            <div className="space-y-3">
              <div className="grid gap-3 lg:grid-cols-2">
                <Select
                  placeholder="Select a timezone"
                  defaultValue="normal-text"
                >
                  <SelectItem value="normal-text" text="Normal text" />
                  <SelectItem value="markdown" text="Markdown" />
                </Select>
                <div>
                  <Button type="button" variant="ghost">
                    <Bold className="size-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button type="button" variant="ghost">
                    <Italic className="size-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button type="button" variant="ghost">
                    <Link className="size-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button type="button" variant="ghost">
                    <List className="size-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button type="button" variant="ghost">
                    <ListOrdered
                      className="size-4 text-zinc-500"
                      strokeWidth={3}
                    />
                  </Button>
                </div>
              </div>
              <Textarea
                id="bio"
                defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
              />
            </div>
          </div>

          <div className="grid gap-6 py-5 lg:grid-cols-form">
            <label
              htmlFor="portfolioProjects"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Portfolio projects
              <span className="mt-0.5 block text-zinc-500">
                Share a few snippets of your work.
              </span>
            </label>

            <FileInput.Root>
              <FileInput.Trigger htmlFor="portfolioProjects" />
              <FileInput.FileList />
              <FileInput.Control id="portfolioProjects" multiple />
            </FileInput.Root>
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
            <Button type="button" variant="outline">
              Cancel
            </Button>
            <Button type="submit">Save</Button>
          </div>
        </form>
      </div>
    </>
  );
}
