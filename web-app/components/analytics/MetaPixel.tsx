"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";
import { useEffect, useState } from "react";

export const FB_PIXEL_ID = "1310751963807969";

export const pageview = () => {
    if (typeof window.fbq !== "undefined") {
        window.fbq("track", "PageView");
    }
};

export const event = (name: string, options = {}) => {
    // Retry mechanism to handle race conditions where the component mounts before Pixel is ready
    let attempts = 0;
    const maxAttempts = 20; // Try for 10 seconds (20 * 500ms)

    const track = () => {
        if (typeof window.fbq !== "undefined") {
            window.fbq("track", name, options);
        } else if (attempts < maxAttempts) {
            attempts++;
            setTimeout(track, 500);
        } else {
            console.warn(`Facebook Pixel not loaded after ${maxAttempts} attempts. Event '${name}' was not tracked.`);
        }
    };

    track();
};

export default function MetaPixel() {
    const pathname = usePathname();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (!loaded) return;
        pageview();
    }, [pathname, loaded]);

    return (
        <div>
            <Script
                id="fb-pixel"
                src="https://connect.facebook.net/en_US/fbevents.js"
                strategy="afterInteractive"
                onLoad={() => {
                    setLoaded(true);
                    window.fbq("init", FB_PIXEL_ID);
                    window.fbq("track", "PageView");
                }}
            />
            <Script id="fb-pixel-init" strategy="afterInteractive">
                {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${FB_PIXEL_ID}');
          fbq('track', 'PageView');
        `}
            </Script>
        </div>
    );
}
