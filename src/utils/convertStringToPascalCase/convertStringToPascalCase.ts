export function convertStringToPascalCase(str: string): string {
  const words = str.toLowerCase().split(/[\s-_]+/);

  const camelCaseStr = words
    .map((word, index) => {
      if (index === 0) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
    })
    .join("");

  return camelCaseStr;
}
