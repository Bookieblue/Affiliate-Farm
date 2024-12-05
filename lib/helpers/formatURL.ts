export default function formatUrl(url: string): string {
  let formattedUrl = url.startsWith('https://') ? url : `https://${url}`;

  return formattedUrl;

  // const urlObj = new URL(formattedUrl);
  // return `https://${urlObj.hostname}`;
}
