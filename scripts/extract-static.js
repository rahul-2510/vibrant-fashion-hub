
const fs = require('fs');
const path = require('path');

// Paths
const distDir = path.resolve(__dirname, '../dist');
const outputDir = path.resolve(__dirname, '../static-output');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Copy the main HTML file
fs.copyFileSync(
  path.join(distDir, 'index.html'),
  path.join(outputDir, 'index.html')
);

// Copy all assets (JS, CSS, images, etc.)
const copyDirRecursive = (srcDir, destDir) => {
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  const entries = fs.readdirSync(srcDir, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);

    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
};

// Copy assets directory
if (fs.existsSync(path.join(distDir, 'assets'))) {
  copyDirRecursive(
    path.join(distDir, 'assets'),
    path.join(outputDir, 'assets')
  );
}

console.log('Static files extracted to:', outputDir);
