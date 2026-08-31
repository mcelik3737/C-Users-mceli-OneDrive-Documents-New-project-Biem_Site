import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
export const Select = SelectPrimitive.Root;
export const SelectValue = SelectPrimitive.Value;
export const SelectTrigger = ({ className, children, ...props }) => <SelectPrimitive.Trigger className={cn("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 text-sm", className)} {...props}>{children}<SelectPrimitive.Icon><ChevronDown className="h-4 w-4" /></SelectPrimitive.Icon></SelectPrimitive.Trigger>;
export const SelectContent = ({ className, children, ...props }) => <SelectPrimitive.Portal><SelectPrimitive.Content className={cn("z-50 min-w-[8rem] rounded-md border bg-popover p-1 shadow-md", className)} {...props}><SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport></SelectPrimitive.Content></SelectPrimitive.Portal>;
export const SelectItem = ({ className, children, ...props }) => <SelectPrimitive.Item className={cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent", className)} {...props}><span className="absolute left-2"><SelectPrimitive.ItemIndicator><Check className="h-4 w-4" /></SelectPrimitive.ItemIndicator></span><SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText></SelectPrimitive.Item>;

