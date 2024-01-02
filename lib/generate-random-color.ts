/* https://github.com/OverflowCat/blog/blob/src/src/components/sidebar/CatCloud.astro */
export function generateRandomColor() {
  const MAX_RGB_VALUE = 135;
  const MIN_RGB_VALUE = 35;
  const [r, g, b] = ["r", "g", "b"].map(
    () =>
      Math.floor(Math.random() * (MAX_RGB_VALUE - MIN_RGB_VALUE)) +
      MIN_RGB_VALUE
  );
  return `rgb(${r}, ${g}, ${b})`;
}
