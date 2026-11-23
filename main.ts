// news-image-20261123 — "The world on Monday 23 November 2026"
// Decodes entry.b64 (base64 of a 1024x1024 PNG poster) from this directory
// and writes it to $MAKEFUN_OUTPUT_DIR (default /output) as entry.png.
// Node standard library only. No network. Deterministic.

const fs = require("fs");
const path = require("path");

const MAX_BYTES = 1024 * 1024; // 1 MiB
const PNG_SIGNATURE = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

const here = __dirname;
const b64Path = path.join(here, "entry.b64");
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outPath = path.join(outDir, "entry.png");

// Read the base64 payload.
const b64 = fs.readFileSync(b64Path, "utf8").trim();
if (!b64) {
  throw new Error("entry.b64 is empty");
}

// Decode. The payload must be valid base64.
const png = Buffer.from(b64, "base64");
if (png.length === 0) {
  throw new Error("entry.b64 decoded to zero bytes");
}

// The decoded length must match what the base64 length implies:
// every 4 base64 characters carry 3 bytes (minus padding).
const expectedLen = Math.floor((b64.length * 3) / 4) - (b64.endsWith("==") ? 2 : b64.endsWith("=") ? 1 : 0);
if (png.length !== expectedLen) {
  throw new Error(`decoded length ${png.length} does not match base64 length ${b64.length}`);
}

// Refuse anything over 1 MiB.
if (png.length > MAX_BYTES) {
  throw new Error(`decoded image is ${png.length} bytes, over the 1 MiB limit`);
}

// Refuse anything that is not a PNG (8-byte signature check).
if (!png.subarray(0, 8).equals(PNG_SIGNATURE)) {
  throw new Error("decoded data is not a PNG (bad signature)");
}

// Read width/height from the IHDR chunk (bytes 16..24, big-endian)
// and refuse anything larger than 1024 in either dimension.
const width = png.readUInt32BE(16);
const height = png.readUInt32BE(20);
if (width > 1024 || height > 1024) {
  throw new Error(`image is ${width}x${height}, over the 1024x1024 limit`);
}
// The poster must be exactly 1024x1024.
if (width !== 1024 || height !== 1024) {
  throw new Error(`image is ${width}x${height}, expected exactly 1024x1024`);
}

// Write the poster out.
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outPath, png);
console.log(`wrote ${outPath} (${png.length} bytes, ${width}x${height} PNG)`);
