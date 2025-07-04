function createTree(
  trunkColor,
  leaveColor,
  trunkWidth,
  trunkHeight,
  leaveWidth,
  leaveHeight,
  container = document.body
) {
  const width = Math.max(trunkWidth, leaveWidth);
  const height = trunkHeight + leaveHeight;
  const svg = `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
        <rect x="${
          (width - trunkWidth) / 2
        }" y="${leaveHeight}" width="${trunkWidth}" height="${trunkHeight}" fill="${trunkColor}"/>
        <polygon points="${
          width / 2
        },0 ${width},${leaveHeight} 0,${leaveHeight}" fill="${leaveColor}" />
    </svg>
    `;
  const blob = new Blob([svg], { type: "image/svg+xml" });
  const url = URL.createObjectURL(blob);
  const image = new Image();
  image.src = url;
  image.onload = () => URL.revokeObjectURL(url);
  container.appendChild(image);
  console.log(50 - (trunkWidth / width / 2) * 100);
  return image;
}
