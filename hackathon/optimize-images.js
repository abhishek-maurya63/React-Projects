const fs = require("fs");
const path = require("path");

console.log("🔍 Image Analysis Report:");
console.log("========================");

const assetsDir = path.join(__dirname, "src/assets");
const files = fs.readdirSync(assetsDir);

files.forEach((file) => {
  const filePath = path.join(assetsDir, file);
  const stats = fs.statSync(filePath);
  const sizeInMB = (stats.size / (1024 * 1024)).toFixed(2);

  console.log(`${file}: ${sizeInMB}MB`);

  if (stats.size > 500 * 1024) {
    // 500KB
    console.log(`  ⚠️  WARNING: ${file} is very large (${sizeInMB}MB)`);
    console.log(`     Consider optimizing this image for web use.`);
  }
});

console.log("\n📋 Recommendations:");
console.log(
  "1. Optimize can.png (2.3MB) - use WebP format or compress to <200KB"
);
console.log("2. Optimize star.png (203KB) - compress to <50KB");
console.log("3. Consider using next-gen formats like WebP or AVIF");
console.log("4. Use responsive images with srcset for different screen sizes");
