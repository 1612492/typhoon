export  function mergeStyles(...classes: unknown[]) {
  return classes.filter(Boolean).join(' ');
}
