import sharp from "sharp";

await sharp("src/assets/images/v3/social-preview-v3-current-group.png")
  .resize(1200, 630, { fit: "cover", position: "centre" })
  .jpeg({ quality: 90, mozjpeg: true })
  .toFile("public/og-v3.jpg");
