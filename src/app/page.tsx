import { Mail } from 'lucide-react'
import { Input, SettingsTabs } from './components'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>

      <SettingsTabs />

      <div className="pt-6">
        <div className="flex items-center justify-between pb-5">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
            <p className="text-sm text-zinc-500">
              Update your photo and personal details here.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-lg px-4 py-2 font-semibold shadow-sm border border-zinc-300 text-zinc-700 hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              form="settings"
              className="rounded-lg px-4 py-2 font-semibold shadow-sm text-white bg-violet-600 hover:bg-violet-700"
            >
              Save
            </button>
          </div>
        </div>

        <form id="settings" className="divide-y divide-zinc-200">
          <div className="grid grid-cols-form gap-6 py-5 border-t border-zinc-200">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700"
            >
              Name
            </label>

            <div className="grid grid-cols-2 gap-6">
              <Input.Root>
                <Input.Control
                  id="firstName"
                  type="text"
                  placeholder="Marcelo"
                  aria-placeholder="Marcelo"
                />
              </Input.Root>

              <Input.Root>
                <Input.Control
                  type="text"
                  placeholder="Pereira"
                  aria-placeholder="Pereira"
                />
              </Input.Root>
            </div>
          </div>

          <div className="grid grid-cols-form gap-6 py-5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700"
            >
              Email address
            </label>

            <div>
              <Input.Root>
                <Input.Prefix>
                  <Mail className="h-5 w-5 text-zinc-500" />
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

          <div className="grid grid-cols-form gap-6 py-5">
            <label
              htmlFor="yourPhoto"
              className="text-sm font-medium text-zinc-700"
            >
              Your photo
            </label>
          </div>

          <div className="grid grid-cols-form gap-6 py-5">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700">
              Role
            </label>
          </div>

          <div className="grid grid-cols-form gap-6 py-5">
            <label
              htmlFor="country"
              className="text-sm font-medium text-zinc-700"
            >
              Country
            </label>
          </div>

          <div className="grid grid-cols-form gap-6 py-5">
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-zinc-700"
            >
              Timezone
            </label>
          </div>

          <div className="grid grid-cols-form gap-6 py-5">
            <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
              Bio
            </label>
          </div>

          <div className="grid grid-cols-form gap-6 py-5">
            <label
              htmlFor="portfolioProjects"
              className="text-sm font-medium text-zinc-700"
            >
              Portfolio projects
            </label>
          </div>
        </form>
      </div>
    </>
  )
}
