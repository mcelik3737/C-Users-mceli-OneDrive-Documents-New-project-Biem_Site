export function toast({ title, description, variant } = {}) {
  const message = [title, description].filter(Boolean).join(" — ");
  if (variant === "destructive") console.error(message);
  else console.info(message);
}
export function useToast() { return { toast }; }

