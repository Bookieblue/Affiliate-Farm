export function capitalizeFirstLetter(input: string): string {
  return input.replace(/\b\w/g, (char) => char.toUpperCase());
}

export function formatCommission(
  currency: string,
  rate: number,
  type: string = ''
): string {
  if (currency === '%') return `${rate} ${currency} ${type}`;
  return `${currency} ${rate} ${type}`;
}

export function replaceSpaceWithDash(input: string): string {
  return input.replace(/ /g, '-');
}

export function replaceDashWithSpace(input: string): string {
  return input.replace(/-/g, ' ');
}
