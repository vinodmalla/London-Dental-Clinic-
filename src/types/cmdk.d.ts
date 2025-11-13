// src/types/cmdk.d.ts
declare module "cmdk" {
  import * as React from "react";

  export const Command: React.ComponentType<any>;
  export const CommandDialog: React.ComponentType<any>;
  export const CommandInput: React.ComponentType<any>;
  export const CommandList: React.ComponentType<any>;
  export const CommandEmpty: React.ComponentType<any>;
  export const CommandGroup: React.ComponentType<any>;
  export const CommandSeparator: React.ComponentType<any>;
  export const CommandItem: React.ComponentType<any>;

  const CommandExport: React.ComponentType<any>;
  export default CommandExport;
}
