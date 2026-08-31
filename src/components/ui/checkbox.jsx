import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
export const Checkbox = ({ className, ...props }) => <CheckboxPrimitive.Root className={cn("h-4 w-4 rounded border border-primary", className)} {...props}><CheckboxPrimitive.Indicator><Check className="h-3 w-3" /></CheckboxPrimitive.Indicator></CheckboxPrimitive.Root>;

