export const getImagePath = (path: string) =>
  path.startsWith('public/') ? `${window.location.origin}/${path.substring(7)}` : path;
