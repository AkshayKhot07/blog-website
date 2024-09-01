export function createSlug(input: string) {
  return input.toLowerCase().replace(/\s+/g, "-");
}
