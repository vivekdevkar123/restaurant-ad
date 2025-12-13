export function imageUrl(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
  if (!base) return path;
  const cleanBase = base.replace(/\/$/, '');
  return cleanBase + (path.startsWith('/') ? path : `/${path}`);
}
