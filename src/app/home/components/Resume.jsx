import { Button } from '@/components/Button'
import { ArrowDownIcon } from '@/components/icons/ArrowDownIcon'
import { BriefcaseIcon } from '@/components/icons/BriefCaseIcon'
import { resume } from '../constants/resume'

import { Role } from './Role'

export function Resume() {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol> 
    </div>
  )
}
