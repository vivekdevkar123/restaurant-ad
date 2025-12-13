'use client'

import { imageUrl } from '@/utils/publicPath';
import { useEffect } from 'react';

export default function FaviconLinks() {
  useEffect(() => {
    // Update favicon
    const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
    if (favicon) {
      favicon.href = imageUrl('/favicon.ico');
    }

    // Update apple touch icon
    const appleTouchIcon = document.querySelector('link[rel="apple-touch-icon"]') as HTMLLinkElement;
    if (appleTouchIcon) {
      appleTouchIcon.href = imageUrl('/apple-touch-icon.png');
    }

    // Update manifest
    const manifest = document.querySelector('link[rel="manifest"]') as HTMLLinkElement;
    if (manifest) {
      manifest.href = imageUrl('/site.webmanifest');
    }
  }, []);

  return null;
}

