function createCherry(
  fruitColor,
  stemColor,
  width,
  height,
  container = document.body
) {
  const stemHeight = height * 0.4;
  const svg = `
        <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
            <rect x="${
              width / 2 + width / 32
            }" y="0" width="10%" height="${stemHeight}" fill="${stemColor}" />
            <ellipse cx="${width / 2}" cy="${height / 2}" rx="${
    width / 3
  }" ry="${height / 2.5}" fill="${fruitColor}" />
            <ellipse cx="${width / 2 + width / 6}" cy="${height / 2}" rx="${
    width / 3
  }" ry="${height / 2.5}" fill="${fruitColor}" />
        </svg>
    `;
  const blob = new Blob([svg], { type: "image/svg+xml" });
  const url = URL.createObjectURL(blob);
  const image = new Image();
  image.src = url;
  image.onload = () => URL.revokeObjectURL(url);
  container.appendChild(image);
  return image;
}
