export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export async function wait(ms: number) {
  new Promise((resolve) => setTimeout(resolve, ms));
}
