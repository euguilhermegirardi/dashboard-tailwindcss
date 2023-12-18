import { LogOut } from 'lucide-react'
import { Button } from '../Button'

export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <img
        src="https://github.com/euguilhermegirardi.png"
        className="h-10 w-10 rounded-full"
        alt="image"
      />

      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          Guilherme Girardi
        </span>
        <p className="truncate text-sm text-zinc-500 dark:text-zinc-400">
          girardi.gui@icloud.com
        </p>
      </div>

      <Button variant="ghost" name="settings" type="button">
        <LogOut className="h-5 w-5 text-zinc-500 " />
      </Button>
    </div>
  )
}
