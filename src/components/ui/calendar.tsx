import * as React from "react";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

import { cn } from "../../lib/utils";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

export function Calendar({ className, ...props }: CalendarProps) {
  return (
    <DayPicker
      className={cn("p-3", className)}
      classNames={{
        nav_button_previous: cn("absolute left-1"),
        nav_button_next: cn("absolute right-1"),
      }}
      {...props}
    />
  );
}
