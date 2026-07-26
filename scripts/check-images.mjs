import sharp from "sharp";

const files = [
  "src/assets/images/v2/hero-desktop.png",
  "src/assets/images/hero-mobile.png",
  "src/assets/images/questgiver.png",
  "src/assets/images/v2/monster-hunt.png",
  "src/assets/images/v2/team-battles.png",
  "src/assets/images/v2/adventure.png",
  "src/assets/images/v2/undercover.png",
  "src/assets/images/v2/special-mission.png",
  "public/og-v2.jpg"
];

for (const file of files) {
  const { data, info } = await sharp(file)
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  let luminanceTotal = 0;
  let darkPixels = 0;
  const pixels = info.width * info.height;

  for (let index = 0; index < data.length; index += info.channels) {
    const luminance =
      data[index] * 0.2126 +
      data[index + 1] * 0.7152 +
      data[index + 2] * 0.0722;

    luminanceTotal += luminance;
    if (luminance < 48) darkPixels += 1;
  }

  const mean = luminanceTotal / pixels;
  const dark = (darkPixels / pixels) * 100;
  console.log(
    `${file}: ${info.width}x${info.height}, mean ${mean.toFixed(1)}, dark ${dark.toFixed(1)}%`
  );
}
