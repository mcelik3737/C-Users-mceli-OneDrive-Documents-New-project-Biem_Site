import { OTPInput, OTPInputContext } from "input-otp";
import { useContext } from "react";
import { cn } from "@/lib/utils";
export const InputOTP = ({ className, containerClassName, ...props }) => <OTPInput containerClassName={cn("flex items-center gap-2", containerClassName)} className={cn("disabled:cursor-not-allowed", className)} {...props} />;
export const InputOTPGroup = ({ className, ...props }) => <div className={cn("flex items-center", className)} {...props} />;
export const InputOTPSlot = ({ index, className }) => { const ctx = useContext(OTPInputContext); const slot = ctx.slots[index]; return <div className={cn("relative flex h-10 w-10 items-center justify-center border border-input text-sm", className)}>{slot.char}{slot.hasFakeCaret && <span className="absolute h-4 w-px animate-caret-blink bg-foreground" />}</div>; };

