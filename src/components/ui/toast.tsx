// src/components/ui/toast.tsx
import * as React from "react"
import { X } from "lucide-react"
import { cn } from "../../lib/utils"

export interface ToastProps {
  id?: string
  open?: boolean
  title?: React.ReactNode
  description?: React.ReactNode
  action?: React.ReactNode
  onOpenChange?: (open: boolean) => void
}

export type ToastActionElement = React.ReactElement

const Toast = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & ToastProps
>(({ open, title, description, action, className, onOpenChange, ...props }, ref) => {
  if (!open) return null

  return (
    <div
      ref={ref}
      className={cn(
        "pointer-events-auto flex w-full max-w-sm items-start gap-3 rounded-md border bg-background p-4 shadow-lg",
        className
      )}
      {...props}
    >
      <div className="flex flex-col gap-1 flex-1">
        {title ? <p className="font-medium">{title}</p> : null}
        {description ? (
          <p className="text-sm text-muted-foreground">{description}</p>
        ) : null}
      </div>

      {action}

      <button
        className="rounded-sm p-1 hover:bg-accent"
        onClick={() => onOpenChange?.(false)}
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  )
})
Toast.displayName = "Toast"

export { Toast }
