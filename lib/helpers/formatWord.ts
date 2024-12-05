export function capitalizeFirstLetter(input: string): string {
  return input.replace(/\b\w/g, char => char.toUpperCase());
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
  if (input.length < 1) return '/';
  const replalcedInput = input.replace(/ /g, '-');
  return `${replalcedInput}-affiliate-program`;
}

export function replaceDashWithSpace(input: string): string {
  return input.replace(/-/g, ' ');
}

export function removeAffiliateProgram(input: string): string {
  const phraseToRemove = 'affiliate program';

  if (input.trimEnd().toLowerCase().endsWith(phraseToRemove)) {
    return input.slice(0, -phraseToRemove.length).trimEnd();
  }

  return input;
}
