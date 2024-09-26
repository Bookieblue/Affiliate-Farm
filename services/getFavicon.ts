export async function getFaviconUrl(websiteUrl: string): Promise<string> {
  try {
    const url = new URL(websiteUrl);
    const hostname = url.hostname;
    const protocol = url.protocol;

    // Array of potential favicon locations
    const faviconLocations = [
      `${protocol}//${hostname}/favicon.ico`,
      `${protocol}//${hostname}/favicon.png`,
      `${protocol}//${hostname}/apple-touch-icon.png`,
      `${protocol}//${hostname}/apple-touch-icon-precomposed.png`,
    ];

    // Function to check if a URL exists
    const urlExists = async (url: string): Promise<boolean> => {
      try {
        const response = await fetch(url, { method: 'HEAD' });
        return response.ok;
      } catch {
        return false;
      }
    };

    // Check each location and return the first one that exists
    for (const location of faviconLocations) {
      if (await urlExists(location)) {
        return location;
      }
    }

    // If no favicon is found, return a default Google favicon service URL
    return `https://www.google.com/s2/favicons?domain=${hostname}`;
  } catch (error) {
    console.error('Error getting favicon URL:', error);
    return '';
  }
}
