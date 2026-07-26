import sharp from "sharp";

await sharp("src/assets/images/v2/social-preview.png")
  .resize(1200, 630, { fit: "cover", position: "centre" })
  .jpeg({ quality: 90, mozjpeg: true })
  .toFile("public/og-v2.jpg");
