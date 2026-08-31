import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export const AlertDialog = AlertDialogPrimitive.Root;
export const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
export const AlertDialogContent = ({ className, ...props }) => <AlertDialogPrimitive.Portal><AlertDialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/70" /><AlertDialogPrimitive.Content className={cn("fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-lg border bg-background p-6 shadow-xl", className)} {...props} /></AlertDialogPrimitive.Portal>;
export const AlertDialogHeader = ({ className, ...props }) => <div className={cn("space-y-2", className)} {...props} />;
export const AlertDialogFooter = ({ className, ...props }) => <div className={cn("mt-5 flex justify-end gap-2", className)} {...props} />;
export const AlertDialogTitle = AlertDialogPrimitive.Title;
export const AlertDialogDescription = AlertDialogPrimitive.Description;
export const AlertDialogAction = ({ className, ...props }) => <AlertDialogPrimitive.Action asChild><Button className={className} {...props} /></AlertDialogPrimitive.Action>;
export const AlertDialogCancel = ({ className, ...props }) => <AlertDialogPrimitive.Cancel asChild><Button variant="outline" className={className} {...props} /></AlertDialogPrimitive.Cancel>;

