export default function formatUrl(url: string): string {
  console.log(url);
  let formattedUrl = url.startsWith('https://') ? url : `https://${url}`;

  const urlObj = new URL(formattedUrl);
  return `https://${urlObj.hostname}`;
}
