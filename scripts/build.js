#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const VERSION = '1.0.0';
const BUILD_TIME = new Date().toISOString();

const required = [
  'index.html',
  'shop.html',
  'product.html',
  'cart.html',
  'blog.html',
  'community.html',
  'about.html',
  'contact.html',
  'css/style.css',
  'js/main.js',
  'js/products.js',
  'sw.js',
];

console.log('\n🔨 Gray Brands LLC — Build Check\n');

let allOk = true;
for (const file of required) {
  const full = path.join(ROOT, file);
  if (fs.existsSync(full)) {
    console.log(`  ✅  ${file}`);
  } else {
    console.error(`  ❌  MISSING: ${file}`);
    allOk = false;
  }
}

if (!allOk) {
  console.error('\n❌ Build failed — missing files above.\n');
  process.exit(1);
}

const manifest = {
  version: VERSION,
  buildTime: BUILD_TIME,
  status: 'ok',
};
fs.writeFileSync(path.join(ROOT, 'build.json'), JSON.stringify(manifest, null, 2));

console.log(`\n✅  Build ${VERSION} complete — ${BUILD_TIME}\n`);
