import * as React from "react";
import * as RechartsPrimitive from "recharts";
import { cn } from "../../lib/utils";

// --------------------------------------------
// Theme definitions
// --------------------------------------------
const THEMES = { light: "", dark: ".dark" } as const;

export type ChartConfig = {
  [key: string]: {
    label?: React.ReactNode;
    icon?: React.ComponentType;
    color?: string;
    theme?: Record<keyof typeof THEMES, string>;
  };
};

// --------------------------------------------
// Context for chart configuration
// --------------------------------------------
type ChartContextProps = {
  config: ChartConfig;
};
const ChartContext = React.createContext<ChartContextProps | null>(null);

function useChart() {
  const ctx = React.useContext(ChartContext);
  if (!ctx) throw new Error("useChart must be inside <ChartContainer />");
  return ctx;
}

// --------------------------------------------
// Chart Container
// --------------------------------------------
export const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    config: ChartConfig;
    children: React.ComponentProps<typeof RechartsPrimitive.ResponsiveContainer>["children"];
  }
>(({ id, className, children, config, ...props }, ref) => {
  const uid = React.useId();
  const chartId = `chart-${id || uid.replace(/:/g, "")}`;

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        ref={ref}
        data-chart={chartId}
        className={cn(
          "flex aspect-video justify-center text-xs",
          "[&_.recharts-cartesian-grid_line]:stroke-border/40",
          "[&_.recharts-layer]:outline-none",
          "[&_.recharts-surface]:outline-none",
          className
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
});
ChartContainer.displayName = "ChartContainer";

// --------------------------------------------
// Chart dynamic CSS generator
// --------------------------------------------
const ChartStyle: React.FC<{ id: string; config: ChartConfig }> = ({ id, config }) => {
  const colorConfig = Object.entries(config).filter(([_, c]) => c.theme || c.color);

  if (!colorConfig.length) return null;

  const styles = Object.entries(THEMES)
    .map(([theme, prefix]) => {
      const vars = colorConfig
        .map(([key, item]) => {
          const color = item.theme?.[theme as keyof typeof THEMES] || item.color;
          return color ? `--color-${key}: ${color};` : "";
        })
        .join("\n");

      return `
        ${prefix} [data-chart=${id}] {
          ${vars}
        }
      `;
    })
    .join("\n");

  return <style dangerouslySetInnerHTML={{ __html: styles }} />;
};

// --------------------------------------------
// Tooltip
// --------------------------------------------
export const ChartTooltip = RechartsPrimitive.Tooltip;

export const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    active?: boolean;
    payload?: any[];
    label?: any;
    className?: string;
  }
>(({ active, payload, label, className }, ref) => {
  if (!active || !payload || !payload.length) return null;

  return (
    <div
      ref={ref}
      className={cn(
        "rounded-md border bg-background p-2 shadow-md text-xs",
        className
      )}
    >
      <div className="font-medium mb-1">{label}</div>
      <div className="flex flex-col gap-1">
        {payload.map((item, i) => (
          <div key={i} className="flex justify-between gap-4">
            <span className="text-muted-foreground">
              {item.name}
            </span>
            <span className="font-mono">
              {item.value?.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
});
ChartTooltipContent.displayName = "ChartTooltipContent";

// --------------------------------------------
// Legend
// --------------------------------------------
export const ChartLegend = RechartsPrimitive.Legend;

export const ChartLegendContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    payload?: any[];
    className?: string;
  }
>(({ payload, className }, ref) => {
  const { config } = useChart();
  if (!payload || !payload.length) return null;

  return (
    <div
      ref={ref}
      className={cn(
        "flex items-center justify-center gap-4 pt-3 text-xs",
        className
      )}
    >
      {payload.map((item, i) => {
        const cfg = config[item.dataKey];
        return (
          <div key={i} className="flex items-center gap-1">
            <div
              className="h-2 w-2 rounded-sm"
              style={{ backgroundColor: item.color }}
            />
            {cfg?.label || item.value}
          </div>
        );
      })}
    </div>
  );
});
ChartLegendContent.displayName = "ChartLegendContent";

// --------------------------------------------
// Helper to map Recharts payload → config
// --------------------------------------------
function getPayloadConfigFromPayload(config: ChartConfig, payload: any, key: string) {
  if (!payload || typeof payload !== "object") return undefined;

  if (payload[key] && config[payload[key]]) return config[payload[key]];
  if (payload.payload && payload.payload[key] && config[payload.payload[key]]) {
    return config[payload.payload[key]];
  }

  return config[key];
}

export { ChartStyle };
