// Resolves a bare image key (filename without extension) to its ImageMetadata
// so data files can reference images by string and pages stay tidy.
// Powered by Vite's import.meta.glob over src/assets/images (incl. subfolders).
const mods = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/images/**/*.{jpg,jpeg,png,JPG,JPEG,PNG}",
  { eager: true }
);

const byKey: Record<string, ImageMetadata> = {};
for (const [path, mod] of Object.entries(mods)) {
  const base = path.split("/").pop()!.replace(/\.[^.]+$/, "");
  byKey[base] = mod.default;
}

export function img(key: string): ImageMetadata {
  const found = byKey[key];
  if (!found) throw new Error(`img(): no image found for key "${key}"`);
  return found;
}

export function imgs(keys: string[]): ImageMetadata[] {
  return keys.map((k) => img(k));
}
