function createFlower(
  petalColor,
  centerColor,
  potColor,
  stemColor,
  petalsNumber,
  width,
  height,
  container = document.body
) {
  let svg = `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg" >
        <rect x="20%" y="80%" width="60%" height="20%" fill="${potColor}" />
        <rect x="40%" y="40%" width="20%" height="40%" fill="${stemColor}" />
    `;
  for (let i = 0; i < petalsNumber; i++) {
    const angle = i * (360 / petalsNumber);
    svg += `<ellipse cx="50%" cy="30%" rx="15.11%" ry="17.5%" fill="${petalColor}" transform="rotate(${angle} ${
      width / 2
    } ${height / (10 / 3)})"/>`;
  }
  svg += `
      <circle cx="50%" cy="30%" r="${
        (height + width) / 25
      }" fill="${centerColor}" />
    </svg>
  `
  const blob = new Blob([svg], { type: "image/svg+xml" });
  const url = URL.createObjectURL(blob);
  const image = new Image();
  image.src = url;
  image.onload = () => URL.revokeObjectURL(url);
  image.classList.add('flower');
  container.appendChild(image);
  return image;
}
