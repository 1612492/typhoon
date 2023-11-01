export function clsx(...classes: unknown[]) {
  return classes.filter(Boolean).join(' ');
}
